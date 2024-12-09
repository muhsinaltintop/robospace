import React from "react";

const Slider = () => {
  return (
    <section className="relative z-0 overflow-hidden bg-gray-50 -mx-10">
      <div className="absolute inset-0 bg-[url(https://res.cloudinary.com/dk3zfjoii/image/upload/v1715722594/robot_bg_e1ca025ed5.webp)] bg-cover bg-center bg-no-repeat brightness-50 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l "></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-left">
          <h1 className="text-white text-3xl font-extrabold sm:text-5xl">
            Türkiye&apos;nin Güneş Panel Temizleme Robotu
            <strong className="pl-2 ml-2 block font-extrabold text-primary bg-white w-6/12 pt-2 pb-4 mt-2 bg-opacity-40 items-left justify-left">
              RoboSpace
            </strong>
          </h1>

          <p className="mt-4 text-white max-w-lg sm:text-2xl/relaxed">
            Temiz Panel <span className="text-white">Kazandırır</span>. %30 Daha Verimli Paneller.
            
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-gray-800 focus:outline-none focus:ring active:bg-gray-700 sm:w-auto"
            >
              İletişim
            </a>

            <a
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-primary shadow hover:text-gray-800 focus:outline-none focus:ring active:text-gray-500 sm:w-auto"
            >
              Detaylı Bilgi
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
