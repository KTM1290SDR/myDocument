module.exports = {
  title: "许宇轩的文档",
  description: "技术文档",
  base: "/myDocument/",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "External", link: "https://google.com" },
    ],
    sidebar: [
      ["/", "简介"],
      ["/guide/", "引导"],
      ["/git", "git"],
    ],
  },
};
