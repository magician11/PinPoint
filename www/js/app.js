// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('pinpoint', ['ionic'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if(window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

.controller('BoardCtrl', function($scope) {

    function init(height, width) {
        var board = [];
        for (var h = 0 ; h < height ; h++) {
            var row = [];
            for (var w = 0 ; w < width ; w++) {
                row.push(false);
            }
            board.push(row); 
        }
        return board;
    }

    $scope.newGame = function () {
        $scope.board = init($scope.height, $scope.width);
    };

    $scope.height = 10;
    $scope.width = 10;
    $scope.newGame();

});
