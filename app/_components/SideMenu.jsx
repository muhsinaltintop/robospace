"use client"
import Image from 'next/image';
import React, { useState } from 'react';

const SideMenu = ({ onMenuClick, variation }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen && (
        <button
          className="fixed top-0 left-0 p-4 focus:outline-none z-50 md:hidden mt-16"
          onClick={() => setIsOpen(true)}
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}

      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white overflow-y-auto transition-transform transform 
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:translate-x-0 md:static md:inset-0`}
      >
        <div className="flex flex-col h-full">
          {isOpen && (
            <button
              className="absolute top-0 right-0 mt-4 mr-4 focus:outline-none md:hidden"
              onClick={() => setIsOpen(false)}
            >
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          <div className="px-4 py-6">
            {variation === "about" ? 
            (<div>          
            <span className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
              <Image
                src="/robo-space-logo.png"
                width={200}
                height={200}
                alt="RoboSpace Logo"
              />
            </span>
            <span className="text-sm text-primary font-bold mt-1">
              Bir Odaksan A.Ş. Kuruluşudur.
            </span>

            <ul className="mt-6 space-y-1">
              <li>
                <button
                  onClick={() => onMenuClick('odaksan')}
                  className="block w-full text-left rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
                >
                  Odaksan A.Ş.
                </button>
              </li>
              <li>
                <button
                  onClick={() => onMenuClick('vision')}
                  className="block w-full text-left rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
                >
                  Vizyonumuz
                </button>
              </li>
              <li>
                <button
                  onClick={() => onMenuClick('mission')}
                  className="block w-full text-left rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
                >
                  Misyonumuz
                </button>
              </li>
              <li>
                <button
                  onClick={() => onMenuClick('quality')}
                  className="block w-full text-left rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
                >
                  Kalite Politikamız
                </button>
              </li>
              <li>
                <button
                  onClick={() => onMenuClick('production')}
                  className="block w-full text-left rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
                >
                  Üretimlerimiz
                </button>
              </li>
            </ul>
            </div>) : variation === "products" ? (<div>          
            
            <span className="bg-primary font-bold mt-1">
             <h2 className="bg-primary font bold text-lg text-white px-4 py-1 rounded-lg w-fit">Ürünler</h2> 
            </span>

            <ul className="mt-6 space-y-1">
              <li>
                <button
                  onClick={() => onMenuClick('/urunler/pro-120')}
                  className="block w-full text-left rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
                >
                  <div className="flex">
                  <span>
                  RoboSpace PRO 120 
                  </span>
                  <span className="ml-2"><Image src="/pro-120-860-500.png" width="40" height="20" alt="Solar Panel Yıkama Robotu"/> </span>
                  </div>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onMenuClick('/urunler/pro-90')}
                  className="block w-full text-left rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
                >
                 <div className="flex">
                  <span>
                  RoboSpace PRO 90 
                  </span>
                  <span className="ml-2"><Image src="/pro-75-90-860-500.png" width="40" height="20" alt="Solar Panel Yıkama Robotu"/> </span>
                  </div>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onMenuClick('/urunler/pro-75')}
                  className="block w-full text-left rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
                >
                   <div className="flex">
                  <span>
                  RoboSpace PRO 75
                  </span>
                  <span className="ml-2"><Image src="/pro-120-860-500.png" width="40" height="20" alt="Solar Panel Yıkama Robotu"/> </span>
                  </div>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onMenuClick('/urunler/adv-120')}
                  className="block w-full text-left rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
                >
                  <div className="flex">
                  <span>
                  RoboSpace ADV 120 
                  </span>
                  <span className="ml-2"><Image src="/adv-120.png" width="40" height="20" alt="Solar Panel Yıkama Robotu"/> </span>
                  </div>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onMenuClick('/urunler/adv-80')}
                  className="block w-full text-left rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
                >
                  <div className="flex">
                  <span>
                  RoboSpace ADV 80
                  </span>
                  <span className="ml-2"><Image src="/adv-80.png" width="40" height="20" alt="Solar Panel Yıkama Robotu"/> </span>
                  </div>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onMenuClick('production')}
                  className="block w-full text-left rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
                >
                  Üretimlerimiz
                </button>
              </li>
            </ul>
            </div>): ""}
          </div>

          <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
            <a
              href="#"
              className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
            >
              <Image
                alt="Logo Icon"
                src="/icon.png"
                width="100"
                height="100"
                className="w-10 h-10 rounded-full object-cover"
              />

              <div>
                <p className="text-xs">
                  <strong className="block font-medium">İletişim</strong>
                  <span>robospace@odaksan.com</span>
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default SideMenu;
