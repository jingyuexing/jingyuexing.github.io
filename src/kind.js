/*
* @Author: Jingyuexing
* @Date:   2018-12-31 23:58:56
* @Last Modified by:   Admin
* @Last Modified time: 2019-11-30 23:49:34
*/
main.controller('kindCtrl', ['$scope',"$http", function($scope,$http){
    var times = new Date();
    times = times.getTime();
    $http({
        url:"./DB/kind.list?t="+times,
        method:"GET",
        type:"json"
    }).then(function(res){
        $scope.link = angular.fromJson(res.data);
        console.log($scope.link);
    }, function(res){
        console.log("失败!");
    });
    $scope.enbale=function(){
		let tag = this.tag;
        let temp = $scope.link;
        let cache = [];
		for(let i=0;i<temp.length;i++){
            if(temp[i].tag.includes(tag)){
                cache.push(temp[i]);
            }
        }
        console.log(cache);
    }
}]);