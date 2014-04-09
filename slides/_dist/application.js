var calendar = angular.module('calendar', []);

calendar.controller('MyController', function($scope){
   $scope.today = new Date();

    $scope.hola = function() {
        console.log("Hola");
    }
});