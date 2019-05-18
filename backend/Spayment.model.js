const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Spayment = new Schema({


    card_holder_name:{
        type:String
    },

    card_number:{
        type:String
    },

    cvv:{
        type:String
    },

    cash_in_point:{
        type:String
    },

    Spayment_completed:{
        type: Boolean
    }

});

module.exports = mongoose.model('Spayment', Spayment);