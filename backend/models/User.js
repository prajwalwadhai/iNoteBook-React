const mongoose = require('mongoose')

const UserSchema = new Schema({
    name :{
        type : String,
        require : true
    },
    email :{
        type : String,
        require : true,
        unique : true
    },
    passward :{
        type : String,
        require : true
    },
    date :{
        type : date,
        require : Date.now
    }
  });

  module.exports = mongoose.model('user' , UserSchema);