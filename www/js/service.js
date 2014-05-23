angular.module('service', [])
    .factory('User', function ($http) {
        return {
            save: function (user) {
                window.localStorage['User'] = angular.toJson(user);
            },
            get: function () {
                return angular.fromJson(window.localStorage['User']);
            },
            signIn: function () {
                var user = this.get();
                var postData = {
                    "form": "RwMWo0",
                    "entry": {
                        "field1": user.name,
                        "field2": user.phone,
                        "field3": user.email,
                        "field4": user.employer,
                        "field5": user.experience
                    }
                }
                console.log("post data" + $http);

                $http({method: 'POST',
                    url: 'http://url.com/jinshuju/callback',
                    data: postData,
                    headers: {'Content-Type': 'application/json', 'X-Requested-By': 'jinshuju'}}).
                    success(function (data, status, headers, config) {
                        alert("Success")
                    }).
                    error(function (data, status, headers, config) {
                        alert("")
                    });
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


                var beacon = function () {
                    var identifier = 'Open Party'; // optional
                    var uuid = '74278BDA-B644-4520-8F0C-720EAF059935'; // mandatory

                    var beacon = new IBeacon.CLBeaconRegion(uuid, 4, 5, identifier);
                    return beacon;
                };
                IBeacon.startMonitoringForRegion(beacon, onDidRangeBeacons);

            }
        }
    });