angular.module('service',[])
    .factory('User', function () {
        return {
            save: function (user) {
                window.localStorage['User'] = angular.toJson(user);
            },
            get: function () {
                return angular.fromJson(window.localStorage['User']);
            }

        }
    });