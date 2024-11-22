import React from 'react';
import Product from './Product';

const Products = ({ products }) => {
  // products listesini sıralıyoruz
  const sortedProducts = [...products].sort((a, b) => a.attributes.order - b.attributes.order);

  return (
    <div className="px-4">
      <h2 className="text-primary font-bold text-2xl text-center mt-2">Ürünlerimiz</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 justify-items-center">
        {sortedProducts.map((product) => (
          <Product 
            key={product.id} 
            image={product.attributes.featuredImage.data.attributes.url} 
            title={product.attributes.title} 
            featuredText={product.attributes.featuredText} 
            slug={product.attributes.slug} 
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
