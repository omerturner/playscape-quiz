angular.module('drag-and-drop', ['ngDragDrop', 'ngAnimate', 'ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
  $stateProvider
  .state('quiz', {
    url: "/quiz",
    templateUrl: "quiz.html"
  });
});