<script setup>
  import BoxComponent from './BoxComponent.vue'
</script>

<BoxComponent :items="[
    { name: 'resourceType', required: true, type: 'string', description: `Unique identifier given to each specific type of <a target='_blank' href='https://hl7.org/fhir/R4/resourcelist.html'>resource</a> defined in the FHIR specification` },
    { name: 'body', required: true, type: 'object', description: `Each FHIR resource type has its own set of attributes, which define the structure and content of <a target='_blank' href='https://hl7.org/fhir/R4/observation.html'>that resource</a>` }
]"/>
