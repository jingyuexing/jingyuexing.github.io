/*
 * @Author: Jingyuexing
 * @Date:   2018-12-31 20:40:56
 * @Last Modified by:   Jingyuexing
 * @Last Modified time: 2021-02-16 18:02:23
 */
/**
 * Main Module
 *
 * Description
 */
var dataHome = [{
        title: "16只国家二级动物白琵鹭被毒杀",
        support: "2018年12月23日，有志愿者在江西省九江市湖口县水域发现3只死亡白琵鹭和1只苍鹭\n，随后志愿者举报给湖口县林业局，将死体交由湖口县林业局野生动物保护站处理",
        btnText: "阅读更多",
        icons: "share",
        bgimgUrl: "../asset/img/苍鹭.jpg",
        moreUrl: "http://slide.news.sina.com.cn/c/slide_1_2841_348316.html#p=1"
    }, {
        title: "失明小伙自学编程 帮百万盲人网购",
        support: "盲人不能使用手机、电脑上网？广东东莞的80后小伙蔡勇斌从小失明，但他不信这个邪。通过自学编程、编写无障碍程序，如今30岁的蔡勇斌帮助上百万残障群体上网购物、娱乐。他自己也创业成功，收获了甜蜜的爱情。",
        btnText: "阅读更多",
        icons: "share",
        bgimgUrl: "../asset/img/Q91k-hrfcctm4849771.jpg",
        moreUrl: "http://slide.news.sina.com.cn/c/slide_1_2841_348314.html#p=1"
    }, {
        title: "美国首位索马里裔女议员宣誓就职",
        support: "当地时间2019年1月4日，美国弗吉尼亚，明尼苏达州的当选国会议员奥马尔（Ilhan Omar）宣誓就职后，向支持者讲话。奥马尔成为首批当选国会议员的穆斯林女性之一。",
        btnText: "阅读更多",
        icons: "share",
        bgimgUrl: "../asset/img/3-hrfcctm4906754.jpg",
        moreUrl: "http://slide.news.sina.com.cn/w/slide_1_2841_348320.html#p=1"
    }, {
        title: "美方来华旅行提示经不住推敲",
        support: "新华社北京1月4日电 （记者侯晓晨）就美国政府发布针对中国的旅行提示一事，外交部发言人陆慷4日表示，美方发布的相关旅行提示经不住推敲，中方始终欢迎包括美国公民在内的外国公民来华，并依法保障他们在华的安全与合法权益。",
        btnText: "阅读更多",
        icons: "share",
        bgimgUrl: "",
        moreUrl: "http://world.people.com.cn/n1/2019/0105/c1002-30505234.html"
    }, {
        title: "俄媒披露美“间谍”被拘现场：有机密U盘和涉密人名单",
        support: "俄媒披露美“间谍”被拘现场：有机密U盘和涉密人名单新京报快讯（记者 张树婧）据美国有线电视新闻网（CNN）报道，在俄罗斯被控从事间谍活动的美国公民保罗·惠兰的律师周四说，他已经向法院提出上诉，反对未经保释就拘留惠兰。",
        btnText: "阅读更多",
        icons: "share",
        bgimgUrl: "../asset/img/bf85-hrfcctm3126314.jpg"
    }, {
        title: "风暴“帕布”登陆泰南 机场关闭电力中断",
        support: "今年首个热带风暴“帕布”（Pabuk）昨天下午登陆泰国南部，带来强风暴雨，海上掀起巨浪。机场关闭、海上载客服务停止直到今天，大片地区的电力供应也中断。泰南一些旅游岛前几天疏散了多数旅客，但仍有上万人留下。",
        btnText: "阅读更多",
        icons: "share",
        bgimgUrl: "../asset/img/04195333_paecs.jpg"
    },
    /*
    {
    	title:"",
    	support:"",
    	btnText:"",
    	icons:"",
    	bgimgUrl:""
    },
    {
    	title:"",
    	support:"",
    	btnText:"",
    	icons:"",
    	bgimgUrl:""
    },
    {
    	title:"",
    	support:"",
    	btnText:"",
    	icons:"",
    	bgimgUrl:""
    },
    {
    	title:"",
    	support:"",
    	btnText:"",
    	icons:"",
    	bgimgUrl:""
    },
    {
    	title:"",
    	support:"",
    	btnText:"",
    	icons:"",
    	bgimgUrl:""
    },
    {
    	title:"",
    	support:"",
    	btnText:"",
    	icons:"",
    	bgimgUrl:""
    },
    {
    	title:"",
    	support:"",
    	btnText:"",
    	icons:"",
    	bgimgUrl:""
    },
    {
    	title:"",
    	support:"",
    	btnText:"",
    	icons:"",
    	bgimgUrl:""
    },
    {
    	title:"",
    	support:"",
    	btnText:"",
    	icons:"",
    	bgimgUrl:""
    },*/
];
main.controller('homeCtrl', ['$scope', function($scope) {
    $scope.docTitle = "你好"
    $scope.data = dataHome;
}]);
document.onreadystatechange = function() {
    if (document.readyState === "complete") {
        var themes = document.getElementById("themes");
        var date = new Date();
        if (date.getMonth() <= 1 && date.getDate() <= 26) {
            themes.setAttribute("href", "asset/css/happynewyear.css")
        } else {
            themes.setAttribute("href", "asset/css/default.css")
        }
    }
}