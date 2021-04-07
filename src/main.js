/*
* @Author: Jingyuexing
* @Date:   2018-12-31 21:46:27
* @Last Modified by:   Admin
* @Last Modified time: 2021-04-07 18:42:12
*/
/**
* router Module
*
* Description
*/
function randomInt(scopeNum){
    function IntParser(floatNumber=0){
        return ~~floatNumber;
    }
    return IntParser(Math.random()*scopeNum);
}
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
    }).when("/kind",{
        templateUrl:"tpls/kind.html",
        controller:"kindCtrl",
    }).when("/sport",{
        templateUrl:"tpls/sport.html",
        controller:"sportCtrl"
    }).when("/aboutme",{
        templateUrl:"tpls/aboutme.html",
        controller:"meCtrl"
    }).when('/source', {
        templateUrl: 'source.html',
        controller: 'SourceCtrl'
    }).when('/data', {
        templateUrl: 'tpls/data.html',
        controller: 'DataCtrl'
    }).when('/course', {
        templateUrl: 'tpls/course.html',
        controller: 'CourseCtrl'
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

var clock = function(){
    var str = ""
    var h = new Date().getHours();
    if(0<=h&&h<5){
        //凌晨
        str = "凌晨";
    }else if(5<=h&&h<9){
        //早上
        str = "早上";
    }else if(9<=h&&h<12){
        //上午
        str = "上午";
    }else if(12<=h&&h<13){
        //中午
        str = "中午";
    }else if(13<=h&&h<15){
        //下午
        str = "下午";
    }else if(15<=h&&h<20){
        //旁晚
        str = "旁晚";
    }else if(20<=h&&h<22){
        //晚上
        str = "晚上";
    }else if(22<=h&&h<=0){
        //午夜
        str = "午夜";
    }
    return str;
}
console.log("%c特么又来看源码!","background-color:#2eb7ed;padding:4px 6px;color:#fff;border-radius:4px 4px 4px 4px;font-size:2em;")