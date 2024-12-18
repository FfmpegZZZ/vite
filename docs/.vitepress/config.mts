import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "仙灵Bot",
  description: "基于 Koishi 的ChatBot",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '快速上手', link: '/start' },
      { text: '服务器运行状态', link: '/status'},
      { text: 'Koishi', link: 'https://koishi.chat'}
    ],
    sidebar: [
      {
        text: '快速开始',
        items: [
          { text: '模板项目', link: '/start' },
          { text: 'Windwos', link: '/startdesktop-windows' },
          { text: 'Linux', link: '/startdesktop-linux'},
          { text: 'MacOS', link: '/startdesktop-macos'},
          { text: '容器', link: '/startdocker' }
        ]
      },
      {
        text: '使用方法',
        items: [
          { text: '开发中',link: '/user'}
        ]
      },
      {
        text: ' ',
        items:[
          { text: '服务器运行状态',link: '/status'},
          { text: '关于',link: '/about'}
        ]
      }
    ],
    editLink: {
      pattern: 'https://github.com/Ffmpegzzz/vite/tree/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
  },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/XiuXianBot/xianling_bot' }
    ]
  }
})
