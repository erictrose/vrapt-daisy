app.controller("NavCtrl", ["$scope","$location", function($scope,$location) {
    $scope.goTo = function(dest){
        $location.path(dest);
    };
}]);

console.log('nav controller loaded');