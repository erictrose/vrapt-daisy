app.config(["$routeProvider", function($routeProvider) {
$routeProvider
    //home
    .when("/home",{
        controller: "HomeCtrl",
        templateUrl: "views/home.html",
        resolve:{
            "currentAuth": ["Auth", function(Auth){
                //return Auth.$waitForAuth();
                return Auth.$requireAuth();
            }]
        }
    })
    //page2
    .when("/page2",{
        controller: "Page2Ctrl",
        templateUrl: "views/page2.html",
        resolve: {
            "currentAuth": ["Auth", function(Auth){
                //return Auth.$waitForAuth();
                return Auth.$requireAuth();
            }]
        }
    })
    //page3
    .when("/page3",{
        controller: "Page3Ctrl",
        templateUrl: "views/page3.html",
        resolve: {
            "currentAuth": ["Auth", function(Auth){
                //return Auth.$waitForAuth();
                return Auth.$requireAuth();
            }]
        }
    })
    //otherwise
    .otherwise({redirectTo: '/login'});
}]);