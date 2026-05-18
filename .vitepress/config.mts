import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/wdsj/',
  vite: {
    server: {
      host: '0.0.0.0',
    },
  },
  title: 'CustomAdvancements Wiki',
  description: 'CustomAdvancements 插件文档',
  lang: 'zh-CN',
  head: [['link', { rel: 'icon', href: '/安安的猪猪.jpeg' }]],
  themeConfig: {
    nav: [
      { text: '用户指南', link: '/guide/installation' },
      { text: '配置参考', link: '/config/global' },
      { text: '触发器', link: '/triggers/overview' },
      { text: '开发者', link: '/dev/api' },
      { text: '修道', link: '/xiudao/commands' },
      { text: '可视化编辑器', link: '/editor.html', target: '_blank' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '入门',
          items: [
            { text: '安装', link: '/guide/installation' },
            { text: '快速开始', link: '/guide/quickstart' },
            { text: '指令与权限', link: '/guide/commands' },
          ],
        },
      ],
      '/config/': [
        {
          text: '配置',
          items: [
            { text: '全局配置 config.yml', link: '/config/global' },
            { text: '成就页面文件', link: '/config/page' },
            { text: '成就字段参考', link: '/config/advancement' },
            { text: '稀有度系统', link: '/config/rarity' },
          ],
        },
      ],
      '/triggers/': [
        {
          text: '触发器',
          items: [
            { text: '概览', link: '/triggers/overview' },
            { text: '原版触发器', link: '/triggers/vanilla' },
            { text: 'CraftEngine 触发器', link: '/triggers/craftengine' },
            { text: 'BarterShop 触发器', link: '/triggers/bartershop' },
            { text: 'Statistic 触发器', link: '/triggers/statistic' },
            { text: 'MythicMobs 触发器', link: '/triggers/mythicmobs' },
            { text: 'PlaceholderAPI 触发器', link: '/triggers/papi' },
            { text: 'WorldGuard 触发器', link: '/triggers/worldguard' },
            { text: '假方块爆破触发器', link: '/triggers/fakeblocks' },
            { text: 'Lands 触发器', link: '/triggers/lands' },
          ],
        },
      ],
      '/dev/': [
        {
          text: '开发者',
          items: [
            { text: 'API 概览', link: '/dev/api' },
            { text: '架构说明', link: '/dev/architecture' },
            { text: '可视化编辑器', link: '/dev/editor' },
          ],
        },
      ],
      '/xiudao/': [
        {
          text: '修道',
          items: [
            { text: '管理命令', link: '/xiudao/commands' },
          ],
        },
      ],
    },
    socialLinks: [],
    search: { provider: 'local' },
    outline: { label: '本页目录', level: [2, 3] },
    docFooter: { prev: '上一页', next: '下一页' },
    darkModeSwitchLabel: '主题',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
  },
})
