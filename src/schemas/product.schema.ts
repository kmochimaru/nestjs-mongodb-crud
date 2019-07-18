import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
    product_uuid: String,
    product_name: String,
    product_qty: Number,
    product_cost: Number,
    created: Date,
});
