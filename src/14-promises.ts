import axios from 'axios';

(async()=>{

  function delay (time: number){
    const primise = new Promise<boolean> ((resolve)=>{
      setTimeout(()=>{
        resolve(true)
      },time);
    });
    return primise;
  }

  function getProducts (){
    const promise = axios.get('https://api.escuelajs.co/api/v1/products');
    return promise;
  }
  async function getProductsAsync (){
    const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
    return rta;
  }

  const rta = await delay(3000);
  console.log(rta);

  const products = await getProducts();
  console.log(products);
  const products2 = await getProductsAsync();
  console.log(products2);

})();
