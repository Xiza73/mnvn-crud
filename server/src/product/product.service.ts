import { Injectable } from '@nestjs/common';
import { Model, ObjectId } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Product } from './interfaces/product.interface';
import { CreateProductDTO } from './dto/product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async getProducts(): Promise<Product[]> {
    const products = await this.productModel.find();
    return products;
  }

  async getProduct(productID: string): Promise<Product> {
    try {
      return await this.productModel.findById(productID);
    } catch (_) {
      return;
    }
  }

  async createProduct(createProductDTO: CreateProductDTO): Promise<Product> {
    const newProduct = new this.productModel(createProductDTO);
    return await newProduct.save();
  }

  async updateProduct(
    productID: string,
    updateProductDTO: CreateProductDTO,
  ): Promise<Product> {
    return await this.productModel.findByIdAndUpdate(
      productID,
      updateProductDTO,
      { new: true },
    );
  }

  async deleteProduct(productID: string): Promise<Product> {
    try {
      return await this.productModel.findByIdAndDelete(productID);
    } catch (_) {
      return;
    }
  }
}
