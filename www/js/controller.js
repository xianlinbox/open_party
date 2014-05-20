function createBeacon() {
    var identifier = 'Open Party';
    var major = 4;
    var minor = 5;
    var uuid = '74278BDA-B644-4520-8F0C-720EAF059935'; // mandatory

    // throws an error if the parameters are not valid
    var beacon = new IBeacon.CLBeaconRegion(uuid, major, minor, identifier);
    return beacon;
}

angular.module('controller', ['ionic', 'service'])
    .controller('MainCtrl', function ($scope, $state, $ionicPopup, User) {
        $scope.user = User.get();
        $scope.signOut = function () {
            window.localStorage.removeItem('User')
            var myPopup = $ionicPopup.alert({
                template: '用户注销成功'
            });
        }

        var onDidDetermineStateCallback = function (result) {
            console.log(result.state);
        };

        var beacon = createBeacon();
        IBeacon.startMonitoringForRegion(beacon, onDidDetermineStateCallback);

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