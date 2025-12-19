<script setup>
const data = useSiteSettingsStore();
const settings = data.settings;
</script>
<template>
  <NuxtLayout name="homepage">
  <div>
      <app-settings />
  </div>
  </NuxtLayout>
</template>
