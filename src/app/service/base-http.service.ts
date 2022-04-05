import { Category } from "../models/category.model";
import axios from "axios";
import { Product } from "../models/product.model";

export class BaseHttpService<typeClass> {
  // data: typeClass[] = [];
  //private url = 'https://api.escuelajs.co/api/v1/products';
  constructor(
    private url : string
  ){}

  async getAll(){
    const {data} = await axios.get<typeClass[]>(this.url);
    return data;
  }
}


(async () => {
  const productsService = new BaseHttpService<Product>('https://api.escuelajs.co/api/v1/products');
  const rta = await productsService.getAll();
  console.log(rta.length);

  const productsService2 = new BaseHttpService<Product>('https://api.escuelajs.co/api/v1/categories');
  const rta2 = await productsService2.getAll();
  console.log(rta2.length);

})();
// const service = new BaseHttpService<string>();
// service.getAll();

// const service1 = new BaseHttpService<number>();
// service1.getAll();

