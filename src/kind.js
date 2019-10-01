/*
* @Author: Jingyuexing
* @Date:   2018-12-31 23:58:56
* @Last Modified by:   jingyuexing
* @Last Modified time: 2019-10-01 12:26:56
*/
main.controller('kindCtrl', ['$scope',"$http", function($scope,$http){
	var times = new Date();
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