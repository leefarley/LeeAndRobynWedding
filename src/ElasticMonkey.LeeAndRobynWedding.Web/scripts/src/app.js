/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/angularjs/angular.d.ts" />
var app = angular.module("app", ["ngResource"]);

app.controller("reservationCtrl", function ($scope, $http) {
    $scope.submitRsvpCode = function () {
        var data = { "code": $scope.rsvpCode };
        $scope.working = true;
        $http.post("/api/rsvp/", data).success(function (data) {
            $scope.people = data.people;
        }).error(function () {
            // this callback will be called asynchronously
            // when the response is available
        });
    };

    $scope.people = [];
    $scope.working = false;
});
//# sourceMappingURL=app.js.map
