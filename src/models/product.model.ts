import { Document } from 'mongoose';

export interface ProductModel extends Document {
    _id?: string;
    product_uuid: string;
    product_name: string;
    product_qty: number;
    product_cost: number;
    created: Date;
}
