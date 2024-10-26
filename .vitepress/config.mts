/*
 * @Author: huangTao
 * @Date: 2024-10-25 14:56:21
 * @LastEditTime: 2024-10-25 18:38:00
 * @Description:
 */
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'My Awesome Project',
  description: 'A VitePress Site',
  // header标签里面插入的内容

  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    // 网站的logo
    logo: '/logo.svg',
    // 文章右侧大纲目录
    outline: {
      level: [2, 6],
      label: '目录',
    },
    //自定义上下页名
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    // 主题
    darkModeSwitchLabel: '深浅模式',
    // 返回顶部label
    returnToTopLabel: '返回顶部',
    // 搜索
    search: {
      provider: 'local',
    },
    // 页脚
    footer: {
      message: '学习中是一件有趣的事情',
      copyright: '© 2024 huangTao',
    },
    // 文档的最后更新时间
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium',
      },
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
  // 部署的时候需要注意该参数避免样式丢失
  base: '/vitepress-blog/',
  // 打包的时候需要配置该参数
})
