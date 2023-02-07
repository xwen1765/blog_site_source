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
  favicon: "img/favicon.ico",

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
  themeConfig: {
    navbar: {
      title: "Xuan Wen",
      logo: {
        alt: "My Site Logo",
        src: "img/haochen.logo.svg",
      },
      items: [
        // {
        //   to: "docs/",
        //   activeBasePath: "docs",
        //   label: "Docs",
        //   position: "left",
        // },
        { type: "localeDropdown", position: "right" },
        { to: "blog", label: "Blog", position: "right" },

        {
          href: "https://github.com/xwen1765",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Social Media",
          items: [
            {
              label: "Linkedin",
              href: "https://www.linkedin.com/in/haochen-qi-a36393171/",
            },
            {
              label: "Facebook",
              href: "https://www.facebook.com/haochen.qi.520",
            },
          ],
        },
        // {
        //   title: "Docusaurus",
        //   items: [
        //     {
        //       label: "Style Guide",
        //       to: "docs/",
        //     },
        //     {
        //       label: "Second Doc",
        //       to: "docs/doc2/",
        //     },
        //   ],
        // },
        // {
        //   title: "Community",
        //   items: [
        //     {
        //       label: "Stack Overflow",
        //       href: "https://stackoverflow.com/questions/tagged/docusaurus",
        //     },
        //     {
        //       label: "Discord",
        //       href: "https://discordapp.com/invite/docusaurus",
        //     },
        //     {
        //       label: "Twitter",
        //       href: "https://twitter.com/docusaurus",
        //     },
        //   ],
        // },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/xwen1765",
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
