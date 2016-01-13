'use strict';

angular.module('drag-and-drop')
.controller('mainCtrl', function($scope, dataService) {
  dataService.getQuestions(function(response) {
    $scope.questionsList = response.data;
  });
});