/*
* @Author: Jingyuexing
* @Date:   2020-06-20 21:21:52
* @Last Modified by:   Jingyuexing
* @Last Modified time: 2020-06-20 21:27:33
*/
main.controller('SourceCtrl', ['$scope','$http', function ($scope,$http) {
    var time = new Date().getTime();
    $http({
        url:"DB/source.json?="+time,
        method:"GET"
    }).then((res)=>{
        $scope.dataset = res.data;
    },(res)=>{
    })
}])