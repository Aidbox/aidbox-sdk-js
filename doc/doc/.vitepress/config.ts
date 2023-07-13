import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Aidbox TypeScript SDK",
  description: "A VitePress Site",
  markdown: {
    lineNumbers: true,
    theme: "material-theme-palenight"

  },
  useWebFonts: true,
  themeConfig: {
    logo: 'logo.svg',
    //aside: 'left',
    socialLinks: [{ icon: 'github', link: 'https://github.com/octoshikari/aidbox-tool' }],

    editLink: {
      pattern: 'https://github.com/octoshikari/aidbox-tool/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © ${new Date().getFullYear()} Alex Streltsov`,
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
            link: '/framework-quickstart',
            // items: [
            //   { text: 'REACT', link: '/api-examples-1' },
            //   { text: 'ANGULAR', link: '/api-examples-1' },
            //   { text: 'NEXT', link: '/api-examples-1' },
            //   { text: 'VUE', link: '/api-examples-1' },
            //   { text: 'SVELTE', link: '/api-examples-1' },
            //   { text: 'FASTIFY', link: '/api-examples-1' },
            // ]
          },
          { text: 'Tutorials', link: '/tutorials' },
        ]
      },
      {
        text: 'Client API',
        items: [
          { text: 'Basics', link: '/api-examples' }, // Basics
          {
            text: 'Features', // Features Components Modules
            link: '/modules',

            items: [
              { text: 'Terminology Service', link: '/modules#search' },
              { text: 'C-CDA Healthcare Form', link: '/modules.html#auth' },
              { text: 'Workflow', link: '/modules#search' },
              { text: 'FHIR R5 Subscriptions', link: '/modules.html#methods' },
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
          }
        ]
      },
      {
        text: 'Show Cases',
        items: [
          { text: 'Search Params', link: '/markdown-examples-3' },
          { text: 'FHIR Server as a Part <br/>of Your Cluster', link: '/api-examples-7' },
          { text: '', link: '/api-examples-7' },
          { text: 'Subscriptions', link: '/api-examples-7' }
        ]
      },
    ],
  }
})
