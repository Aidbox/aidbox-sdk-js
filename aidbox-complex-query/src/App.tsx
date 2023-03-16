import {Pagination, Table} from '@nextui-org/react';
import { aidboxClient } from "./utils/aidbox-client";
import {useEffect, useState} from "react";
import {Appointment, Patient, Practitioner} from "aidbox-sdk/aidbox-types";

const columns: {key: keyof Item, label: string}[] = [
    {
        key: "name",
        label: "Name",
    },
    {
        key: "next_week_appointments",
        label: "Appointments Next Week"
    },
    {
        key: "appointments_for_three_month",
        label: "Three Month Average",
    }
];


type Item =  {
    id: string
    name?: string
    next_week_appointments?: number,
    appointments_for_three_month?: number,
}

export function App() {
    let [data, setData] = useState<Item[]>()
    let [total, setTotal] = useState<number>()
    let [page, setPage] = useState<number>(1)
    let [ initialized, setInitialized ] = useState(false)

    function createQuery() {
        Promise.all([
            aidboxClient.rawSQL(`create index on appointment (
            (appointment.resource #>> '{ start }')
        );`),
            aidboxClient.rawSQL(`create index on appointment (
            (jsonb_path_query_first(appointment.resource, '$.participant[*] ? (@.actor.resourceType == "Practitioner")') #>> '{ actor, id }')
        );`),
        aidboxClient.createQuery('dashboard-query', {
            params: {
                offset: {
                    default: 0,
                    type: "number",
                    isRequired: false
                }
            },
            query: `select practitioner.resource as practitioner,
                           (select percentile_disc(0.5) within group
                        (order by (select count(appointment)
                        from appointment
                        where jsonb_path_query_first(appointment.resource, '$.participant[*] ? (@.actor.resourceType == "Practitioner")') #>> '{ actor, id }' = practitioner.id
                        and date_part('week', (appointment.resource #>> '{ start }')::timestamp) = date_part('week',interval_date)
                        ))
                    from generate_series(now() - interval '3 months' , now(), interval '1 week') as interval_date
                        ) as appointments_for_three_month,
                        (select count(appointment) from appointment
                    where (appointment.resource #>> '{ start }') between date_trunc('week', now() + '1 week')::text and date_trunc('week', now() + '2 week')::text
                      and jsonb_path_query_first(appointment.resource, '$.participant[*] ? (@.actor.resourceType == "Practitioner")') #>> '{ actor, id }' = practitioner.id
                        ) as next_week_appointments
                    from practitioner limit 10 offset {{params.offset}};`,
            "count-query": `select count(*) from practitioner`
        })
        ]).finally(() => {
            console.log("abc")
            setInitialized(true)
        })
    }


    useEffect(() => {
        if (!initialized) {
            createQuery()
            return
        }

        aidboxClient.executeQuery<{ practitioner: Practitioner, appointments_for_three_month: number, next_week_appointments: number }[]>('dashboard-query', {offset: 10 * (page - 1)})
            .then((response) => {
                const mappedData = response.data.data.map((resource) => {
                    console.log(resource)
                    return {
                        id: resource.practitioner.id ?? '',
                        name: resource.practitioner?.name?.[0].family + " " + (resource.practitioner?.name?.[0]?.given?.[0] ?? ''),
                        appointments_for_three_month: resource.appointments_for_three_month,
                        next_week_appointments: resource.next_week_appointments
                    }
                })

                setTotal(response.data.total)
                setData(mappedData)
            })



    },[initialized, page])

    if (!initialized) {
        return <div>loading...</div>
    }

    return (
        <div style={{ padding: "50px 200px", display: 'flex', flexDirection: 'column', gap: "15px" }}>
            <Table
                aria-label="Example table with static content"
                css={{
                    height: "auto",
                    minWidth: "100%",
                }}>
                <Table.Header columns={columns}>
                    {(column) => (
                        <Table.Column key={column.key}>{column.label}</Table.Column>
                    )}
                </Table.Header>
                <Table.Body items={data ?? []}>
                    {(item) => (
                        <Table.Row key={item.id}>
                            {/*@ts-ignore*/}
                            {(columnKey) => <Table.Cell>{item?.[columnKey] ?? ''}</Table.Cell>}
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>
            {total && (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Pagination total={Math.ceil(total / 10)} initialPage={1} onChange={(page) => setPage(page)} />
                </div>
            )}
        </div>
    )
}
