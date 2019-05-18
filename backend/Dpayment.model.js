const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Dpayment = new Schema({

    phone_number:{
        type:String
    },

    pin_number:{
        type:String
    },

    cash_in_point:{
        type:String
    },

    Dpayment_completed:{
        type: Boolean
    }

});

module.exports = mongoose.model('Dpayment', Dpayment);