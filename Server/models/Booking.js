const { model,Schema} =require('mongoose');

const bookingdetails = new Schema({
    roomno: { type: String, required: true,unique: true },
    indate: { type: String, required: true },
    outdate: { type: String, required: true },
    pname: { type: String, required: true },
  
});

const hotel = model('room-book', bookingdetails);

module.exports = hotel;
