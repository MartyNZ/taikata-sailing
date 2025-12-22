<template>
  <header
class="bg-surface-50 shadow-gray-400 dark:bg-surface-950 dark:shadow-gray-700 sticky top-0 z-30 shadow-sm">
    <div class="w-full">
      <div class="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between px-2 py-2 md:px-4">
        <AppBrand />
        <div class="flex items-center gap-1 md:gap-3 justify-self-end ml-auto">
          <div class="flex gap-1">
            <app-header-navigation />
            <app-colour-mode />
            <app-share />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<style lang="css" scoped>

</style>
