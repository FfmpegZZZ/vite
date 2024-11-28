import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "仙灵Bot",
  description: "基于 Koishi 的ChatBot",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '快速上手', link: '/start' }
    ],
    sidebar: [
      {
        text: '快速开始',
        items: [
          { text: '部署', link: '/start' },
          { text: '关于', link: '/api-examples' }
        ]
      }
      
    ],
    editLink: {
      pattern: 'https://github.com/XiuXianBot/XiuXianDoc/tree/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
  },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/XiuXianBot/xianling_bot' }
    ]
  }
})
