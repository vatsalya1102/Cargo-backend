import mongoose from 'mongoose';
import TransportOrder from '../models/transportOrder.js';

export const createOrder = async (req, res) => {
    const order = req.body;
    console.log(req.manufacturerName);
    const newOrder = new TransportOrder({ ...order.form, manufacturer: req.manufacturerName });
    try {
        console.log(newOrder);
        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const getOrders = async (req, res) => {
    try {
        const { transporter: transporter } = req.params;
        const orders = await TransportOrder.find({ transporter });
        res.status(200).json(orders);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}