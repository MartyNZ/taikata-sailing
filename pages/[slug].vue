<script setup>
const route = useRoute();
const slug = route.params.slug
</script>
<template>
<NuxtLayout name="internal">
  <UContainer as="section">
    <h3>{{ slug }}</h3>
  </UContainer>
</NuxtLayout>
</template>
<style lang="css" scoped></style>
