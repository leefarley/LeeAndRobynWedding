/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/angularjs/angular.d.ts" />

var app : ng.IModule = angular.module("app", ["ngResource"]);


app.controller("reservationCtrl", ($scope, $http)=> {
    $scope.submitRsvpCode = ()=> {
        var request = { "code": $scope.rsvpCode };
        $scope.isWorking = true;
        $scope.isCodeEntryVisible = false;
        $http.post("/api/rsvp/", request)
            .success((invitation: IInvitation) => {
                if (invitation.toString() != "null") {
                    $scope.people = invitation.people;
                    $scope.isWorking = false;
                    $scope.isFormVisible = true;
                } else {
                    
                }
            })
            .error(() => {
                $scope.isCodeEntryVisible = true;
            });
    };
    $scope.submitRsvp = ()=> {
        var invitation = { "people": $scope.people, "code": $scope.rsvpCode, "dietryRequirements": $scope.dietryRequirements };
        $scope.isWorking = true;
        $http.put("/api/rsvp/", invitation)
            .success(() => {
                $scope.isSuccessRsvpVisible = true;
                $scope.isFormVisible = false;
                $scope.isWorking = false;
            });
    };
    $scope.changeRsvp = ()=> {
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

interface IInvitation {
    people: IPerson[]
    dietryRequirements : string;
}

interface IPerson {
    name : string;
    isAttending: boolean;
    additionalGuest: boolean;
}