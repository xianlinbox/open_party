angular.module('controller', ['ionic', 'service'])
    .controller('MainCtrl', function ($scope, $state, $ionicPopup, User, iOSBeacon) {
        $scope.user = User.get();
        $scope.signOut = function () {
            window.localStorage.removeItem('User')
            var myPopup = $ionicPopup.alert({
                template: '用户注销成功'
            });
        }

        $scope.popCheckIn = function () {
            var myPopup = $ionicPopup.show({
                buttons: [
                    { text: '签到' }
                ]
            });
            myPopup.then(function ($http) {
                console.log('Tapped!', User.get());
            });
        }


        $scope.rangeBeacons = function () {
            alert(iOSBeacon.rangeBeacon());
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