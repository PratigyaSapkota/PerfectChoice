var mongoose = require('mongoose');
var Schema =mongoose.Schema;

let Category= new Schema({

    name: {
        type: String,
        require: true
    },

    product: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }]
},
{
    timestamps: true
});