import mongoose from 'mongoose';
const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    role: {type: String, possibleValues: ['Transporter','Manufacturer']},
    id: { type: String }
})

export default mongoose.model("cargoUser", userSchema);