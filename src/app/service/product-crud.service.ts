import { Product } from "../models/product.model";
import { BaseHttpService } from "./base-http.service";
import { UpdateProductDto } from "../dto/product.dto";
import { ProductHttpService } from "./product-http2.service";

export class ProductCRUDService {
  private url = 'https://api.escuelajs.co/api/v1/products';
  private http = new ProductHttpService(this.url);


  async update(id: Product['id'], dto: UpdateProductDto) {
    return  this.http.update(id, dto);
  }
}




//
