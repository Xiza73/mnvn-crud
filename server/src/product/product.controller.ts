import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Res,
  HttpStatus,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDTO } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('api/product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  async createPost(
    @Res() res: any,
    @Body() createProductDTO: CreateProductDTO,
  ) {
    const product = await this.productService.createProduct(createProductDTO);
    res.status(HttpStatus.OK).json({
      message: 'Producto creado correctamente',
      product,
    });
  }

  @Get()
  async getProducts(@Res() res: any) {
    const products = await this.productService.getProducts();
    res.status(HttpStatus.OK).json({
      message: 'Productos obtenidos correctamente',
      products,
    });
  }

  @Get('/:id')
  async getProduct(@Res() res: any, @Param('id') id: string) {
    const product = await this.productService.getProduct(id);
    if (!product) throw new NotFoundException('El producto no existe');
    res.status(HttpStatus.OK).json({
      message: 'Producto obtenidos correctamente',
      product,
    });
  }

  @Put('/:id')
  async updateProduct(@Res() res: any, @Param('id') id: string, @Body() body: CreateProductDTO) {
    const product = await this.productService.updateProduct(id, body);
    if (!product) throw new NotFoundException('El producto no existe');
    res.status(HttpStatus.OK).json({
      message: 'Producto actualizado correctamente',
      product,
    });
  }

  @Delete('/:id')
  async deleteProduct(@Res() res: any, @Param('id') id: string) {
      const product = await this.productService.deleteProduct(id);
      if (!product) throw new NotFoundException('El producto no existe');
      res.status(HttpStatus.OK).json({
        message: 'Producto eliminado correctamente',
        product,
      });
  }
}
