import { ProductMemoryService } from "./service/product.memory.service";

const productService = new ProductMemoryService();

productService.create({
  title: "Product 1",
  price: 12,
  description: "Description 1",
  categoryId: 1,
  images: ["image1.jpg", "image2.jpg"]
});

const products = productService.getall();
console.log(products);
const productId = products[0].id;
productService.update(productId, {
  title: "Product 1 update",

});
const rta = productService.findOne(productId);

console.log(rta);



//
