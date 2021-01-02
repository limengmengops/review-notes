// config.js是整个项目的核心配置文件，所有菜单，栏目相关的配置均配置在该模块中
const themeConfig = require('./config/theme/index.js');
const pluginConf = require('./config/plugins/index.js')
module.exports = {
    title: '萌萌的学习笔记',
    description: '温故而知新，可以为师矣',
    dest: './dist',
    // port: '6666',
    head:[
        // ['link',{rel:'icon', href:'/img/lf.favicon'}],
        ['link',{rel:'stylesheet', href:'/css/style.css'}],
        ['script',{charset:'utf-8', type:'text/javascript', src:'/js/main.js'}]
    ],
    markdown:{
        lineNumber: true
    },
    theme:'reco',
    themeConfig:{
        type:'blog',
        smoothScroll: true,
        nav: require('./config/nav.js'),
        sidebar: require('./config/sidebar.js'),
        sidebarDepth:2,
        // 自动形成侧边栏导航
        // sidebar:'auto',

        // 评论模块
        // valineConfig:{
        //     appId:'',
        //     appKey:'',
        //     recordIP:true,
        //     placeholder: '来了...',
        //     visitor:true
        // },
        authorAvatar:'/img/lf.jpeg',
        // 最后更新时间
        lastUpdate:'最后更新时间',//string | boolean
        //如果你的文档不在仓库的根部
        repo:'docs',
        // 可选，默认为master
        docsBranch:'source',
        // editLinks:true,
        // editLinkText:'在github上编辑此页',
        anthor:'萌萌',
        startYears:'2020',
        // 搜索设置
        search:true,
        searchMatchSuggestion: 10,
        // ICP备案
        record:'',
        recordLink:'',
        // 公网安备备案
        cyberSecurityRecord:'',
        cyberSecurityLink:'',
        //友情链接
        friendLink:[
            {
                title:'午后南杂',
                desc:'Enjoy when you can , and endure what you must',
                email:'11567434527@qq.com',
                link:'https://www.recoluan.com'
            }
        ]
    },
    plugins:pluginConf
  }