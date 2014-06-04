/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/angularjs/angular.d.ts" />

var app : ng.IModule = angular.module("app", ["ngResource"]);


app.controller("reservationCtrl", ($scope, $http) => {
    $scope.submitRsvpCode = () => {
        var data = { "code": $scope.rsvpCode };
        $scope.working = true;
        $http.post("/api/rsvp/", data)
            .success((data)=> {
                $scope.people = data.people;
            })
            .error(()=> {
                // this callback will be called asynchronously
                // when the response is available
            });
    };

    $scope.people = [];
    $scope.working = false;
});