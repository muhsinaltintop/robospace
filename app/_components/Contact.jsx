"use client";
import React from "react";
import { MapPin, PhoneCall, AtSign } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Contact = () => {
  const pathName = usePathname(); // Router'ı kullanın.

  return (
    <section className="bg-white lg:mx-40 lg:my-10">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
                <Image
                  alt="robospace"
                  height="564"
                  width="846"
                  src="/robot-bg.webp"
                  className="absolute inset-0 h-full w-full object-cover opacity-50" // Arka plandaki fotoğrafın opacity'sini 40% yaptım.
                  />
          <div>
            {pathName === "/iletisim" ? (
              <div className="bg-white w-full lg:w-96 h-96 ml-4 lg:ml-8 mb-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3183.5430246019637!2d37.43533187630563!3d37.06837165253627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1531e5ae2ee678b1%3A0xaf5e919ed5fc7403!2zT0RBS1NBTiBNw5xIRU5ExLBTTMSwSyBBLsWeLiBTdHJlw6cgU2FybWEgTWFraW5lbGVyaQ!5e0!3m2!1str!2suk!4v1727285171902!5m2!1str!2suk"
                  width="100%"
                  height="100%"
                  className="border-none opacity-100"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            ) : null}

            <div className="hidden lg:relative lg:block lg:p-12">
              <Link className="block text-white" href="/">
                <span className="sr-only">Home</span>
                <Image
                  src={"/robo-space-logo.png"}
                  width={300}
                  height={300}
                  alt="Company logo"
                />
              </Link>

              <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                RoboSpace 🤖
              </h2>

              <p className="mt-4 leading-relaxed text-white/90">
                Temiz enerji için temiz güneş panelleri
              </p>
              <div>
                <div className="mt-4 leading-relaxed text-white/90">
                  <a className="flex" href="https://maps.app.goo.gl/fnDgH94kCd3wrNLr9">
                    <MapPin className="mr-1" /> Odaksan Mühendislik - Gaziantep
                  </a>
                </div>
                <div className="mt-4 leading-relaxed text-white/90">
                  <a className="flex" href="tel:+90 342 218 02 02">
                    <PhoneCall className="mr-1" /> +90 342 218 02 02
                  </a>
                </div>
                <div className="mt-4 leading-relaxed text-white/90">
                  <a className="flex" href="mailto:info@robospace.com">
                    <AtSign className="mr-1" /> info@robospace.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <Link
                className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
                href="/"
              >
                <span className="sr-only">Home</span>
                <svg
                  className="h-8 sm:h-10"
                  viewBox="0 0 28 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>

              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                RoboSpace 🤖
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                Temiz enerji için temiz güneş panelleri.
              </p>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <h2 className="lg:my-20 text-xl">İletişim Formu</h2>
              <form action="#" className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="isim">
                    İsim
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="İsim"
                    type="text"
                    id="isim"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Email adresi"
                      type="email"
                      id="email"
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="telefon">
                      Telefon
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Telefon Numarası"
                      type="tel"
                      id="telefon"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                  <div>
                    <label
                      htmlFor="model-1"
                      className="block w-full cursor-pointer rounded-lg border bg-primary border-gray-200 p-3 text-white hover:border-gray"
                      tabIndex="0"
                    >
                      <input
                        className="sr-only"
                        id="model-1"
                        type="radio"
                        tabIndex="-1"
                        name="option"
                      />

                      <span className="text-sm"> PLT 120 </span>
                    </label>
                  </div>

                  <div>
                    <label
                      htmlFor="model-2"
                      className="block w-full cursor-pointer rounded-lg border bg-primary border-gray-200 p-3 text-white hover:border-gray"
                      tabIndex="0"
                    >
                      <input
                        className="sr-only"
                        id="model-2"
                        type="radio"
                        tabIndex="-1"
                        name="option"
                      />

                      <span className="text-sm"> PLT 90 </span>
                    </label>
                  </div>

                  <div>
                    <label
                      htmlFor="model-3"
                      className="block w-full cursor-pointer rounded-lg border bg-primary border-gray-200 p-3 text-white hover:border-gray"
                      tabIndex="0"
                    >
                      <input
                        className="sr-only"
                        id="model-3"
                        type="radio"
                        tabIndex="-1"
                        name="option"
                      />

                      <span className="text-sm"> PLT 75 </span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">
                    Mesaj
                  </label>

                  <textarea
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Mesajınız"
                    rows="8"
                    id="mesaj"
                  ></textarea>
                </div>

                <div className="m-2">
                  <a
                    href="#"
                    className="w-full cursor-pointer rounded-lg border bg-primary border-gray-200 p-3 text-white hover:border-gray"
                  >
                    Detaylı Bilgi
                  </a>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Contact;
