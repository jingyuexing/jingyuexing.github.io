/*
* @Author: Jingyuexing
* @Date:   2018-12-31 23:58:56
* @Last Modified by:   Admin
* @Last Modified time: 2019-12-01 00:34:43
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
    $scope.reset=function(){
        $scope.cacheTag = "None";
        $http({
        url:"./DB/kind.list?t="+times,
        method:"GET",
        type:"json"
    }).then(function(res){
        $scope.$watch('cacheTag', function(newValue, oldValue) {
            if(newValue!=oldValue){
                $scope.status ="changed";
                $scope.link  = angular.fromJson(res.data)
            }            
        });
        $scope.link = angular.fromJson(res.data);
    }, function(res){
    });
    }
    $scope.enbale=function(){
		$scope.cacheTag = this.tag;
        let temp = $scope.link;
        let cache = [];
		for(let i=0;i<temp.length;i++){
            if(temp[i].tag.includes($scope.cacheTag)){
                cache.push(temp[i]);
            }
        }
        $scope.link = cache;
        $scope.$watch("cacheTag", function(newVal, oldVal) {
            if(newVal!=oldVal){
                $scope.link = cache;
                $scope.status ="changed";
            }
        });
    }
}]);