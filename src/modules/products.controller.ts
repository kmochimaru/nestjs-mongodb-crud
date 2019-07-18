import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductModel } from '../models/product.model';

@Controller('api/v1/products')
export class ProductsController {
    constructor(
        private readonly _service: ProductsService,
    ) { }

    @Post()
    async create(@Body() data: ProductModel) {
        return await this._service.create(data);
    }

    @Get()
    async findAll() {
        return await this._service.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: any) {
        return await this._service.findOne(id);
    }

    @Put(':id')
    async update(@Body() data: ProductModel, @Param('id') id: any) {
        return await this._service.update(id, data);
    }

    @Delete(':id')
    async delete(@Param('id') id: any) {
        return await this._service.delete(id);
    }
}
