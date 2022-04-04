import axios from 'axios';
import {Product} from './models/product.model';

let anuVar: any = 12;
let boolvar: boolean = true;

(async()=>{

  async function getProductsAsync (){
    const rta = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
    return rta.data;
  }

  const products = await getProductsAsync();
  console.log(products.map(item => `${item.id} - ${item.title}`));



})();
