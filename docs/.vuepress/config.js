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
      {
        title: "JavaScript",
        path: "/JavaScript/",
        sidebarDepth: 1,
        children: [

        ],
      },
      // {
      //   title: "算法和数据结构",
      //   path: "/algorithmAndDataStructure/",
      //   sidebarDepth: 1,
      //   children: [
      //     {
      //       title: "算法",
      //       path: "/algorithmAndDataStructure/algorithm/",
      //       sidebarDepth: 2,
      //     },
      //     {
      //       title: "数据结构",
      //       path: "/algorithmAndDataStructure/dataStructure/",
      //       sidebarDepth: 2,
      //     },
      //     {
      //       title: "leetCode",
      //       path: "/algorithmAndDataStructure/leetCode/",
      //       sidebarDepth: 2,
      //     },
      //   ],
      // },
      // {
      //   title: "git",
      //   path: "/git/",
      //   sidebarDepth: 1,
      //   children: [
      //     {
      //       title: "引导",
      //       path: "/guide/",
      //       sidebarDepth: 2,
      //       children: ["/"],
      //     },
      //   ],
      // },
      // {
      //   title: "vue3-vite-ts",
      //   path: "/vue3ViteTs/",
      //   sidebarDepth: 1,
      //   children: ["/vue3ViteTs/"],
      // },
      // {
      //   title: "其他",
      //   path: "/other/",
      //   sidebarDepth: 1,
      // },
    ],
  },
};
