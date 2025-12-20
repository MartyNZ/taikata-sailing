<script setup>
const data = useSiteSettingsStore();
const settings = data.settings;
</script>

<template>
  <!-- <pre>{{ settings }}</pre> -->
  <div id="header-brand" class="flex items-center gap-2">
    <NuxtLink to="/">
      <div class="w-7 md:w-10">
        <img :src="settings.logoUrl" :alt="settings.title" />
      </div>
    </NuxtLink>
    <NuxtLink to="/">
      <h1 class="font-brand text-xl font-semibold uppercase sm:ml-4 sm:text-3xl">
        {{ settings.title }}
      </h1>
    </NuxtLink>
  </div>
</template>

