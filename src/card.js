/*
 * @Author: Jingyuexing
 * @Date:   2019-01-01 08:49:47
 * @Last Modified by:   Jingyuexing
 * @Last Modified time: 2019-06-28 17:00:54
 */
main.directive('card', ['$scope', function($scope) {
    // Runs during compile
    return {
        // name: '',
        // priority: 1,
        // terminal: true,
        scope: {}, // {} = isolate, true = child, false/undefined = no change
        // controller: function($scope, $element, $attrs, $transclude) {},
        // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
        restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
        // template: '',
        templateUrl: '../tpls/card.html',
        // replace: true,
        transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
        link: function($scope, iElm, iAttrs, controller) {
            $scope.card = {
                titleText: "标题",
                supportText: "一些说明性文字",
                btnText: "更多",
            }
        }
    };
}]);