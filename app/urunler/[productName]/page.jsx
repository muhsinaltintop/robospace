import Image from 'next/image';
import BreadCrum from '../../_components/BreadCrum';
import SideMenu from '../../_components/SideMenu';
import React from 'react'

const page = ({params}) => {

  const productName = params.productName.split('-')
  .map(word => word.toUpperCase())
  .join(' ');

  return (
    <div className="mx-40">
      <div className="mt-20"><BreadCrum productName={productName}/></div>  
      <div className="flex mt-10">
      <div className="">
        <SideMenu variation="products" />
      </div>
      <div className="">

        <h2 className="text-xl font-bold text-primary">RoboSpace {productName} Panel Yıkama Robotu</h2>
        <div className="flex">
          <div>
            <div>
              <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil unde eveniet facere ex quas, corporis cumque cum, rerum, inventore sint ea? Nam id reiciendis sint expedita dolor explicabo quae aspernatur.</p>
              <div>
            </div>
            <div className="mt-2">
              <h3 className="text-l font-bold text-primary">
                Öne Çıkan Özellikler
              </h3>
              <div className="mt-1">
                <ul className="list-disc list-inside">
                  <li>Hafif Alüminyum Gövde, Elektrostatik Boya</li>
                  <li>50 Cm Aralığa Kadar Panelden Panele Geçişlere Uygun Mekanik Yapı</li>
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

          </div>
          </div>

          <div>
            <Image src="/plt-75-90-860-500.png" width="860" height="500" alt="SolarSpace Panel Yıkama Robotu"/>
          </div>
        </div>
      </div>

      
      </div>
      
      
    </div>
  )
}

export default page