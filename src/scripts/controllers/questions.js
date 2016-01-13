'use strict';

angular.module('drag-and-drop')
.controller('qusetionsCtrl', function($scope, dataService) {

  $scope.result = false;
  $scope.titles = [];
  $scope.answers = [];
  $scope.questions = [];

  $scope.init = function(question)
  {
    $scope.results = question;
    angular.forEach(question, function(val, key) {
      $scope.titles.push({"title": val["title"]});
      $scope.answers.push({});
      $scope.questions.push({"thumb": val["thumb"], "idx": key});
    });
  };

  $scope.submit = function() {
    var i = 0;
    var score = 0;
    angular.forEach($scope.answers, function(val, key) {
      if (val.thumb) {
        if ($scope.results[i].thumb == val.thumb) {
          score += 25;
        }
      }
      i++;
    });
    $scope.score = score;
    $scope.result = true;
  };

  $scope.startCallback = function(event, ui, title) {
    // console.log('You started draggin: ' + title.title);
    $scope.draggedTitle = title.title;
  };

  $scope.stopCallback = function(event, ui) {
    // console.log('Why did you stop draggin me?');
  };

  $scope.dragCallback = function(event, ui) {
    // console.log('hey, look I`m flying');
  };

  $scope.dropCallback = function(event, ui) {
    // console.log('hey, you dumped me :-(' , $scope.draggedTitle);
  };

  $scope.overCallback = function(event, ui) {
    // console.log('Look, I`m over you');
  };

  $scope.outCallback = function(event, ui) {
    // console.log('I`m not, hehe');
  };
});