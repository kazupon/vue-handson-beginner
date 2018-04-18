module.exports = {
  title: 'Vue Hands-on',
  description: 'Vue.js Hands-on for Beginner',
  themeConfig: {
    repo: 'kazupon/vue-handson-beginner',
    docsDir: 'docs',
    nav: [{
      text: 'イントロダクション',
      link: '/intro/',
    }, {
      text: 'セットアップ',
      link: '/setup/'
    }, {
      text: 'ハンズオン',
      link: '/handson/'
    }],
    sidebar: {
      '/handson/': [{
        title: 'ハンズオン',
        collapsable: false,
        children: [
          'hello-world',
          'lifecycle-reactive',
          'directive',
          'form',
          'computed-watcher',
          'class-style',
          'conditional',
          'list',
          'components'
        ]
      }]
    }
  }
}
