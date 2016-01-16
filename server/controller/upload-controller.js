UploadController = function() {};

var mv = require('mv');

UploadController.prototype.uploadFile = function(req, res) {
    // We are able to access req.files.file thanks to
    // the multiparty middleware
    var file = req.files.file;
    console.log(req.body.caption);
    mv(file.path, "/home/omer/nodejs/playscape-quiz/src/img/" + file.name, function(err) {
        // handle the error
        console.log(err);
    });
}

module.exports = new UploadController();