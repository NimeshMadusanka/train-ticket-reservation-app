const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Train = new Schema({

    train_name:{
        type:String
    },

    departure_time:{
        type:String
    },

    distance:{
        type:String
    },

    price:{
        type:String
    },

    arrival_time:{
        type:String
    },

    T_details_completed:{
        type: Boolean
    }

});

module.exports = mongoose.model('Train', Train);