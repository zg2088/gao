var rule={
    title:'玩偶哥哥',
    模板:'AlistShare',
    host:'https://www.wogg.link',
    url:'/vodshow/fyclass--------fypage---.html',
    filterable:0,//是否启用分类筛选,
    filter_url:'',
    filter: {},
    searchUrl:'/vodsearch/-------------.html?wd=**',
    searchable:2,
    class_parse: 'ul.nav-menu-items&&li.nav-menu-item;a&&Text;a&&href;/(\\d+).html',
    推荐:'.module-list;.module-items&&.module-item;*;*;*;*',
    double:true,
    一级:'.module-list&&.module-items&&.module-item;.module-item-cover&&.module-item-pic&&a&&title;.module-item-cover&&.module-item-pic&&img&&data-src;.module-item-text&&Text;.module-item-cover&&.module-item-pic&&a&&href',
    二级:{
        "title": "h1&&Text;.video-info-aux a:eq(0)&&Text",
        "img": ".video-cover img&&data-src",
        "desc": ".module-row-title&&p&&Text;.video-info-main&&.video-info-item:eq(2) a&&Text;.video-info-aux a:eq(3)&&Text;.video-info-main&&.video-info-item:eq(1)&&Text;.video-info-main&&.video-info-item:eq(0)&&Text",
        "content": ".sqjj_a&&Text",
        "panarray": "div.scroll-box-y&&.module-row-title",
        "panhref": "p&&Text",
    },
    搜索:'.module-search-item;h3&&Text;*;.video-serial&&Text;.video-info-header&&h3&&a&&href',
}
