var express         = require('express'),
    routes          = express.Router();
var passport	    = require('passport');
var User = require('./models/user');
 
routes.get('/', (req, res) => {
    return res.send('Hello, this is the API!');
});

// GET
// Get all open list
routes.get('/list', function (req, res) {
    User.find({}).then((list) => {
     res.send(list);
  }).catch((error) => {
    res.status(500).send(error);
  })
  
})  


module.exports = routes;