import { ProductHttpService } from './service/product-http.service';

(async () => {

  try {
    const ProductService = new ProductHttpService();

    console.log('--'.repeat(20));

    const products = await ProductService.getAll();
    console.log('how many products? ', products.length);
    console.log('first product: ', products[0]);
    console.log('Only prices: ', products.map(p => p.price));

    const productId = products[0].id;
    console.log('updated product: ', await ProductService.findOne(productId));
    await ProductService.update(productId, {
      title: "Product 3 update",
      price: 12,
      description: "Description 1",
      categoryId: 1,
      images: ["image1.jpg", "image2.jpg"]
    });
    console.log('--'.repeat(20));
    const rta = await ProductService.findOne(productId);
    console.log('rta: ', rta);
  } catch (error) {
    console.log(error);

  }


})();
