var rule={
    title:'JOJO',
    模板:'AlistShare',
    host:'https://pan.jiohub.top',
    url:'/video/fyclass?page=fypage&size=18',
    filterable:0,//是否启用分类筛选,
    filter_url:'',
    filter: {},
    class_name:'电影&国产&美剧&韩剧&日剧&动漫&纪录',
    class_url:'电影&国产&美剧&韩剧&日剧&动漫&纪录',
    searchUrl:'/index.php/vodsearch/**-------------.html',
    searchable:2,
    headers:{
        'User-Agent': 'MOBILE_UA',
    },
    class_parse: 'ul.nav-menu-items&&li;a&&Text;a&&href;/(\\d+).html',
    推荐:'.content-list-item;.content-rigth&&.content-body&&a;*;*;*;*',
    double:true,
    一级:'.content-list-item&&.content-rigth&&.content-body&&a;.card-title&&Text;.card-content&&img&&src;.score&&Text;a&&href',
    二级:{
        "title": ".content-detail&&h3&&Text;.content-detail p:eq(0)&&Text",
        "desc": ".share-item-data&&Text;.content-detail&&p:eq(2)&&Text;;.content-detail&&p:eq(3)&&Text&&.content-detail&&p:eq(4)&&Text",
        "content": ".desc&&.detail-sketch&&Text",
    },
    搜索:'.module-items;h3&&Text;*;.video-serial&&Text;.video-info-header&&h3&&a&&href',
}
