angular.module('drag-and-drop')
.directive('adminQuestion', function() {
  return {
    templateUrl: 'templates/adminQuestion.html',
    controller: 'adminQuestionCtrl',
    replace: true
  }
})