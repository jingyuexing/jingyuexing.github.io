/*
* @Author: Jingyuexing
* @Date:   2019-06-28 17:24:20
* @Last Modified by:   Jingyuexing
* @Last Modified time: 2019-06-28 19:37:49
*/
main.controller('wetherCtrl', ['$scope',"$http", function($scope,$http){
	console.log($scope.$apply)
		$http({
			// url:"http://mobile.weather.com.cn/data/forecast/101010100.html?_=1381891660081",
			// url:"http://www.weather.com.cn/data/cityinfo/101190408.html",
			url:"http://www.weather.com.cn/data/sk/101190408.html",
			type:"json",
			method:"GET"
		}).then(function(res){
			console.log(res)
		}, function(res){
			console.log(res);
			console.log(res.status);
		});
}]);