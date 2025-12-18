<script setup>
const settingsStore = useSiteSettingsStore();

// Fetch settings
await settingsStore.fetchStoreSettings();

const themeStyles = computed(() => {
  const settings = settingsStore.settings;
  if (!settings) return "";

  const primaryRGB = settings.clrPrimary?.rgb;
  const secondaryRGB = settings.clrSecondary?.rgb;
  const defaultRGB = settings.clrDefault?.rgb;

  return `
    :root {
      --color-primary: ${settings.clrPrimary?.hex || '#5e2804'};
      --color-primary-rgb: ${primaryRGB ? `${primaryRGB.r},${primaryRGB.g},${primaryRGB.b}` : '94,40,4'};
      --color-secondary: ${settings.clrSecondary?.hex || '#c05815'};
      --color-secondary-rgb: ${secondaryRGB ? `${secondaryRGB.r},${secondaryRGB.g},${secondaryRGB.b}` : '13,67,1'};
      --color-default: ${settings.clrDefault?.hex || '#170B02'};
      --color-default-rgb: ${defaultRGB ? `${defaultRGB.r},${defaultRGB.g},${defaultRGB.b}` : '44,28,5'};
      --font-primary: "${settings.fontPrimary || 'Montserrat'}", sans-serif;
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
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
