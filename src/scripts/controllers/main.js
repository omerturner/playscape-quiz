'use strict';

angular.module('drag-and-drop')
.controller('mainCtrl', function($scope, dataService) {
  $scope.questionsList = []

  dataService.getQuestions(function(response) {
    angular.forEach(response.data, function(val, key) {
      $scope.questionsList.push(val.questions);
    });
  });
});