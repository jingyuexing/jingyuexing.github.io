/*
* @Author: Jingyuexing
* @Date:   2018-12-31 23:58:56
* @Last Modified by:   Jingyuexing
* @Last Modified time: 2019-07-03 16:04:10
*/
main.controller('kindCtrl', ['$scope',"$http", function($scope,$http){
	$http({
		url:"./DB/kind.list",
		method:"GET",
		type:"json"
	}).then(function(res){
		$scope.link = angular.fromJson(res.data);
		console.log($scope.link);
	}, function(res){
		console.log("失败!");
	});
}]);