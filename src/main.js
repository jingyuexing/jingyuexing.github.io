/*
* @Author: Jingyuexing
* @Date:   2018-12-31 21:46:27
* @Last Modified by:   Jingyuexing
* @Last Modified time: 2019-07-03 16:39:50
*/
/**
* router Module
*
* Description
*/
var main=angular.module('main', ['ngRoute']);
main.service('Comm', function(){
    var str = /(kind|test|login|msg|home|yul|sport|hot|edu)/;
    var name = {"edu":"教育","hot":"热点","home":"主页","yul":"娱乐","msg":"消息","login":"注册","kind":"分类","user":"用户"};
    this.TitleName=name[location.hash.match(str)[0]];
});
main.config(['$routeProvider',function($routeProvider) {
    $routeProvider.when("/user",{
        templateUrl:"tpls/user.html",
        controller:"userCtrl",
    }).when("/hot",{
        templateUrl:"tpls/hot.html",
        controller:"hotCtrl",
    }).when("/edu",{
        templateUrl:"tpls/edu.html",
        controller:"eduCtrl",
    }).when("/kind",{
        templateUrl:"tpls/kind.html",
        controller:"kindCtrl",
    }).when("/yul",{
        templateUrl:"tpls/yul.html",
        controller:"yulCtrl",
    }).when("/home",{
        templateUrl:"tpls/home.html",
        controller:"homeCtrl",
    }).when("/sport",{
        templateUrl:"tpls/sport.html",
        controller:"sportCtrl"
    }).when("/aboutme",{
        templateUrl:"tpls/aboutme.html",
        controller:"meCtrl"
    }).when("/login",{
        templateUrl:"tpls/login.html",
        controller:"loginCtrl"
    }).when("/test",{
        templateUrl:"tpls/test.html",
        controller:"testCtrl"
    }).when("/soreline",{
        templaterUrl:"tpls/scoreline.html",
        controller:"scoreline"
    }).when("/msg",{
        templaterUrl:"tpls/msg.html",
        controller:"msgCtrl"
    }).when("/wether",{
        templateUrl:"tpls/wether.html",
        controller:"wetherCtrl"
    }).otherwise("/kind");
}]);
(function(){
    var str = /(kind|test|login|msg|home|yul|sport|hot|edu|user|wether|aboutme)/;
switch (location.hash.match(str)[0]) {
    case "kind":
        document.title="分类";
        // statements_1
        break;
    case "login":
        document.title="登陆";
        break;
    case "hot":
        document.title="热点";
        break;
    case "yul":
        document.title="娱乐";
        break;
    case "test":
        document.title="测试";
        break;
    case "msg":
        document.title="消息";
        break;
    case "home":
        document.title="主页";
        break;
    case "sport":
        document.title="运动";
        break;
    case "edu":
        document.title="教育";
        break;
    case "user":
        document.title="用户";
        break;
    case "wether":
        document.title="天气预报";
        break;
    case "aboutme":
        document.title="关于我";
        break;
}
})();
console.log("%c特么又来看源码!","background-color:#2eb7ed;padding:4px 6px;color:#fff;border-radius:4px 4px 4px 4px;font-size:2em;","paddingright:6px;")