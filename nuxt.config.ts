export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: '@nuxt-themes/docus',
  devtools: { enabled: true },

  modules: [
    '@vite-pwa/nuxt'
  ],
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Unofficial BlossomCraft Wiki',
      short_name: 'Unofficial BlossomCraft Wiki',
      theme_color: '#E16FD6',
      icons: [
        {
          src: 'favicon.png',
          sizes: '64x64',
          type: 'image/png',
        },
        {
          src: 'favicon.ico',
          sizes: '64x64',
          type: 'image/ico',
        },
      ],
    },
  },
})
