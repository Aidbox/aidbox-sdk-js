<script>
export default {
  props: { items: Array },
}
</script>

<template>
    <div class="container">
      <div v-for="(item, index) in items" :key="index" style="border: 1px solid #252529; border-radius: 12px; background-color: #252529;">
        <div style="padding: 24px; flex-direction: column;">
          <h2 style="line-height: 24px; font-size: 16px; font-weight: 600;">{{ item.name }}</h2>
          <p style="color: rgba(235, 235, 245, 0.6); flex-grow: 1; padding-top: 8px; line-height: 24px; font-size: 14px; font-weight: 500;">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
</template>
