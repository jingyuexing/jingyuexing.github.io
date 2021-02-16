/*
 * @Author: Admin
 * @Date:   2020-09-09 13:14:05
 * @Last Modified by:   Admin
 * @Last Modified time: 2020-09-16 02:59:02
 */

/**
 * 两个时间差 如果end未指定则默认为当前时间
 * @param  {string|Date} start 起始日期
 * @param  {string|Date} end   终止日期
 * @return {Object}       相差时间
 * @example
 *
 * dateDiff("2020-1-9")
 * dateDiff(new Date(2020,1,9),new Date(2020,10,1))
 */
function dateDiff(start, end) {
    /**
     * 时间差值
     * @param  {string|Date} start 起始时间
     * @param  {string|Date} end   结束时间
     * @return {number}       差值
     */
    function dateMul(start, end) {
        if (typeof start === "string") {
            var strList = start.split("-");
            start = new Date(Number(strList[0]), Number(strList[1]), Number(strList[2]))
        }
        if (typeof end === "string") {
            var strlist = end.split("-");
            end = new Date(Number(strlist[0]), Number(strlist[1]), Number(strlist[2]))
        }
        return end.getTime() - start.getTime();
    }
    if (!end) {
        end = new Date()
    }
    let val = Math.abs(dateMul(start, end));
    let ms = 1000;
    let times = [ms, ms *= 60, ms *= 60, ms *= 60, ms *= 24];
    let dhms = new Array(4);
    for (let i = 4; i >= 0; i--) {
        dhms[i] = ~~(val / times[i]);
        val %= times[i];
    }
    return {
        day: dhms[3],
        hour: dhms[2],
        min: dhms[1],
        second: dhms[0],
        ms: val
    };
}
main.controller('CourseCtrl', ["$scope", "$http", function($scope, $http) {
    var data = null;
    $scope.dataset = {
        timeLine: null,
        now: "休息",
        course: null,
        info: null,
        courseData: null,
        todayCourse: []
    }
    $http({
        url: "DB/ZuoXi.json",
        method: "GET"
    }).then(function(res) {
        data = res.data;
        $scope.dataset.timeLine = data;
        var date = new Date();
        var year = date.getFullYear();
        var mouth = date.getMonth();
        var day = date.getDate();
        for (let i = 0; i < $scope.dataset.timeLine.length; i++) {
            var time1 = $scope.dataset.timeLine[i].time[0].split(":")
            var time2 = $scope.dataset.timeLine[i].time[1].split(":")
            var start = new Date(year, mouth, day, Number(time1[0]), Number(time1[1]));
            var end = new Date(year, mouth, day, Number(time2[0]), Number(time2[1]));
            start = start.getTime();
            end = end.getTime();
            var now = new Date().getTime();
            if (start <= now && now <= end) {
                $scope.dataset.now = $scope.dataset.timeLine[i].item;
                break;
            }
        }
        if ($scope.dataset.now === "第一小节" || $scope.dataset.now === "第二小节") {
            $scope.dataset.course = "第一大节"
        } else if ($scope.dataset.now === "第三小节" || $scope.dataset.now === "第四小节") {
            $scope.dataset.course = "第二大节"
        } else if ($scope.dataset.now === "第五小节" || $scope.dataset.now === "第六小节") {
            $scope.dataset.course = "第三大节"
        } else if ($scope.dataset.now === "第七小节" || $scope.dataset.now === "第八小节") {
            $scope.dataset.course = "第四大节"
        }
        var course = document.getElementsByClassName("course2")[0];
        if (!$scope.dataset.course) {
            course.classList.add("empty")
        } else {
            course.classList.remove("empty")
        }
    }, function(res) {
        console.log(res.staus);
    });
    /*var diff = dateDiff("2020-9-1");*/
    var week = Number(moment().format('w'))-35;/*diff.day / 7;*/
    var time = new Date().getTime();
    $http({
        method: 'get',
        url: "DB/course.json?t=" + time
    }).then(function(res) {
        $scope.dataset.courseData = res.data;
        /*if (week % (~~week) != 0) {
            week = (~~week) + 1
        }*/
        var day = new Date().getDay();
        Object.keys($scope.dataset.courseData).map(key => {
            var step = $scope.dataset.courseData[key];
            for (let i of step) {
                if (i["until"][0] <= week && week <= i['until'][1] && i['weekDay'].includes(day)) {
                    var temp = {
                        "classRoom": i['classRoom'],
                        "courseName": i['courseName'],
                        "teacher": i['teacher'],
                        "numebr": key
                    }
                    $scope.dataset.todayCourse.push(temp);
                }
            }
        })
    }, function(res) {})
}]);