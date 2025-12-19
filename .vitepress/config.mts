/*
 * @Author: huangTao
 * @Date: 2024-10-25 14:56:21
 * @LastEditTime: 2024-10-25 18:38:00
 * @Description:
 */
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Taozi的博客',
  description: '程序猿的学习笔记',
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
      text: 'Updated Date:',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/index.md' },
      { text: '面试题', link: '/src/interview/frontend/Engineering/Engineering.md' },
      { text: '后端自习室', link: '/src/backend/C/index.md' },
      {
        text: '前端小食堂',
        items: [
          {
            text: '基本功',
            items: [
              { text: 'Html', link: '/src/frontend/Html/index.md' },
              { text: 'CSS', link: '/src/frontend/CSS/index.md' },
              { text: 'JavaScript', link: '/src/frontend/JavaScript/index.md' },
              { text: 'TypeScript', link: '/src/frontend/TypeScript/index.md' },
            ]
          },
          {
            text: '框架',
            items: [
              { text: 'React', link: '/src/frontend/React/index.md' },
              { text: 'NextJS', link: '/src/frontend/NextJS/index.md' },
              { text: 'Vue', link: '/src/frontend/Vue/index.md' },
              { text: 'Tauri', link: '/src/frontend/Tauri/index.md' },
            ]
          },
        ]
      },
      { text: '算法', link: '/src/algorithm/index.md' },
    ],

    // sidebar 按路径分组，只显示当前类目
    sidebar: {
      '/src/interview/frontend/Engineering/': [
        {
          text: '面试题',
          items: [
            { text: '工程化面试题汇总', link: '/src/interview/frontend/Engineering/Engineering.md' },
            { text: '网络面试题汇总', link: '/src/interview/frontend/Engineering/Network.md' },
            { text: '浏览器相关', link: '/src/interview/frontend/Engineering/Browser.md' },
          ],
        },
      ],
      '/src/backend/C/': [
        {
          text: '后端',
          items: [
            { text: 'C语言', link: '/src/backend/C/index.md' },
          ],
        },
      ],
      '/src/frontend/TypeScript/': [
        {
          text: '基础知识学习',
          collapsed: true,
          items: [
            { text: '1.引言', link: '/src/frontend/TypeScript/index.md' },
            { text: '2.安装与配置', link: '/src/frontend/TypeScript/install.md' },
            { text: '3.TypeScript 的核心概念', link: '/src/frontend/TypeScript/baseType.md' },
          ],
        },
        {
          text: '进阶知识学习',
          collapsed: true,
          items: [
            { text: '1.进阶', link: '/src/frontend/TypeScript/baseType.md' },
          ],
        },
      ],
      '/src/algorithm/': [
        {
          text: '算法',
          items: [
            { text: '算法', link: '/src/algorithm/index.md' },
          ],
        },
      ],
    },
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
  // 部署的时候需要注意该参数避免样式丢失
  base: '/vitepress-blog/',
  // 打包的时候需要配置该参数
})
