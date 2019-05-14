
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({

    user_name:{
        type:String
    },

    email:{
        type:String
    },

    password:{
        type:String
    },

    confirm_password:{
        type:String
    },

    address:{
        type:String
    },

    SignUp_completed:{
        type: Boolean
    }

});

module.exports = mongoose.model('User', User);