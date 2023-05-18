const mongoose = require("mongoose")

const bookingSchema = mongoose.Schema({
    room: {
        type: String,required: true
    },
    roomid : {
        type: String,required: true
    },
    userid: {
        type: String,required: true
    },
    fromdate: {
        type: String,required: true
    },
    todate:{
        type: String,required: true
    },
    totaldays: {
        type: Number,required: true
    },
    transactionId : {
        type: String,requied : true
    
    },
    status : {
        type: String,required: true , default: 'booked'
    }
},
    {
        timestamps: true,
    }
)
const bookingmodel = mongoose.model('booking' , bookingSchema);
module.exports = bookingmodel