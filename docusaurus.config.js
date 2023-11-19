// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "TheJewBot's Site",

  //TODO randomize this text in the future
  tagline: 'The best discord bot the works most of the time',
  
  
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://thejewgamer.github.io/',
  baseUrl: '/TheJewBot_Site/',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'TheJewGamer', // Usually your GitHub org/user name.
  projectName: 'TheJewBot_Site', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/botIcon.png',
      navbar: {
        title: "TheJewBot's Site",
        logo: {
          alt: "TheJewBot's Logo",
          src: 'img/botIcon.png',
        },
        items: [
          {
            href: '/docs/games',
            label: 'Games',
            position: 'left',
          },
          {
            href: '/docs/mention',
            label: 'Mention',
            position: 'left',
          },
          {
            href: '/docs/mod',
            label: 'Mod',
            position: 'left',
          },
          {
            href: '/docs/multiple',
            label: 'Multiple',
            position: 'left',
          },
          {
            href: '/docs/text',
            label: 'Text',
            position: 'left',
          },
          {
            href: '/docs/utility',
            label: 'Utility',
            position: 'left',
          },
          {
            href: '/docs/voice',
            label: 'Voice',
            position: 'left',
          },
          {
            href: '/docs/voice%20multiple',
            label: 'Voice Multiple',
            position: 'left',
          },
          {
            href: 'https://github.com/TheJewGamer',
            label: 'TheJewGamer',
            position: 'right',
          },
        ],
      },
      footer: {
        copyright: `Copyright © ${new Date().getFullYear()} TheJewBot's Site. Built by TheJewGamer.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;
