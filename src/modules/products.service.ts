import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ProductModel } from '../models/product.model';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
    constructor(
        @InjectModel('Product') private readonly _model: Model<ProductModel>,
    ) { }

    async create(model: ProductModel) {
        return await new this._model(model).save();
    }

    async findAll(): Promise<ProductModel[]> {
        return await this._model.find().exec();
    }

    async findOne(id: any): Promise<ProductModel> {
        return await this._model.findById(id).exec();
    }

    async update(id: any, data: ProductModel): Promise<ProductModel> {
        return await this._model.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id: any) {
        return await this._model.findByIdAndRemove(id);
    }
}
