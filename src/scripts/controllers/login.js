'use strict';

angular.module('drag-and-drop')

.controller('loginCtrl', function($scope, $state) {
  $scope.submit = function() {
    if ($scope.username == "admin" && $scope.password == "admin") {
      $state.go("quiz");
    }
  }
});