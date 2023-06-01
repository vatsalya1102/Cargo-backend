import mongoose from 'mongoose';
import TransportOrder from '../models/transportOrder.js';

export const createOrder = async (req, res) => {
    const order = req.body;
    const newOrder = new TransportOrder({ ...order.form, manufacturer: req.manufacturerName, price: "" });
    try {
        await newOrder.save();
        console.log(newOrder);
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const getOrders = async (req, res) => {
    try {
        const { transporter: transporter } = req.params;
        const orders = await TransportOrder.find({ transporter: transporter });
        console.log(orders);
        res.status(200).json(orders);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const updateOrder = async (req, res) => {
    const { id: _id } = req.params;
    const order = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');
    const updatedOrder = await TransportOrder.findByIdAndUpdate(_id, { ...order, _id }, { new: true });
    res.json(updatedOrder);
}