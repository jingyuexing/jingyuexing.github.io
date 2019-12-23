/*
 * @Author: Jingyuexing
 * @Date:   2018-12-31 23:58:56
 * @Last Modified by:   Admin
 * @Last Modified time: 2019-12-24 00:06:17
 */
main.controller('kindCtrl', ['$scope', "$http", function($scope, $http) {
    var status=require("https://unpkg.com/axios@0.19.0/dist/axios.min.js")
    if(status){
        console.log("✔ load success");
    }else{
        console.log("❌ load failed");
    }
    var times = new Date();
    times = times.getTime();
    $http({
        url: "./DB/kind.list?t=" + times,
        method: "GET",
        type: "json"
    }).then(function(res) {
        $scope.link = angular.fromJson(res.data);
        $scope.backup = $scope.link;
    }, function(res) {
        console.log("失败!");
    });
    $scope.enbale = function() {
        $scope.cacheTag = this.tag;
        let temp = $scope.backup;
        let cache = [];
        for (let i = 0; i < temp.length; i++) {
            if (temp[i].tag.includes($scope.cacheTag)) {
                cache.push(temp[i]);
            }
        }
        $scope.link = cache;
    }
    $scope.$watch("cacheTag", function(newVal, oldVal) {
        if (newVal != oldVal) {
            $scope.status = "changed";
        }
    });
}]);