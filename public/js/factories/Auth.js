app.factory("Auth", function($firebaseAuth){
    var ref = new Firebase("https://vrapt.firebaseio.com");
    return $firebaseAuth(ref);
});