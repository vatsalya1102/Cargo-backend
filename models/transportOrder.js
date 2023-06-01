import mongoose from 'mongoose';
const transportOrderSchema = mongoose.Schema({
    orderId: { type: String },
    toCity: { type: String, required: true },
    fromCity: { type: String, required: true },
    address: { type: String },
    quantity: { type: Number, required: true },
    manufacturer: { type: String },
    transporter: { type: String },
    price: { type: Number }
}) 

export default mongoose.model("TransportOrder", transportOrderSchema);