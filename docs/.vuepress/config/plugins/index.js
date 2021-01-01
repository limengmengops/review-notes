module.exports ={
    '@vuepress/pwa':{
        serviceWorker: true,
        updatePopup:{
            message:'有新的内容更新',
            buttonText:'刷新'
        }
    },
    // 返回顶部
    '@vuepress/back-to-top':{},
    // 百度站点推送
    '@vuepress-plugin-baidu-autopush':{},
    copyright:{
        nocopy:true,//选中的文字将无法复制
        minLength: 100//如果长度超过100个字符
    },
    '@vuepress/medium-zoom':{
        selector:'img',
        options:{
            margin:16
        }
    },
    'dynamic-title':{
        // showIcon:'/favicon.ico',
        showText:'欢迎回来～～',
        // hideIcon:'/favicon.ico',
        hideText:'不要走～～',
        recoverTime:2000
    },
    '@vuepress/nprogress':{},
    '@vuepress-plugin-smooth-scroll':{},
    '@vuepress-reco/vuepress-plugin-rss':{
        site_url:'',//网站地址
        copyright:'萌萌'//版权署名
    },
    'reading-progress':{
        //阅读进度
    },
    'vuepress-plugin-code-plugin':{
        //一键复制代码
    },
    //分享插件
    'social-share':{
        title:'',
        description:'',
        sites:[],

    }
}