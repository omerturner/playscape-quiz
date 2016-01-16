angular.module("drag-and-drop", ["ngDragDrop", "ui.router"])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
  $stateProvider
  .state("admin", {
    url: "/admin",
    templateUrl: "admin.html",
  })
  .state("quiz", {
    url: "/quiz",
    templateUrl: "quiz.html",
    controller: "mainCtrl"
  });
});