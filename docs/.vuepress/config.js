module.exports = {
  // 网站的一些基本配置
  // base:配置部署站点的基础路径，后续再介绍
  title: 'Rainy', // 网站的标题
  description: 'Rainy Blog', // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。
  head: [
    ['link', { rel: 'icon', href: '/img/logo.jpg' }] // 需要被注入到当前页面的 HTML <head> 中的标签
  ],
  //插件:置顶按钮，图片缩放
  plugins: ['@vuepress/back-to-top', '@vuepress/medium-zoom'],
  //根路径，和仓库名一致
  base:'/rainyBlog/',
  // markdown 相关配置
  markdown: {
    // 代码块行号
    lineNumbers: true,
  },
  // 默认主题相关配置
  themeConfig: {
    //配置左上角的logo
    logo: '/img/logo.jpg',
    //导航栏
    // nav:[
    //   //直接跳转,'/'为不添加路由，跳转至首页，以/结尾的最终对应的都是/index.html
    //   { text: 'Home', link: '/' },
    //   // 可指定链接跳转模式：默认target: '_blank'新窗口打开，_self当前窗口打开
    //   //对应blog/fontend/README.md
    //   { text: '前端', link: '/blog/fontend/' },
    //   //对应blog/backend/README.md
    //   { text: '后端', link: '/blog/backend/' },
    //   //对应/guide/guide.md
    //   { text: '导航', link: '/guide/guide' },
    //    // 不指定深度，默认深度1-提取h2 最大深度-2，同一标题下最多提取到h3，想要改变深度可以指定sidebarDepth
    //   // 支持嵌套,形成下拉式的导航菜单
    //   {
    //     text: '语言',
    //     ariaLabel: 'Language Menu',
    //     items: [
    //       { text: '中文', link: '/language/chinese/' },
    //       { text: '英文', link: '/language/english/' }
    //     ]
    //   },
    // ],
    //禁用导航栏
    // navbar:false,
    //设置自动生成侧边栏
    // sidebar:'auto',
    // 设置深度，使用了sidebar: 'auto'的话只有设置0才会生效，否则默认2
    //侧边栏
    // sidebar: [
    //   {
    //     title: '分组1 前端',
    //     collapsable: false,
    //     children: [
    //       '/blog/fontend/myhtml',
    //       ['/blog/fontend/myjavascript', 'js自定义的标题']
    //     ],
    //   },
    //   {
    //     title: '分组2 后端',
    //     collapsable: true,
    //     children: [
    //       '/blog/backend/myjava',
    //     ]
    //   }
    // ],
    //导航栏
    nav:require('./nav.js'),
    //侧边啦
    sidebar:require('./sidebar.js'),

    sidebarDepth: 2,
    search: false, // 设置是否使用导航栏上的搜索框
    searchMaxSuggestions: 10,  // 搜索框显示的搜索结果数量
    //最后更新时间
    lastUpdated: 'Last Updated',
     // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
     nextLinks: true,
     // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
     prevLinks: true,
     // 导航栏显示 git 仓库
     repo: 'https://github.com/rainyGLC/rainyBlog/tree/gh-pages',
     repoLabel: 'github',

  }
}