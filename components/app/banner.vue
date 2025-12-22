<script setup>
const siteSettings = useSiteSettingsStore();
const settings = siteSettings.settings;
</script>

<template>
 <section id="banner-image">
    <SanityImage :asset-id="settings.image?.asset?._id" :lqip="settings.image?.asset?.metadata?.lqip"/>
 </section>
</template>

<style lang="css" scoped>
#banner-image {
  padding-bottom: 1em;
    margin-inline: auto;
  }
</style>
