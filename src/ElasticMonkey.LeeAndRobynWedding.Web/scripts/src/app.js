/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/angularjs/angular.d.ts" />
var app = angular.module("app", ["ngResource"]);

app.controller("reservationCtrl", function ($scope, $http) {
    $scope.submitRsvpCode = function () {
        var request = { "code": $scope.rsvpCode };
        $scope.isWorking = true;
        $http.post("/api/rsvp/", request).success(function (invitation) {
            $scope.people = invitation.people;
            $scope.isWorking = false;
            $scope.isFormLoaded = true;
        }).error(function () {
            // this callback will be called asynchronously
            // when the response is available
        });
    };
    $scope.people = [];
    $scope.isWorking = false;
    $scope.isFormLoaded = false;
});
//# sourceMappingURL=app.js.map
