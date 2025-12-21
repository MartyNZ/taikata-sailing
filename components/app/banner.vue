<script setup>
const siteSettings = useSiteSettingsStore();
const settings = siteSettings.settings;
</script>

<template>
  <UContainer as="section" id="banner-image">
    <SanityImage :asset-id="settings.image?.asset?._id" :lqip="settings.image?.asset?.metadata?.lqip"/>
  </UContainer>
</template>

<style lang="css" scoped>
  #banner-image {
    padding-bottom:1em;
  }
</style>
