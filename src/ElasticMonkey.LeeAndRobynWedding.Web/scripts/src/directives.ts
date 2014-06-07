app.directive("ng-countdown", function() {

    return {
        restrict: 'E',
        replace: false,
        scope: {
            targetDateString: ""
        },
        transclude: true,
        controller: ['$scope', '$element', '$attrs', '$timeout', function($scope, $element, $attrs, $timeout) {
                // Checking for trim function since IE8 doesn't have it
                // If not a function, create tirm with RegEx to mimic native trim
                if (typeof String.prototype.trim !== 'function') {
                    String.prototype.trim = function() {
                        return this.replace(/^\s+|\s+$/g, '');
                    };
                }

                //determine initial values of time units and add AddSeconds functionality
                $scope.targetDate = new Date($scope.targetDateString);

                function calculateTimeUnits() {
                    $scope.seconds = Math.floor(($scope.millis / 1000) % 60);
                    $scope.minutes = Math.floor((($scope.millis / (60000)) % 60));
                    $scope.hours = Math.floor((($scope.millis / (3600000)) % 24));
                    $scope.days = Math.floor((($scope.millis / (3600000)) / 24));

                    //add leading zero if number is smaller than 10
                    $scope.sseconds = $scope.seconds < 10 ? '0' + $scope.seconds : $scope.seconds;
                    $scope.mminutes = $scope.minutes < 10 ? '0' + $scope.minutes : $scope.minutes;
                    $scope.hhours = $scope.hours < 10 ? '0' + $scope.hours : $scope.hours;
                };

            function tick() {
                    var currentDate : any = new Date();
                    $scope.millis = $scope.targetDate - currentDate;

                    calculateTimeUnits();

                    $scope.timeoutId = setTimeout(function () {
                        tick();
                        $scope.$digest();
                    }, 1000);
                }

                function resetTimeout() {
                    if ($scope.timeoutId) {
                        clearTimeout($scope.timeoutId);
                    }
                }

                resetTimeout();
                tick();
            }
        ]
    };
});