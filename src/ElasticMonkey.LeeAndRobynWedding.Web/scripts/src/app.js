/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/angularjs/angular.d.ts" />
var app = angular.module("app", ["ngResource"]);

app.controller("reservationCtrl", function ($scope, $http) {
    $scope.submitRsvpCode = function () {
        var request = { "code": $scope.rsvpCode };
        $scope.isWorking = true;
        $scope.isCodeEntryVisible = false;
        $http.post("/api/rsvp/", request).success(function (invitation) {
            if (invitation.toString() != "null") {
                $scope.people = invitation.people;
                $scope.isWorking = false;
                $scope.isFormVisible = true;
            } else {
            }
        }).error(function () {
            $scope.isCodeEntryVisible = true;
        });
    };
    $scope.submitRsvp = function () {
        var invitation = { "people": $scope.people, "code": $scope.rsvpCode, "dietryRequirements": $scope.dietryRequirements };
        $scope.isWorking = true;
        $http.put("/api/rsvp/", invitation).success(function () {
            $scope.isSuccessRsvpVisible = true;
            $scope.isFormVisible = false;
            $scope.isWorking = false;
        });
    };
    $scope.changeRsvp = function () {
        $scope.isSuccessfulRSVPVisible = false;
        $scope.isFormVisible = false;
    };
    $scope.people = [];
    $scope.rsvpCode = "";
    $scope.dietryRequirements = "";
    $scope.isWorking = false;
    $scope.isCodeEntryVisible = true;
    $scope.isFormVisible = false;
    $scope.isSuccessRsvpVisible = false;
});
//# sourceMappingURL=app.js.map
