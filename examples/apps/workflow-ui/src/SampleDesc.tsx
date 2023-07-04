import { Badge, Button, Card, Container, Grid, Link, Text } from '@nextui-org/react'
import { Appointment } from 'aidbox-sdk/types'

import { AppointmentInfo } from '../../subscription-ui/src/update-sample'

interface SampleDescProps {
  createAppointment: () => void;
  appointmentData: Appointment;
  appointmentId: string | null;
}

export const SampleDesc = ({ createAppointment, appointmentData, appointmentId }: SampleDescProps) => {
   return (
     <Card>
       <Card.Body css={{ width: 'auto' }} >
         <Grid.Container
           gap={2}
           justify='center'
         >
           <Grid
             xs={12}
             md={6}
             direction='column'
           >
             <Text css={{ 'max-width': '80%', 'm': 0, 'mb': '16px' }}>
               We predefined following things in our zen-project:
             </Text>
             <Grid.Container gap={0.5}>
               <Grid
                 xs={12}
                 alignItems='center'
                 css={{ h: '30px', mb: '10px' }}
               >
                 <Badge
                   variant='dot'
                   color='primary'
                 />
                 <Text css={{ 'max-width': '80%', 'pl': '10px' }}>
                   <Link
                     href='https://github.com/Aidbox/aidbox-sdk-js/blob/dbe512df8538f01f933253c62464b895a73ad4f6/examples/zen-project/zrc/appointment-trigger.edn#L5'
                     target='_blank'
                   >Appointment trigger
                   </Link>
                  &nbsp;that starts the workflow on the&nbsp;appointment&#8288;-&#8288;creating event.
                 </Text>
               </Grid>
               <Grid
                 xs={12}
                 alignItems='center'
                 css={{ h: '30px' }}
               >
                 <Badge
                   color='primary'
                   variant='dot'
                 />
                 <Text css={{ 'max-width': '80%', 'pl': '10px' }}>
                   <Link
                     href='https://github.com/Aidbox/aidbox-sdk-js/blob/dbe512df8538f01f933253c62464b895a73ad4f6/examples/zen-project/zrc/notification.edn#L15'
                     target='_blank'
                   >Workflow definition
                   </Link>
                 </Text>
               </Grid>
               <Grid
                 xs={12}
                 alignItems='center'
                 css={{ h: '30px' }}
               >
                 <Badge
                   color='primary'
                   variant='dot'
                 />
                 <Text css={{ 'max-width': '80%', 'pl': '10px' }}>
                   <Link
                     href='https://github.com/Aidbox/aidbox-sdk-js/blob/dbe512df8538f01f933253c62464b895a73ad4f6/examples/zen-project/zrc/notification.edn#L4'
                     target='_blank'
                   >Task definition
                   </Link>
                 </Text>
               </Grid>
             </Grid.Container>
             <Text css={{ 'max-width': '80%' }}>And created&nbsp;
               <Link
                 href='https://github.com/Aidbox/aidbox-sdk-js/blob/main/examples/aidbox-workflow/index.ts'
                 target='_blank'
               >business logic
               </Link> to send patient an email notifications two days before an appointment.
             </Text>
           </Grid>
           <Grid
             xs={6}
             md={6}
           >
             <Container
               css={{ width: 'auto' }}
               display='flex'
               wrap='wrap'
             >
               <Text
                 css={{ 'text-align': 'center', 'margin-top': 0 }}
               >
                 We have data for appointment with following information:
               </Text>

               <AppointmentInfo
                 patientName={appointmentData?.participant[0]?.actor?.display || ''}
                 startDate={appointmentData?.start || ''}
                 description={appointmentData?.description || ''}
               />

               <Text>
                 Let's create the appointment to run the workflow and observe how it works.
               </Text>
               {appointmentId
? <Button color='success'>Appointment created</Button>
: <Button
    onPress={createAppointment}
  >
  Create appointment
  </Button>}
             </Container>
           </Grid>
         </Grid.Container>
       </Card.Body>
     </Card>
  )
}
