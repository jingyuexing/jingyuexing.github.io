/*
 * @Author: Jingyuexing
 * @Date:   2018-12-31 23:58:56
 * @Last Modified by:   Jingyuexing
 * @Last Modified time: 2020-01-25 14:52:21
 */
main.controller('kindCtrl', ['$scope', "$http", function($scope, $http) {
    var status = require("https://unpkg.com/axios@0.19.0/dist/axios.min.js")
    if (status) {
        console.log("✔ load success");
    } else {
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
    var chinesetime = "子丑寅卯辰巳午未申酉戌亥".split("");
    var date = new Date();
    var h = date.getHours();
    switch (h) {
        case 1:
        case 2:
            $scope.timeText = chinesetime[0];
            break;
        case 3:
        case 4:
            $scope.timeText = chinesetime[1];
            break;
        case 5:
        case 6:
            $scope.timeText = chinesetime[2];
            break;
        case 7:
        case 8:
            $scope.timeText = chinesetime[3];
            break;
        case 9:
        case 10:
            $scope.timeText = chinesetime[4];
            break;
        case 11:
        case 12:
            $scope.timeText = chinesetime[5];
            break;
        case 13:
        case 14:
            $scope.timeText = chinesetime[6];
            break;
        case 15:
        case 16:
            $scope.timeText = chinesetime[7];
            break;
        case 17:
        case 18:
            $scope.timeText = chinesetime[8];
            break;
        case 19:
        case 20:
            $scope.timeText = chinesetime[9];
            break;
        case 21:
        case 22:
            $scope.timeText = chinesetime[10];
            break;
        case 23:
        case 24:
            $scope.timeText = chinesetime[11];
    }
    console.log("ChineseTime:",$scope.timeText);
    $scope.$watch("cacheTag+timeText", function(newVal, oldVal) {
        if (newVal != oldVal) {
            $scope.status = "changed";
        }
    });
}]);