var rule = {
    title:'七夜',
    host:'https://api.dovx.tk',
    url:'/fyclass-fypage&vmid=$vmid',
    detailUrl:'/pgc/view/web/season?season_id=fyid',
    filter_url:'fl={{fl}}',
    searchUrl:'/x/web-interface/search/type?keyword=**&page=fypage&search_type=',
    searchable:1,
    filterable:1,
    quickSearch:0,
    timeout:5000,
    class_name:'只支持搜索',
    class_url:'sou',
    play_parse:true,
    lazy:`js:
    input = panPlay(input,playObj.flag)
    `,
    limit:5,
    一级:`js:
    `,
     二级:`js:
        let id=input;
        let title="";
        let pic="";
        let typeName="";
        let dec=id;
        let remark="";
        let vod={vod_id:id,vod_name:title,vod_pic:pic,type_name:typeName,vod_remarks:remark,vod_content:dec};
        
        initPan();
        let panVod = panDetailContent(vod ,[input]);
        TABS = panVod.tabs
        LISTS = panVod.lists
        detailError = panVod.error
        vod["vod_play_from"]=panVod.tabs.join("$$$");

        for (var i in LISTS) {
            if (LISTS.hasOwnProperty(i)) {
              // print(i);
              try {
                LISTS[i] = LISTS[i].map(function (it) {
                  return it.split('$').slice(0, 2).join('$');
                });
              } catch (e) {
                print('格式化LISTS发生错误:' + e.message);
              }
            }
        }
        vod_play_url = LISTS.map(function (it) {
            return it.join('#');
        }).join("$$$");
        vod["vod_play_url"]=vod_play_url;
        VOD=vod;
     `,
    搜索:`js:
        function get_result(){
            let videos=[];
            let url="https://api.dovx.tk/ali/search?wd=" + KEY;
            let html = request(url);
            let jRoot = JSON.parse(html);
            let vodList=jRoot.list;
            vodList.forEach(function(vod){
            vod.vod_id = (vod["vod_content"]+"").trim();
            videos.push(vod)
        })
            return videos
        }
        VODS=get_result();
    `,
}
