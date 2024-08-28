import React from 'react';
import Product from './Product';

const Products = () => {
  return (
    <div className="px-4">
      <h2 className="text-primary font-bold text-2xl text-center mt-2">Ürünlerimiz</h2>
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-around my-8 gap-4">
        <Product image={"/plt-120-860-500.png"} name="PLT 120" detay="120cm Çift Fırçalı, Uazktan Kumandalı" />
        <Product image={"/plt-75-90-860-500.png"} name="PLT 90" detay="90cm Çift Fırçalı, Uazktan Kumandalı" />
        <Product image={"/plt-75-90-860-500.png"} name="PLT 75" detay="75cm Çift Fırçalı, Uazktan Kumandalı" />
      </div>
    </div>
  );
};

export default Products;
