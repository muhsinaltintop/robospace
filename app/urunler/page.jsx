import React from 'react'
import Products from '../_components/Products'
import { getAllProducts } from '../_utils/GlobalApi';
export const metadata  = {
  title: "Ürünler",
  description: "Güneş Paneli Temizleme Robotları Çeşitleri",
  keywords: ['Güneş', 'panel', 'temizlik', 'temizleme', 'robot', 'makine', 'solar', 'ges2'],
};

const page = async() => {
  const products = await getAllProducts();

  return (
    <Products products={products}/>
  )
}

export default page