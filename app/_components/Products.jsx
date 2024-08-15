import React from 'react'
import SingleProduct from './SingleProduct'
import Plt120 from "../../public/plt-120.png"

const Products = () => {
  return (
        
            <div className='flex my-8 justify-around'>
                <SingleProduct image={"/plt-120.png"} name="PLT 120" detay="120cm Çift Fırçalı, Uazktan Kumandalı"/>
                <SingleProduct image={"/plt-75-90.png"} name="PLT 90" detay="90cm Çift Fırçalı, Uazktan Kumandalı"/>
                <SingleProduct image={"/plt-75-90.png"} name="PLT 75" detay="75cm Çift Fırçalı, Uazktan Kumandalı"/>
            </div>
        
  )
}

export default Products