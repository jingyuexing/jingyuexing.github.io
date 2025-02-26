main.controller("torCtrl",["$scope","$http",function($scope,$http){
    const time = new Date().getTime();
    $http({
        method:"get",
        url:"DB/onion.list?t="+time
    }).then((res)=>{
        /**
         * @type {object[]}
         */
        $scope.list = angular.fromJson(res.data);
        /**
         * @type {any[]}
         */
        $scope.backup = $scope.list;
    },()=>{});
    $scope.tagClick = function(){
        $scope.tagcache = this.tag;
        let temp = [];
        $scope.backup.forEach((value)=>{
            if(value.tag.includes($scope.tagcache)){
                temp.push(value);
            }
        })
        $scope.list = temp;
    }
    $scope.reset = function($event){
        // $event.stopImmediatePropagation()
        if($scope.list.length != $scope.backup.length){
            $scope.list = $scope.backup
        }
    }
    $scope.$watch('tagcache', function(newValue, oldValue, $scope) {
        if(newValue != oldValue){
            $scope.status = "changed"
        }
    });
}])