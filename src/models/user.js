var mongoose = require('mongoose');
  
var UserSchema = new mongoose.Schema({
  name: {
    type :String
    },
  date: {
    }
});


module.exports = mongoose.model('User', UserSchema);

