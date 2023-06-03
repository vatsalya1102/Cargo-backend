import mongoose from 'mongoose';
import TransportOrder from '../models/transportOrder.js';

export const getOrdersForManu = async (req, res) => {
    try {
        const { manufacturer: manufacturer } = req.params;
        const orders = await TransportOrder.find({ manufacturer: manufacturer });
        res.status(200).json(orders);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}