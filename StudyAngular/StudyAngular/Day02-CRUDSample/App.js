var demoApp = angular.module('demoApp', ['ngRoute']);

//配置路由
demoApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: "ProductController",
            templateUrl: "partials/ProductList.html"
        })
        .when('/ProductEdit', {
            controller: "ProductController",
            templateUrl: "partials/ProductEdit.html"
        })
        .otherwise({
            redirectTo: '/'
        });
});

