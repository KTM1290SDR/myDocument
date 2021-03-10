module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  base:"/myDocument/",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: [
      ['/', '简介'],
      // ['/cst/cst.md', '车商通'],
      // ['/new/index1.md', '发布新框架'],
      // ['/feedback/feedback.md', '问题反馈']
  ]
  }
}
