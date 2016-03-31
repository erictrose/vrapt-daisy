app.controller("Page3Ctrl", ["currentAuth", "$scope", function(currentAuth, $scope) {
  // currentAuth (provided by resolve) will contain the
  // authenticated user or null if not logged in
    $scope.test = 'WORKING page 3';
}]);

console.log('page 3 controller loaded');