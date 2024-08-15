import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SingleProduct = ({image, name, detay}) => {
  return (
    <div className='max-w-96 border-2'>

    <Link href="#" className="group relative block overflow-hidden">
  <Image
    src={image}
    alt=""
    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
    height="600"
    width="400"
    
/>

  <div className="relative border border-gray-100 bg-white p-6">
    <span className="whitespace-nowrap bg-primary text-white px-3 py-1.5 text-xs font-medium"> New </span>

    <h3 className="mt-4 text-lg font-medium text-gray-900">{name}</h3>

    <p className="mt-1.5 text-sm text-gray-700">{detay}</p>

    <form className="mt-4">
      <button
        className="block w-full rounded bg-primary text-white p-4 text-sm font-medium transition hover:scale-105"
        >
        Bilgi Al
      </button>
    </form>
  </div>
    </Link>
          </div>
  )
}

export default SingleProduct