import Image from 'next/image';
import BreadCrum from '../../_components/BreadCrum';
import React from 'react';
import products from '../../../public/products';

export async function generateMetadata({params}){

  const productName = params.productName.split('-')
  .map(word => word.toUpperCase())
  .join(' ');

  return {
    title: productName,
  }
  

}

const Page = ({params}) => {

  const productName = params.productName.split('-')
  .map(word => word.toUpperCase())
  .join(' ');
 

  function findProductByName(name) {
    let foundProduct = null;
    products.map(product => {
        if (product.productName.toLowerCase() === name.toLowerCase()) {
            foundProduct = product;
        }
    });
    return foundProduct;
  }
  
  const searchResult = findProductByName(productName);

  

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mt-10 sm:mt-20">
        <BreadCrum productName={productName}/>
      </div>  
      <div className="flex flex-col lg:flex-row mt-10">
        
        <div className="lg:w-3/4 lg:ml-10">
          <h2 className="text-xl font-bold text-primary mb-4">RoboSpace {searchResult.productName} Panel Yıkama Robotu</h2>

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
              <p className="text-justify">{searchResult.productDescription}</p>
              <div className="mt-4">
                <h3 className="text-l font-bold text-primary mb-2">
                  Öne Çıkan Özellikler
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Hafif Alüminyum Gövde, Elektrostatik Boya</li>
                  <li>{searchResult.panelDistance} Aralığa Kadar Panelden Panele Geçişlere Uygun Mekanik Yapı</li>
                  <li>75 Metreye Kadar Etkili Endüstriyel Uzaktan Kumanda</li>
                  <li>Panel Yüzeylerini Çizmeden Hassas Temizlik Yapabilen İthal Fırçalar</li>
                  <li>Ayarlanabilir Yürüme Ve Fırça Hızı</li>
                  <li>Eğimli Yüzeylerde Rotadan Şaşmadan Düz İlerlemeyi Sağlayan &quot;Rota Stabilizasyon Sistemi&quot;</li>
                  <li>Silikon Palet Yapısı İle Panellere Daha Yumuşak, Kaymayan Ve Uzun Ömürlü Baskı</li>
                  <li>Yedek Lityum Bataryalar İle 9 Saate Varan Durmadan Çalışma Süreleri</li>
                  <li>4&quot; Dokunmatik Panel</li>
                  <li>Mekanik Darbelere Karşı, Motor Koruma Sistemi</li>
                </ul>
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
