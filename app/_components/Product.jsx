import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Product = ({ image, name, detay }) => {
  return (
    <div className="max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl border-2 p-2 mx-auto">
      <Link
        href={`/urunler/${name
          .toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^\w\-]+/g, '')
          .replace(/\-\-+/g, '-')
          .trim()
        }`}
        className="group relative block overflow-hidden"
      >
        <Image
          src={image}
          alt={name}
          className="h-48 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-64 md:h-72 lg:h-80 xl:h-96"
          height={500}
          width={1000}
        />
        <div className="relative border border-gray-100 bg-white p-4 md:p-6">
          <span className="whitespace-nowrap bg-primary text-white px-3 py-1.5 text-xs font-medium">New</span>
          <h3 className="mt-4 text-lg font-medium text-gray-900">{name}</h3>
          <p className="mt-1.5 text-sm text-gray-700">{detay}</p>
          <form className="mt-4">
            <button className="block w-full rounded bg-primary text-white p-4 text-sm font-medium transition hover:scale-105">
              Bilgi Al
            </button>
          </form>
        </div>
      </Link>
    </div>
  );
};

export default Product;
