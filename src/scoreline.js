/*
* @Author: Jingyuexing
* @Date:   2019-06-26 18:57:15
* @Last Modified by:   Jingyuexing
* @Last Modified time: 2019-06-28 17:13:05
*/
main.controller('scoreline', ['$scope', function($scope,Comm){
	$http({
		method:"GET",
		url:"https://api.eol.cn/web/api?uri=apidata/api/gk/score/school",
	}).then(function success(response){
		// 请求成功
		console.log(response)
		$scope.data = response.data.item
	}, function faild(){
		//请求失败
		console.log("Error")
	});
	$scope.HeadName=Comm.TitleName;
}]);
