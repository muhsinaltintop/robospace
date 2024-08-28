import React from 'react'
import { Home } from './Icons'


const BreadCrum = ({ productName }) => {
  return (

<div aria-label="Breadcrumb" className="flex">
  <ol className="flex overflow-hidden rounded-lg border border-gray-200 text-gray-600">
    <li className="flex items-center border-r">
      <a
        href="/"
        className="flex h-10 items-center gap-1.5 bg-gray-100 px-4 transition hover:text-gray-900"
      >
        <Home/>

        <span className="ms-1.5 text-xs font-medium"> Anasayfa </span>
      </a>
    </li>
    <li className="flex items-center border-r">
      <a
        href="/urunler"
        className="flex h-10 items-center gap-1.5 bg-gray-100 px-4 transition hover:text-gray-900"
      >

        <span className="ms-1.5 text-xs font-medium"> Ürünler </span>
      </a>
    </li>
    <li className="relative flex items-center">
      <span
        className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)]"
      >
      </span>

      <a
        href="#"
        className="flex h-10 items-center bg-white pe-4 ps-8 text-xs font-medium transition hover:text-gray-900"
      >
        {productName}
      </a>
    </li>
  </ol>
</div>
  )
}

export default BreadCrum
