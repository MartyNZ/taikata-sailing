// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/sanity',
    '@pinia/nuxt',
    '@vite-pwa/nuxt',
    '@nuxt/fonts',
    '@nuxt/ui',
  ],
  css:['~/assets/css/main.css'],
  pwa: {
    registerType: "autoUpdate",
    manifest: {
      name: process.env.NUXT_SITE_NAME,
      short_name: process.env.NUXT_SITE_NAME,
      description: process.env.NUXT_SITE_DESCRIPTION,
      categories: ["entertainment", "lifestyle", "shopping"],
      display_override: ["standalone", "window-controls-overlay", "fullscreen"],
      theme_color: process.env.NUXT_SITE_THEME_COLOR,
      orientation: "portrait",
      id: process.env.NUXT_SITE_PUBLISHED_URL,
      start_url: process.env.NUXT_SITE_PUBLISHED_URL,
      launch_handler: {
        client_mode: ["focus-existing", "auto"],
      },
      shortcuts: [
        {
          name: "Rant Files",
          url: "/rant-files",
          description:
            "The ultimate refuge for the grumpiest old buggers around!",
        },
        {
          name: "Products",
          url: "/products",
          description: "View our growing collection.",
        },
      ],
      icons: [
        {
          src: "/assets/imgs/logo_192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/assets/imgs/logo_512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/assets/imgs/logo_maskable.png",
          sizes: "196x196",
          type: "image/png",
          purpose: "maskable",
        },
      ],
      // screenshots: [
      //   {
      //     src: "/assets/imgs/screenshot-narrow_01.webp",
      //     sizes: "720x1200",
      //     type: "image/webp",
      //     form_factor: "narrow",
      //     label: "Homescreen of Grumpy Old Bugger Store",
      //   },
      //   {
      //     src: "/assets/imgs/screenshot-narrow_02.webp",
      //     sizes: "720x1200",
      //     type: "image/webp",
      //     form_factor: "narrow",
      //     label: "Grumpy Old Bugger Rant Files",
      //   },
      //   {
      //     src: "/assets/imgs/screenshot-narrow_03.webp",
      //     sizes: "720x1200",
      //     type: "image/webp",
      //     form_factor: "narrow",
      //     label: "Grumpy Old Bugger Store Products Page",
      //   },
      //   {
      //     src: "/assets/imgs/screenshot-narrow_04.webp",
      //     sizes: "720x1200",
      //     type: "image/webp",
      //     form_factor: "narrow",
      //     label: "Grumpy Old Bugger Store Product Page",
      //   },
      //   {
      //     src: "/assets/imgs/screenshot-wide_01.webp",
      //     sizes: "1280x720",
      //     type: "image/webp",
      //     form_factor: "wide",
      //     label: "Homescreen of Grumpy Old Bugger Store",
      //   },
      //   {
      //     src: "/assets/imgs/screenshot-wide_02.webp",
      //     sizes: "1280x720",
      //     type: "image/webp",
      //     form_factor: "wide",
      //     label: "Grumpy Old Bugger Rant Files",
      //   },
      //   {
      //     src: "/assets/imgs/screenshot-wide_03.webp",
      //     sizes: "1280x720",
      //     type: "image/webp",
      //     form_factor: "wide",
      //     label: "Grumpy Old Bugger Store Products Page",
      //   },
      //   {
      //     src: "/assets/imgs/screenshot-wide_04.webp",
      //     sizes: "1280x720",
      //     type: "image/webp",
      //     form_factor: "wide",
      //     label: "Grumpy Old Bugger Store Product Page",
      //   },
      // ],
    },
    workbox: {
      navigateFallback: "/",
      runtimeCaching: [
        {
          urlPattern: ({ request }) => request.mode === "navigate",
          handler: "NetworkFirst",
          options: {
            cacheName: "pages",
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
            },
          },
        },
      ],
    },
    // devOptions: {
    //   enabled: false,
    //   type: "module",
    // },
  },
  vite: {
    server: {
      allowedHosts: [
        "b5phpis0cqns.share.zrok.io",
        "https://taikata.net.nz",
        "https://taikata.co.nz",
        "https://taikata-sailing.netlify.app"
      ],
    },
  },
  sanity: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET,
    apiVersion: process.env.SANITY_STUDIO_API_VERSION,
  },
  imports: {
    dirs: ["stores"],
  },
})
