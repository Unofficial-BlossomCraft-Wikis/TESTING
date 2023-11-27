export default defineAppConfig({
  docus: {
    title: 'Unofficial BlossomCraft Wiki',
    description: 'Unofficial BlossomCraft Wiki',
    url: 'https://testing-blossomcraft.dovahkiin.xyz',
    image: '/14160b5ad6af3a176eb291291ce3dbd0953fc9b2logo.webp',
    socials: {
      github: 'nuxt-themes/docus',
    },
    github: {
      dir: '.starters/default/content',
      branch: 'main',
      repo: 'docus',
      owner: 'nuxt-themes',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    },
    footer: {
      credits: {
        icon: 'IconDocus',
        text: 'Powered by Docus',
        href: 'https://docus.dev',
      },
    }
  }
})
