angular.module('controller', ['ionic', 'service'])
    .controller('MainCtrl', function ($scope, $state, $ionicPopup, User) {
        $scope.user = User.get();
        $scope.cleanUser = function () {
            window.localStorage.removeItem('User')
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

    })
    .controller('RegisterCtrl', function ($scope, $state, User) {
        var localUserInfo = User.get();
        console.log(localUserInfo)
        if (localUserInfo) {
            $state.go('main')
        } else {
            $state.go('personal_info')
        }

        $scope.save = function (user) {
            console.log(user)
            User.save(user)
            $state.go('main')
        }
    });