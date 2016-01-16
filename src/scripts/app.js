angular.module("drag-and-drop", ["ngDragDrop", "ui.router", "ngFileUpload"])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
  $stateProvider
  .state("admin", {
    url: "/admin",
    templateUrl: "admin.html",
    controller: "adminCtrl"
  })
  .state("quiz", {
    url: "/quiz",
    templateUrl: "quiz.html",
    controller: "mainCtrl"
  });
});