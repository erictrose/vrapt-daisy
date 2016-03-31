app.controller("Page2Ctrl", ["currentAuth", "$scope", function(currentAuth, $scope) {
  // currentAuth (provided by resolve) will contain the
  // authenticated user or null if not logged in
    $scope.test = 'WORKING page 2';
}]);