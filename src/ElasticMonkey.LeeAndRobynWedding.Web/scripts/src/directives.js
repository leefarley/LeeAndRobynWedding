app.directive("timer", function ($compile) {
    return {
        restrict: 'E',
        replace: false,
        scope: {
            targetDateString: "@"
        },
        template: "{{days}} Days &#3664; {{hhours}} Hours &#3664; {{mminutes}} Minutes &#3664; {{sseconds}} Seconds",
        controller: function ($scope, $element) {
            $element.append($compile($element.contents())($scope));
            $scope.sseconds = 0;
            $scope.mminutes = 0;
            $scope.hhours = 0;
            $scope.days = 0;

            //determine initial values of time units and add AddSeconds functionality
            $scope.targetDate = Date.parse($scope.targetDateString);
            var currentDate = new Date();
            $scope.millis = $scope.targetDate - currentDate;

            function calculateTimeUnits() {
                $scope.seconds = Math.abs(Math.floor(($scope.millis / 1000) % 60));
                $scope.minutes = Math.abs(Math.floor((($scope.millis / (60000)) % 60)));
                $scope.hours = Math.abs(Math.floor((($scope.millis / (3600000)) % 24)));
                $scope.days = Math.abs(Math.floor((($scope.millis / (3600000)) / 24)));

                //add leading zero if number is smaller than 10
                $scope.sseconds = $scope.seconds < 10 ? '0' + $scope.seconds : $scope.seconds;
                $scope.mminutes = $scope.minutes < 10 ? '0' + $scope.minutes : $scope.minutes;
                $scope.hhours = $scope.hours < 10 ? '0' + $scope.hours : $scope.hours;
            }
            ;

            calculateTimeUnits();

            function tick() {
                var currentDate = new Date();
                $scope.millis = $scope.targetDate - currentDate;

                calculateTimeUnits();

                setTimeout(function () {
                    tick();
                    $scope.$digest();
                }, 1000);
            }

            tick();
        }
    };
});
app.directive("marriedHeader", function () {
    return {
        restrict: "A",
        replace: false,
        template: "{{text}}",
        link: function ($scope) {
            var theDate = new Date("Feburary 7, 2015 15:00:00");
            var currentTime = new Date();
            if (theDate < currentTime) {
                $scope.text = "Married for";
            } else {
                $scope.text = "We'll be married in";
            }
        }
    };
});
//# sourceMappingURL=directives.js.map
