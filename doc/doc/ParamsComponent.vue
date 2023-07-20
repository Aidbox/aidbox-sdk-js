import { defineProps } from 'vue'

<script>
export default {
  props: { items: Array },
}
</script>

<template>
  <div v-for="(item, index) in items" :key="index">
    <div v-if="index === 0" style="height: 0px; margin-top: 12px; border-top: 1px solid rgba(82, 82, 89, 0.32)"/>

    <div style="padding: 6px 6px 6px 0px">
      <div>
        <span style="color: white; font-family: Consolas, monospace">{{ item.name }}</span>
        <span v-if="item.required" style="padding: 2px 6px; margin-left: 6px; border: 1px solid orange; border-radius: 10px; font-size: 10px; color: #ffb224; background-color: #341c00">REQUIRED</span>
        <span style="font-size: 14px; opacity: .7; line-height: 16px; font-family: Consolas, monospace; margin-left: 6px">{{ item.type }}</span>
      </div>
      <div v-html="item.description" style="font-size: 12px; opacity: .7"/>
    </div>

    <div style="height: 0px; border-top: 1px solid rgba(82, 82, 89, 0.32)"/>
  </div>
</template>




