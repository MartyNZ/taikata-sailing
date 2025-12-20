<script setup>
const props = defineProps({
  slug: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})

</script>

<template>
  <NuxtLink class="relative block pb-2 text-sm font-semibold" :to="`/${slug}`">
    <span
      class="after:bg-surface-200 relative after:absolute after:-bottom-[5px] after:left-0 after:h-[3px] after:w-[0%] after:rounded-xl after:duration-300 after:content-[''] hover:after:w-[100%]">
      {{ title }}
    </span>
  </NuxtLink>
</template>
