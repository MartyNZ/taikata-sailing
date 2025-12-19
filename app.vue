<script setup>
const settingsStore = useSiteSettingsStore();

// Fetch settings
await settingsStore.fetchStoreSettings();

const themeStyles = computed(() => {
  const settings = settingsStore.settings;
  if (!settings) return "";

  const primaryRGB = settings.color?.primary?.rgb;
  const secondaryRGB = settings.color?.secondary?.rgb;
  const darkRGB = settings.color?.surface?.dark?.rgb;
  const lightRGB = settings.color?.surface?.light?.rgb;

  return `
    :root {
      --color-primary: ${settings.color?.primary?.hex || '#5e2804'};
      --color-primary-rgb: ${primaryRGB ? `${primaryRGB.r},${primaryRGB.g},${primaryRGB.b}` : '94,40,4'};
      --color-secondary: ${settings.color?.secondary?.hex || '#c05815'};
      --color-secondary-rgb: ${secondaryRGB ? `${secondaryRGB.r},${secondaryRGB.g},${secondaryRGB.b}` : '13,67,1'};
      --color-surface-dark: ${settings.color?.surface?.dark?.hex || '#170B02'};
      --color-surface-dark-rgb: ${darkRGB ? `${darkRGB.r},${darkRGB.g},${darkRGB.b}` : '44,28,5'};
      --color-surface-light: ${settings.color?.surface?.light?.hex || '#170B02'};
      --color-surface-light-rgb: ${lightRGB ? `${lightRGB.r},${lightRGB.g},${lightRGB.b}` : '25,25,25'};
      --font-primary: "${settings.fontPrimary || 'Graduate'}", sans-serif;
      --font-secondary: "${settings.fontSecondary || 'Raleway'}", sans-serif;
    }
  `;
});

useHead(() => ({
  style: [
    {
      innerHTML: themeStyles.value
    }
  ],

  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/assets/images/favicon.ico'
    }
  ]
}));

const router = useRouter();

// Scroll to top after each navigation
router.afterEach(() => {
  window.scrollTo(0, 0);
});
</script>
<template>
  <UApp>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
