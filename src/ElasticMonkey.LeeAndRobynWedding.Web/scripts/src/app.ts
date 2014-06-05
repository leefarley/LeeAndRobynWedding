/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/angularjs/angular.d.ts" />

var app : ng.IModule = angular.module("app", ["ngResource"]);


app.controller("reservationCtrl", ($scope, $http) => {
    $scope.submitRsvpCode = () => {
        var request = { "code": $scope.rsvpCode };
        $scope.isWorking = true;
        $http.post("/api/rsvp/", request)
            .success((invitation : IInvitation)=> {
                $scope.people = invitation.people;
                $scope.isWorking = false;
                $scope.isFormLoaded = true;
            })
            .error(()=> {
                // this callback will be called asynchronously
                // when the response is available
            });
    };
    $scope.people = [];
    $scope.isWorking = false;
    $scope.isFormLoaded = false;
});

interface IInvitation {
    people : IPerson[]
}

interface IPerson {
    firstName : string;
    lastName : string;
    isAttending : boolean;
}