/*
 * @Author: Jingyuexing
 * @Date:   2018-12-31 23:58:56
 * @Last Modified by:   admin
 * @Last Modified time: 2022-03-02 17:56:00
 */
main.controller('kindCtrl', ['$scope', "$http", function($scope, $http) {
    var status = require("https://cdnjs.cloudflare.com/ajax/libs/axios/0.26.0/axios.min.js")
    if (status) {
        console.log("✔ load success");
    } else {
        console.log("❌ load failed");
    }
    var time = new Date().getTime();
    $http({
        url: "DB/kind.list?="+time,
        method: "GET",
    }).then(function (res) {
        $scope.backup=$scope.links = angular.fromJson(res.data);
    }, function (res) {
        console.log("失败!");
    });
    $scope.enbale = function () {
        $scope.cacheTag = this.tag;
        let temp = $scope.backup;
        let cache = [];
        for (let i = 0; i < temp.length; i++) {
            if (temp[i].tag.includes($scope.cacheTag)) {
                cache.push(temp[i]);
            }
        }
        console.log($scope.cacheTag);
        $scope.links = cache;
    }
    $scope.chineseTime = function() {
        var Ct = "子丑寅卯辰巳午未申酉戌亥".split("");
        var date = new Date();
        var h = date.getHours();
        var timeText = "";
        switch (h) {
            case 1:
            case 2:
                timeText = Ct[0];
                break;
            case 3:
            case 4:
                timeText = Ct[1];
                break;
            case 5:
            case 6:
                timeText = Ct[2];
                break;
            case 7:
            case 8:
                timeText = Ct[3];
                break;
            case 9:
            case 10:
                timeText = Ct[4];
                break;
            case 11:
            case 12:
                timeText = Ct[5];
                break;
            case 13:
            case 14:
                timeText = Ct[6];
                break;
            case 15:
            case 16:
                timeText = Ct[7];
                break;
            case 17:
            case 18:
                timeText = Ct[8];
                break;
            case 19:
            case 20:
                timeText = Ct[9];
                break;
            case 21:
            case 22:
                timeText = Ct[10];
                break;
            case 23:
            case 24:
                timeText = Ct[11];
        }
        return timeText;
    }
    $scope.timeText = $scope.chineseTime();
    console.log("[ChineseTime]:", $scope.timeText);
    $scope.$watch("cacheTag+chineseTime()", function(newVal, oldVal) {
        if (newVal != oldVal) {
            $scope.timeText = $scope.chineseTime();
            $scope.status = "changed";
        }
    });
}]);