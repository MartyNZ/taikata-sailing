<script setup>
const data = useSiteSettingsStore();
const settings = data.settings;
</script>
<template>
  <NuxtLayout name="homepage">
  <div>
    <pre>{{ settings }}</pre>
  </div>
  </NuxtLayout>
</template>
