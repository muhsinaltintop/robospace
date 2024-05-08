import React from "react";

const Slider = () => {
  return (
    <section className="relative z-0 overflow-hidden bg-gray-50 ">
      <div className="absolute inset-0 bg-[url(/robot-bg.jpg)] bg-cover bg-center bg-no-repeat brightness-50 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l "></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-white text-3xl font-extrabold sm:text-5xl">
            Türkiye'nin Solar Panel Yıkama Robotu
            <strong className="block font-extrabold text-primary bg-white w-6/12 py-4 bg-opacity-40 items-center justify-center m-auto">
              RoboSpace
            </strong>
          </h1>

          <p className="mt-4 text-white max-w-lg sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
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
