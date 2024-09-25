import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Product = ({ image, name, detay }) => {
  return (
    <div className="border-2 p-2">
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
          className="h-32 md:h-48 lg:h-64 w-full object-contain transition duration-500 group-hover:scale-105"
          height={300}
          width={600}
        />
        <div className="relative border border-gray-100 bg-white p-2 md:p-4">
          <span className="whitespace-nowrap bg-primary text-white px-3 py-1.5 text-xs font-medium">New</span>
          <h3 className="mt-2 text-sm md:text-lg font-medium text-gray-900">{name}</h3>
          <p className="mt-1 text-xs md:text-sm text-gray-700">{detay}</p>
          <form className="mt-2">
            <button className="block w-full rounded bg-primary text-white p-2 md:p-4 text-xs md:text-sm font-medium transition hover:scale-105">
              Bilgi Al
            </button>
          </form>
        </div>
      </Link>
    </div>
  );
};

export default Product;