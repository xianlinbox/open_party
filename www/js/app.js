angular.module('open_party', ['ionic', 'controller'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('personal_info', {
                url: "/personal_info",
                templateUrl: "personal_info.html",
                controller: 'RegisterCtrl'
            })
            .state('main', {
                url: "/",
                templateUrl: "main.html",
                controller: 'MainCtrl'
            })
        $urlRouterProvider.otherwise('/personal_info')
    });