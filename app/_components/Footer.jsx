import React from "react";
import Logo from "./Logo";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2">
          <div className="border-b border-gray-100 py-8 lg:order-last lg:border-b-0 lg:border-s lg:py-16 lg:ps-16">
            <div className="block text-primary lg:hidden">
              {<Logo/>}
            </div>

            <div className="mt-8 space-y-4 lg:mt-0">
              <span className="hidden h-1 w-10 rounded bg-primary lg:block"></span>

              <div>
                <h2 className="text-2xl font-medium text-gray-900">
                  Demo Talep Edin
                </h2>

                <p className="mt-4 max-w-lg text-gray-500">
                  Son teknoloji Solar Panel Yıkama Robotları Robosapce modellerinden sizin için uygun olanını beraber belirleyelim ve sahada birlikte testini yapalım.
                </p>
              </div>

              <form className="mt-6 w-full">
                <label htmlFor="UserEmail" className="sr-only">
                  Email
                </label>

                <div className="rounded-md border border-gray-100 p-2 focus-within:ring sm:flex sm:items-center sm:gap-4">
                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="email@email.com"
                    className="w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm"
                  />

                  <button className="mt-1 w-full rounded bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-gray-600 sm:mt-0 sm:w-auto sm:shrink-0">
                    Gönder
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="py-8 lg:py-16 lg:pe-16">
            <div className="hidden text-teal-600 lg:block">
              <Link className="block text-primary" href="#">
                <span className="sr-only">Home</span>
                <Logo/>
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div>
                <p className="font-medium text-gray-900">Ürünler</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <Link
                      href="/urunler/pro-120"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Robospace PRO 120
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/urunler/pro-90"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Robospace PRO 90
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/urunler/pro-75"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Robospace PRO 75
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/urunler/adv-120"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Robospace ADV 120
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/urunler/adv-80"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Robospace ADV 80
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-gray-900">Odaksan</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Hakkımızda
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Streç Makinası
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Referanslarımız
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-gray-900">Önemli Linkler</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      İletişim
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      SSS
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Demo Talebi
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 border-t border-gray-100 pt-8">
              <ul className="flex flex-wrap gap-4 text-xs">
                <li>
                  <Link
                    href="#"
                    className="text-gray-500 transition hover:opacity-75"
                  >
                    Şartlar ve Koşullar
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-gray-500 transition hover:opacity-75"
                  >
                    Gizlilik Politikası
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-gray-500 transition hover:opacity-75"
                  >
                    Çerezler
                  </Link>
                </li>
              </ul>

              <p className="mt-8 text-xs text-gray-500">
                &copy; 2024. Odaksan Mühendislik A.Ş. Tüm Hakları Saklıdır.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
