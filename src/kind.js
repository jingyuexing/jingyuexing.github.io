/*
* @Author: Jingyuexing
* @Date:   2018-12-31 23:58:56
* @Last Modified by:   Jingyuexing
* @Last Modified time: 2019-06-28 17:16:00
*/
main.controller('kindCtrl', ['$scope',"$http", function($scope,$http){
	$http({
		url:"./DB/kind.list",
		method:"GET",
		type:"json"
	}).then(function(res){
		$scope.link = eval(res.data);
	}, function(res){
		console.log("失败!");
	});
}]);