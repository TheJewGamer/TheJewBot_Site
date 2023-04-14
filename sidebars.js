/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Intro'
    },
    {
      type: 'category',
      label: 'Voice Commands',
      link: {
        type: 'doc',
        id: 'Voice/Voice Commands'
      },
      collapsed: true,
      items: [
        'Voice/two',
      ],
    },
    {
      type: 'category',
      label: 'Text Commands',
      link: {
        type: 'doc',
        id: 'Voice/Voice Commands'
      },
      collapsed: true,
      items: [
        'Voice/two',
      ],
    },
  ]
};

module.exports = sidebars;
