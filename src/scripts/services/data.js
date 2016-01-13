'use strict';

angular.module('drag-and-drop')
.service('dataService', function($http) {

  this.getQuestions = function(callback){
    $http.get('/api/questions/all')
    .then(callback)
  };

});