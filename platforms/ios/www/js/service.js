angular.module('service', [])
    .factory('User', function () {
        return {
            save: function (user) {
                window.localStorage['User'] = angular.toJson(user);
            },
            get: function () {
                return angular.fromJson(window.localStorage['User']);
            }

        }
    })
    .factory('iOSBeacon', function () {
        return {
            rangeBeacon: function () {
                var onDidRangeBeacons = function (beacons) {
                    console.log(beacons.state);
                    return beacons;
                };


                var beacon = function() {
                    var identifier = 'Open Party'; // optional
                    var uuid = '74278BDA-B644-4520-8F0C-720EAF059935'; // mandatory

                    var beacon = new IBeacon.CLBeaconRegion(uuid, 4, 5, identifier);
                    return beacon;
                };
                IBeacon.startMonitoringForRegion(beacon, onDidRangeBeacons);
            }
        }
    });