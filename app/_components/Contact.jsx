"use client";
import React, {useRef, useState} from "react";
import { MapPin, PhoneCall, AtSign } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import NewContact from "./NewContact";
import { createInquri } from "../_utils/GlobalApi";

const Contact = () => {
  const pathName = usePathname(); // Router'ı kullanın,

  const router = useRouter(); // useRouter kancasını tanımla
    const checkboxRef = useRef(null);
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const createdInquri = await createInquri({ data: formData });
      setSuccess("Enquiry created successfully!");
      // router.push('/thank-you'); // Başarılı gönderimden sonra yönlendirme
    } catch (error) {
      setError("Error creating enquiry.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
    <NewContact/>
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
                <Image src="/icon.png" width="200" height="200" alt="icon"/>
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
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="name">
                    İsim
                  </label>
                  <input
                    placeholder="İsim"
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="E-mail Adresi"
                    type="email"
                    id="email"
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Telefon
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Telefon Numarası"
                      type="mobile-number"
                      id="phone"
                      name='phone'
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="">
                  <fieldset className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                    <legend>
                      Modeller
                    </legend>
                    <div>
                      <label
                        htmlFor="pro-120"
                        className="block w-full cursor-pointer rounded-lg border bg-primary border-gray-200 p-3 text-white hover:border-gray"
                        tabIndex="0"
                      >
                        <input
                          className="sr-only"
                          id="pro-120"
                          type="radio"
                          name="model"
                          value="pro-120"
                          checked={formData.model === "pro-120"}
                          onChange={handleChange}
                          tabIndex="-1"
                        />

                        <span className="text-sm"> PRO 120 </span>
                      </label>
                    </div>

                    <div>
                      <label
                        htmlFor="pro-90"
                        className="block w-full cursor-pointer rounded-lg border bg-primary border-gray-200 p-3 text-white hover:border-gray"
                        tabIndex="0"
                      >
                        <input
                          className="sr-only"
                          id="pro-90"
                          type="radio"
                          name="model"
                          value="pro-90"
                          checked={formData.model === "pro-90"}
                          onChange={handleChange}
                          tabIndex="-1"
                        />

                        <span className="text-sm"> PRO 90 </span>
                      </label>
                    </div>

                    <div>
                      <label
                        htmlFor="pro-75"
                        className="block w-full cursor-pointer rounded-lg border bg-primary border-gray-200 p-3 text-white hover:border-gray"
                        tabIndex="0"
                      >
                        <input
                          className="sr-only"
                          id="pro-75"
                          type="radio"
                          name="model"
                          value="pro-75"
                          checked={formData.model === "pro-75"}
                          onChange={handleChange}
                          tabIndex="-1"
                        />

                        <span className="text-sm"> PRO 75 </span>
                      </label>
                    </div>

                    <div>
                      <label
                        htmlFor="adv"
                        className="block w-full cursor-pointer rounded-lg border bg-primary border-gray-200 p-3 text-white hover:border-gray"
                        tabIndex="0"
                      >
                        <input
                          className="sr-only"
                          id="adv-120"
                          type="radio"
                          name="model"
                          value="adv-120"
                          checked={formData.model === "adv-120"}
                          onChange={handleChange}
                          tabIndex="-1"
                        />

                        <span className="text-sm"> ADV 120 </span>
                      </label>
                    </div>

                    <div>
                      <label
                        htmlFor="adv-80"
                        className="block w-full cursor-pointer rounded-lg border bg-primary border-gray-200 p-3 text-white hover:border-gray has-[:checked]:border-destructive has-[:checked]:bg-destructive has-[:checked]:text-white"
                        tabIndex="0"
                      >
                        <input
                          className="sr-only"
                          id="adv-80"
                          type="radio"
                          name="model"
                          value="adv-80"
                          checked={formData.model === "adv-80"}
                          onChange={handleChange}
                          tabIndex="-1"
                        />

                        <span className="text-sm"> ADV 80 </span>
                      </label>
                    </div>
                  </fieldset>
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">
                    Mesaj
                  </label>

                  <textarea
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Mesajınız"
                    rows="8"
                    id="message"
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="flex items-start mt-3 ">
              <input
                type="checkbox"
                id="permission"
                ref={checkboxRef}
                className="h-5 w-5 relative rounded border-gray-300 bg-white shadow-sm mr-2"
                />
              <label htmlFor="permission" className="text-center font-light inline-block text-xs text-gray-500 hover:cursor-pointer">
                Bu formu doldurarak Robospace çalışanlarının sizinle telefonla ve email ile iletişime geçmesine izin vermiş olursunuz. Ayrıca verileriniz anonim olarak işlenerek deneyiminizi iyileştirmek için kullanılacaktır.
              </label>
            </div>
                <div className="m-2">
                  <button
                    type="submit"
                    className="inline-flex ring-1 px-7 py-2 hover:bg-secondary rounded-lg bg-primary font-medium text-white sm:w-auto"
                    disabled={!checkboxRef.current?.checked & loading}
                  >
                    Detaylı Bilgi
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </section>
    </div>
  );
};

export default Contact;
