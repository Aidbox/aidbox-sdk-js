import { readFile } from "fs/promises";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";



const main = async () => {

    const APPOINTMENT_START_INDEX =
        "create index if not exists appointment_start on appointment ((appointment.resource #>> '{ start }'));";

    const APPOINTMENT_PRACTITIONER_ID_INDEX = `
  create index if not exists appointment_actor_practitioner on appointment (
      (jsonb_path_query_first(
          appointment.resource, '$.participant[*] ? (@.actor.resourceType == "Practitioner")'
      ) #>> '{ actor, id }')
  );`;

    const QUERY = `
  select practitioner.resource as practitioner,
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
  from practitioner limit 10 offset {{params.offset}};`;
    const COUNT_QUERY = "select count(*) from practitioner";

    const queryOptions = {
        params: {
            offset: {
                default: 0,
                type: "number",
                isRequired: false,
            },
        },
        query: QUERY,
        "count-query": COUNT_QUERY,
    };
    // await Promise.all([
    //     // Creating index on field "start"
    //     aidboxClient.rawSQL(APPOINTMENT_START_INDEX),

    //     // Creating index on practitioner id
    //     aidboxClient.rawSQL(APPOINTMENT_PRACTITIONER_ID_INDEX),

    //     // Saving query as resource to call it later
    //     aidboxClient.createQuery("dashboard-query", queryOptions),
    // ]).catch(e => console.log(e.response.data));
}

main()


