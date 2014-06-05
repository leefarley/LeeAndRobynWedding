/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/angularjs/angular.d.ts" />

var app : ng.IModule = angular.module("app", ["ngResource"]);


app.controller("homeCtrl", ($scope, $http) => {
    $scope.submitRsvpCode = ()=> {
        var request = { "code": $scope.rsvpCode };
        $scope.isWorking = true;
        $http.post("/api/rsvp/", request)
            .success((invitation: IInvitation)=> {
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
    $scope.areMarried = ()=> {
        var theDate = new Date("Feburary 7, 2015 15:00:00");
        var currentTime = new Date();
        if (theDate < currentTime) {
            return true;
        }
        return false;
    };
});

interface IInvitation {
    people : IPerson[]
}

interface IPerson {
    firstName : string;
    lastName : string;
    isAttending : boolean;
}