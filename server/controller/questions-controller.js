var Question = require('../model/questions');

module.exports.all = function (req, res) {
  Question.find({}, function (err, results) {
    res.json(results);
  });
}

module.exports.create = function (req, res) {
  var question = new Question(req.body);

  // Convert the Model instance to a simple object using Model's 'toObject' function
  // to prevent weirdness like infinite looping...
  var upsertData = question.toObject();

  // Delete the _id property, otherwise Mongo will return a "Mod on _id not allowed" error
  delete upsertData._id;

  // Do the upsert, which works like this: If no Question document exists with
  // _id = question.id, then create a new doc using upsertData.
  // Otherwise, update the existing doc with upsertData
  Question.update({_id: question.id}, upsertData, {upsert: true}, function(err, doc){
     if (err) {
       return res.json({ error: err });
     }
     return res.json(doc);
  });
}

module.exports.delete = function (req, res) {
  Question.findById(req.body._id, function (err, doc) {
    if (err) {
       return res.json({ error: err });
     }
     return res.json(doc);
  }).remove().exec();
}