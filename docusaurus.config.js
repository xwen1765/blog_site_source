require("dotenv").config();
const path = require("path");

/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: "Xuan Wen",
  // tagline: "Learning is a Lifelong Process",
  //disableTitleTagline: true,
  titleDelimiter: "-",
  url: 'https://xwen1765.github.io/',
  baseUrl: "/",
  favicon: "img/xuan_logo_character.png",

  organizationName: 'xwen1765',
  projectName: 'xwen1765.github.io',
  trailingSlash: false,

  i18n: {
    defaultLocale: "en",
    // locales: ["en"],
    locales: ["en", "zh-cn"],
    localeConfigs: {
      en: {
        label: "English",
      },
      "zh-cn": {
        label: "中文",
      },
    },
   
  },

  // customFields: {
  //   // Put your custom environment here
  //   formAPI: process.env.FORM_SPREE,
  //   test: "test",
  // },
  // onBrokenLinks: "throw",
  // onBrokenMarkdownLinks: "warn",
  
  stylesheets: ["https://fonts.font.im/css?family=Raleway:500,700"],
  themes: ['@docusaurus/theme-live-codeblock'],
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "Xuan Wen",
      logo: {
        alt: "My Site Logo",
        src: "img/xuan_logo.png",
      },
      items: [
        {
          type: 'dropdown',
          to: "docs/",
          activeBasePath: "docs",
          label: "Articles",
          position: "right",

          items: [
            {
              type: 'doc',
              label: 'test1',
              docId: 'doc1',
            },
            {
              type: 'doc',
              label: 'test2',
              docId: 'test/mdx2',
            },
          ],
         
        },

        { type: "localeDropdown", position: "left" },
        // { to: "blog", label: "Blog", position: "right" },
        {
          href: "https://github.com/xwen1765",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    liveCodeBlock: {      
      playgroundPosition: 'bottom',
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Social Media",
          items: [
            {
              label: "Linkedin",
              href: "https://linkedin.com/in/xuan-wen",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            // {
            //   label: "Blog",
            //   to: "blog",
            // },
            {
              label: "GitHub",
              href: "https://github.com/xwen1765",
            },
            {
              html: `
              <a href="https://storyset.com/education">Education illustrations by Storyset</a>
                `,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Xuan Wen. Built with Docusaurus.`,
    },

  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          path: "./blog",
          // routeBasePath: "/",
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
