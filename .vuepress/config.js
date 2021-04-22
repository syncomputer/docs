module.exports = {
  plugins: ['@vuepress/last-updated','@vuepress/back-to-top'],
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'Synergy Computer',
      lastUpdated: 'Last updated',
      description: 'A computer running in TPT.'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Synergy 计算机',
      lastUpdated: '上次更新',
      description: '一台运行在TPT中的计算机。'
    }
  }
}