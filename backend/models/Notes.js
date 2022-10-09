const mongoose = require('mongoose')

const NotesSchema = new Schema({
    name :{
        type : String,
        require : true
    },
    description :{
        type : String,
        require : true
    },
    tag :{
        type : String,
        default : "general"
    },
    date :{
        type : date,
        require : Date.now
    }
  });

  module.exports = mongoose.model('user' , UserSchema);