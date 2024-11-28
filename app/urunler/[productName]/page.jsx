import Image from 'next/image';
import BreadCrum from '../../_components/BreadCrum';
import React from 'react';
import products from '../../../public/products';
import { getSingleProduct } from '@/app/_utils/GlobalApi';


export async function generateMetadata({params}){

  const singleProduct = await getSingleProduct(params.productName)

  console.log("trial:", singleProduct.attributes.featuredImage.data.attributes.url);

  return {
    title: singleProduct.attributes.seoTitle,
    description: singleProduct.attributes.seoDescription,
    keywords: singleProduct.attributes.seoKeywords,
  }
  

}

const Page = async ({params}) => {

  const singleProduct = await getSingleProduct(params.productName)
  console.log("sP:", singleProduct);
  

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mt-10 sm:mt-20">
        <BreadCrum productName={singleProduct.attributes.slug}/>
      </div>  
      <div className="flex flex-col lg:flex-row mt-10">
        
        <div className="lg:w-3/4 lg:ml-10">
          <h2 className="text-xl font-bold text-primary mb-4">{singleProduct.attributes.title}</h2>

          <div className="block lg:hidden mb-6">
            <Image 
              src="/pro-75-90-860-500.png" 
              width={860} 
              height={500} 
              className="w-full h-auto" 
              alt="SolarSpace Panel Yıkama Robotu" 
            />
          </div>

          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 mb-6 lg:mb-0">
              <p className="text-justify">{singleProduct.attributes.productDetails}</p>
              <div className="mt-4">
              </div>
            </div>

            {/* Görseli büyük ekranlarda sağda bırakıyoruz */}
            <div className="hidden lg:block lg:w-1/2 lg:ml-6">
              <Image 
                src="/pro-75-90-860-500.png" 
                width={860} 
                height={500} 
                className="w-full h-auto" 
                alt="SolarSpace Panel Yıkama Robotu" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
