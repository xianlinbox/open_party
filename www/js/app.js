angular.module('open_party', ['ionic'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('personal_info', {
                url: "/personal_info",
                templateUrl: "personal_info.html",
                controller: 'MainCtrl'
            })
            .state('main', {
                url: "/",
                templateUrl: "main.html",
                controller: 'MainCtrl'
            })
        $urlRouterProvider.rule(function ($location) {
            if (window.localStorage['User']) {
            }
        })
//        $urlRouterProvider.otherwise("/personal_info");

    })
    .factory('User', function () {
        return {
            save: function (user) {
                window.localStorage['User'] = angular.toJson(user);
            },
            get: function () {
                return window.localStorage['User'];
            }

        }
    })
    .controller('MainCtrl', function ($scope, $state, $ionicPopup, User) {
        $scope.save = function (user) {
            console.log(user)
            User.save(user)
            $scope.user = angular.toJson(user)
            $state.go('main')
        }

        $scope.popCheckIn = function () {
            var myPopup = $ionicPopup.show({
                buttons: [
                    { text: '签到' }
                ]
            });
            myPopup.then(function () {
                console.log('Tapped!', User.get());
            });

        }

    });