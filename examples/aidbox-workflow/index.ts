import { aidboxClient as client, engineClient as engine } from '../shared/client'
import MailgunClient from "mailgun.js"
import FormData from "form-data"

const document = require("email.html")
const domain = process.env.MAILGUN_DOMAIN || ""
const mailgunApiKey = process.env.MAILGUN_API_KEY || ""

const { task } = engine;
const mailgun = new MailgunClient(FormData).client({ username: 'api', key: mailgunApiKey })

async function generateDepressionForm(patientId?: string, encounderId?: string): Promise<string> {
    try {
        const form = await client.client.post("/rpc", {
            method: "aidbox.sdc/launch",
            params: {
                form: "aidbox.forms.phq2phq9/PHQ2PHQ9Form",
                params: { "encounter-id": encounderId, "patient-id": patientId }
            }
        })

        const data = await client.client.post<{ result: { link: string } }>("/rpc", {
            method: "aidbox.sdc/generate-form-link",
            params: { form: { "id": form.data.result.document.id, "resourceType": "SDCDocument" } }
        })
        
        return data.data.result.link
    } catch(error: any) {
        console.log(error.response.data)
        throw(error)
    }
}

async function sendEmail(email: string, text: string) {
    const message = {
        from: `Upcoming appointment <support@${domain}>`,
        to: email, subject: "Mental Health Treatment Center", html: `<a>${text}</a>`,
    }
    
    await mailgun.messages.create(domain, message)
}

task.implement("WorkflowSendNotification", async ({ params }) => {
    const appointment = await client.getResource("Appointment", params.id)
    const participant = appointment.participant.find(({ actor }) => actor?.reference?.includes('Patient'))
    const patientId = participant?.actor?.reference?.split("/").pop()
    
    if (!patientId) throw("Error: Patient is missing")

    const patient = await client.getResource("Patient", patientId)
    const contact = patient.telecom?.find(contact => contact.system === "email")

    if (!contact) throw("Error: Email is missing")

    const patientName = patient.name?.pop()
    const encounter = await client.createResource("Encounter", {
        status: "in-progress", 
        type: [{ coding: [{ code: "optionsOnly", system: "http://hl7.org/fhir/questionnaire-answer-constraint", display: "options only" }]}],
        priority: { coding: [{ code: "EL", system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority", display: "elective" }] },
        class: { code: "VR", system: "http://terminology.hl7.org/ValueSet/encounter-class", display: "virtual" },
        subject: { reference: "Patient/" + patientId },
        resourceType: "Encounter" 
    })

    await client.createResource("Communication", {
        status: "completed",
        recipient: [{ reference: 'Patient/' + patientId }],
        basedOn: [{ reference: 'Encounter/' + encounter.id }],
        resourceType: "Communication"
    })

    const link = await generateDepressionForm(patient.id, encounter.id)
    const message = document
        .replace("{name}", (patientName?.given?.join(" ") || "") + patientName?.family)
        .replace("{link}", link)

    await sendEmail(contact?.value || "", message)

    return { status: "" }
})