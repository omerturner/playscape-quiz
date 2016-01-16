var express              = require("express"),
      app                    = express(),
      bodyParser        = require('body-parser'),
      mongoose         = require('mongoose'),
      questionsController = require('./server/controller/questions-controller');

mongoose.connect('mongodb://localhost:27017/playscapeQuiz');

app.use(express.static(__dirname + "/src"));
app.use(bodyParser.json());

// REST API
app.get('/api/questions/all', questionsController.all);

app.listen(3000);
console.log("Server running on port 3000");