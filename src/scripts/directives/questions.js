angular.module('drag-and-drop')
.directive('questions', function() {
  return {
    templateUrl: 'templates/questions.html',
    controller: 'mainCtrl',
    replace: true
  }
})