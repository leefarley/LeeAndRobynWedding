/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/angularjs/angular.d.ts" />
var app = angular.module("app", ["ngResource"]);

app.controller("homeCtrl", function ($scope, $http) {
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
    $scope.areMarried = function () {
        var theDate = new Date("Feburary 7, 2015 15:00:00");
        var currentTime = new Date();
        if (theDate < currentTime) {
            return true;
        }
        return false;
    };
});
//# sourceMappingURL=app.js.map
