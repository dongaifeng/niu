import { defineConfig } from 'dumi';

const repo = 'niu';

export default defineConfig({
  title: repo,
  favicon: '/images/WechatIMG1666.png',
  logo: '/images/WechatIMG1666.png',
  outputPath: 'docs-dist',
  mode: 'site',
  hash: true,
  // Because of using GitHub Pages
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/dongaifeng/niu',
    },
  ],

  // more config: https://d.umijs.org/config
});
