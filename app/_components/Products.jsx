import React from 'react';
import Product from './Product';

const Products = () => {
  return (
    <div className="px-4">
      <h2 className="text-primary font-bold text-2xl text-center mt-2">Ürünlerimiz</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 justify-items-center">
        <Product image={"/pro-120-860-500.png"} name="PRO 120" detay="120cm Çift Fırçalı, Uzaktan Kumandalı" />
        <Product image={"/pro-75-90-860-500.png"} name="PRO 90" detay="90cm Çift Fırçalı, Uzaktan Kumandalı" />
        <Product image={"/pro-75-90-860-500.png"} name="PRO 75" detay="75cm Çift Fırçalı, Uzaktan Kumandalı" />
        <Product image={"/adv-120.png"} name="ADV 120" detay="120cm Fırçalı, Uzaktan Kumandalı" />
        <Product image={"/adv-80.png"} name="ADV 80" detay="80cm Fırçalı, Uzaktan Kumandalı" />
      </div>
    </div>
  );
};

export default Products;
