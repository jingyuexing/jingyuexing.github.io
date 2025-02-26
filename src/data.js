/*
 * @Author: Jingyuexing
 * @Date:   2020-08-19 06:43:30
 * @Last Modified by:   Jingyuexing
 * @Last Modified time: 2020-08-19 21:01:47
 */
main.controller('DataCtrl', ['$scope', "$http", function($scope, $http) {
    var select = document.getElementById("select");
    var show = document.getElementById("show");
    var canvas = document.createElement("canvas");
    var canvas1 = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    var ctx1 = canvas1.getContext("2d");
    var colors = ["#ffb2a8", "#e6729f", "#ff1e56", "#ffad41", "#ffed41", "#e94c19", "#c01831", "#1a6fb0", "#0e9181", "#93d412", "#b6472b", "#ffd5ab", "#a6b0e1", "#711b64", "#d2ae22"]
    show.appendChild(canvas);
    show.appendChild(canvas1);
    var dataset = {
        labels: [],
        colors: colors,
        datasets: [{
            backgroundColor: "#177eec",
            label: "总计",
            data: []
        }, {
            backgroundColor: "#e6729f",
            label: "男",
            data: []
        }, {
            backgroundColor: "#17ca3c",
            label: "女",
            data: []
        }]
    }
    var options = {
        type: 'bar',
        data: dataset,
        options: {
            responsive: true,
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: ''
            }
        }
    }
    var config = {
        type: "pie",
        data: {
            datasets: [{
                data: [],
                backgroundColor: colors
            }],
            labels: []
        },
        options: {
            legend: {
                position: "top"
            },
            title: {
                display: true,
                text:''
            }
        }
    }
    var pie = new Chart(ctx1, config);
    var bar = new Chart(ctx, options);
    $http({
        method: 'get',
        url: "DB/plist.json"
    }).then(function(res) {
        $scope.dataset = {
            list: [],
            labels: [],
        }
        Object.keys(res.data).forEach(value => {
            Object.keys(res.data[value]).forEach(ele => {
                $scope.dataset.list.push(res.data[value][ele]);
            })
        });
        $scope.dataset.list.forEach(ele => {
            var option = document.createElement("option");
            option.textContent = ele;
            select.appendChild(option);
        })
    }, function(res) {
        console.log(res.data);
    });

    function clear() {
        for (let i = 0; i < dataset.datasets.length; i++) {
            dataset.datasets[i].data = [];
        }
        bar.update();
    }
    select.addEventListener("change", function(e) {
        $http({
            method: "get",
            url: "DB/" + e.target.value
        }).then(function(res) {
            clear();
            $scope.dataset.labels = [];
            $scope.dataset.title = res.data[0];
            $scope.dataset.data = res.data[1];
            var key = Object.keys($scope.dataset.data)[0];
            Object.keys($scope.dataset.data[key]).forEach(ele => {
                $scope.dataset.labels.push(ele);
            });
            $scope.dataset.labels = $scope.dataset.labels.slice(1);
            var key1 = Object.keys($scope.dataset.data)[0];
            var data = $scope.dataset.data[key1];
            for (let i = 0; i < bar.data.datasets.length; i++) {
                Object.keys(data).slice(1).forEach(ele => {
                    bar.data.datasets[i].data.push(data[ele][i]);
                })
            }
            options.options.title.text = $scope.dataset.title;
            dataset.labels = $scope.dataset.labels;
            /////////////// 饼状图
            config.data.datasets[0].data = [];
            config.options.title.text = $scope.dataset.title+"(男/女)";
            config.data.labels = ["男","女"];
            var keySin = Object.keys(data).slice(0,1);
            for(let i =0 ;i<2;i++){
                config.data.datasets[0].data.push(data[keySin][i]);
            }

            bar.update();
            pie.update();
            console.log(bar);
        }, function(res) {
            console.log(res);
        });
    });
}])