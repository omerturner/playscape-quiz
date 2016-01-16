
angular.module('drag-and-drop')

.controller('adminQuestionCtrl', ['$scope', 'Upload', '$timeout', function ($scope, Upload, $timeout) {
    $scope.files = []
    $scope.log = '';

    $scope.post = function() {
        $scope.upload($scope.files)
    }

    $scope.upload = function (files) {
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
              var file = files[i];
              if (!file.$error) {
                Upload.upload({
                    url: '/upload',
                    data: {
                      caption: $scope.caption,
                      file: file
                    }
                }).then(function (resp) {
                    $timeout(function() {
                        $scope.log = 'file: ' +
                        resp.config.data.file.name +
                        ', Response: ' + JSON.stringify(resp.data) +
                        '\n' + $scope.log;
                    });
                }, null, function (evt) {
                    var progressPercentage = parseInt(100.0 *
                    		evt.loaded / evt.total);
                    $scope.log = 'progress: ' + progressPercentage +
                    	'% ' + evt.config.data.file.name + '\n' +
                      $scope.log;
                });
              }
            }
        }
    };
}]);