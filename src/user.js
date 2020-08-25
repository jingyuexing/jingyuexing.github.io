/*
* @Author: Jingyuexing
* @Date:   2019-01-01 10:01:46
* @Last Modified by:   Jingyuexing
* @Last Modified time: 2020-08-20 21:41:57
*/

main.controller('userCtrl', ['$scope', function($scope){
}]);
var data = {};var ary = []
document.querySelectorAll(".palette-card").forEach(ele=>{
     data[ele.getAttribute("data-clip")]=[];
     ele.childNodes
     document.querySelectorAll(".palette-card-body div").forEach(item=>{
        var color = /#[a-f0-9]{6}/ig;
        ary.push(color.exec(item.getAttribute("style"))[0])
     })
})