/*
* @Author: Jingyuexing
* @Date:   2018-12-31 23:58:56
* @Last Modified by:   Admin
* @Last Modified time: 2019-11-30 23:22:40
*/
main.controller('kindCtrl', ['$scope',"$http", function($scope,$http){
	var times = new Date();
	times = times.getTime();
	$scope.enbale=function(){
		console.log(this);
	}
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
}]);