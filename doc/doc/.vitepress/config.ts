import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Javascript Client",
  description: "A VitePress Site",
  base: "/aidbox-sdk-js/",
  markdown: {
    lineNumbers: true,
    theme: "material-theme-palenight"
  },
  useWebFonts: true,
  themeConfig: {
    logo: 'logo.svg',

    socialLinks: [{ icon: 'github', link: 'https://github.com/Aidbox/aidbox-sdk-js' }],

    editLink: {
      pattern: 'https://github.com/Aidbox/aidbox-sdk-js/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © ${new Date().getFullYear()} HealthSamurai`,
    },

    nav: [
      { text: 'Getting Started', link: '/markdown-examples' },
      { text: 'Client API', link: '/markdown-examples' },
      { text: 'Show Cases', link: '/markdown-examples' },
    ],
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Installation', link: '/installation' },
          {
            text: 'Framework Quickstart',
            collapsed: true,
            items: [
              { text: 'React', link: '/react-quickstart' },
              { text: 'Vue', link: '/vue-quickstart' },
              { text: 'Svelte', link: '/svelte-quickstart' },
            ]
          },
          { text: 'Typescript Support', link: '/api-examples-3' },
        ]
      },
      {
        text: 'API',
        items: [
          { text: 'Fundamentals', link: '/api-examples' },
          {
            text: 'Features', // Features Components Modules
            link: '/modules',
            items: [
              { text: 'Terminology Service', link: '/modules#search' },
              { text: 'C-CDA Forms', link: '/modules.html#auth' },
              { text: 'Workflow Engine', link: '/modules#search' },
              { text: 'Subscriptions', link: '/modules.html#methods' },
            ]
          },
          {
            text: 'Converters',
            link: '/converters',
            collapsed: true,
            items: [
              { text: 'C-CDA => FHIR', link: '/modules#access-control' },
              { text: 'HL7v2 => FHIR', link: '/modules#access-control' },
              { text: 'X12 => FHIR', link: '/modules#access-control' },
            ]
          },

        ]
      },
      {
        text: 'Show Cases',
        items: [
        ]
      },
    ],
  }
})
