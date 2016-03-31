app.controller("HomeCtrl", ["currentAuth", "$scope", "$rootScope", "$routeParams", "$location", "$firebaseArray", "$firebaseObject",  function(currentAuth, $scope, $rootScope, $routeParams, $location, $firebaseArray, $firebaseObject) {
    
    //connect to firebase directories
    var myFloorRef = new Firebase("https://vrapt.firebaseio.com/floors/" + currentAuth.uid);

    //link to variables
    var myFloor = $firebaseArray(myFloorRef);
    
    //link to scope
    $scope.myFloor = myFloor;
    
    //set scope variables
    $scope.test = 'WORKING';
    $scope.openAModalOrSomething = true;
    
    //go back, needs to be a factory or service or something
    $scope.goTo = function(place){
        $location.path(place);
    };
    
//    //scope functions
//    $scope.doAThing = function(){
//        //do something
//    };

}]);

console.log('home controller loaded');