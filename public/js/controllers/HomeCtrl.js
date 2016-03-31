app.controller("HomeCtrl", ["currentAuth", "$scope", "$rootScope", "$routeParams", "$location", "$firebaseArray", "$firebaseObject",  function(currentAuth, $scope, $rootScope, $routeParams, $location, $firebaseArray, $firebaseObject) {
    
//    //connect to firebase directories
//    var myFloorRef = new Firebase("https://vrapt.firebaseio.com/floors/" + currentAuth.uid);
    
    //connect to firebase directories
    var fbRef = new Firebase("https://vrapt.firebaseio.com/rotate");
    var fbObj = new $firebaseObject(fbRef);
    
    fbObj.$loaded().then(function(){
        console.log(fbObj.$value);
        
        $scope.test = fbObj.$value;
        
        //ROTATE RIGHT
        $scope.rotateThingRight = function(){
            fbObj.$value += 1;
            fbObj.$save();
            console.log('rotating right');
            console.log(fbObj.$value);
            $scope.test = fbObj.$value;
        };

        //ROTATE LEFT
        $scope.rotateThingLeft = function(){
            fbObj.$value -= 1;
            fbObj.$save();
            console.log('rotating left');
            console.log(fbObj.$value);
            $scope.test = fbObj.$value;
        };
        
    });
    

//    //link to variables
//    var myFloor = $firebaseArray(myFloorRef);
    
    //link to variables

    
    
//    //link to scope
//    $scope.myFloor = myFloor;
    
    
    
    
    
    //go back, needs to be a factory or service or something
    $scope.goTo = function(place){
        $location.path(place);
    };

}]);

console.log('home controller loaded');
