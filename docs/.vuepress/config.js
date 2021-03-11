module.exports = {
  title: '许宇轩的文档',
  description: '技术文档',
  base:"/myDocument/",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: [
      ['/', '简介'],
      ['/guide/', '引导'],
      // ['/new/index1.md', '发布新框架'],
      // ['/feedback/feedback.md', '问题反馈']
  ]
  }
}
