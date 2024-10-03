import React, {useState, useRef} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { createInquri } from "../_utils/GlobalApi";

const ContactForm = () => {
    const router = useRouter();
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
    } catch (error) {
      setError("Error creating enquiry.");
    } finally {
      setLoading(false);
    }
  }
  return (
    <main className="flex items-center justify-center px-4 py-4 sm:px-12 md:col-span-1 xl:col-span-7 lg:px-16 xl:py-12">
          <div className="max-w-lg lg:max-w-xl xl:max-w-3xl">
            <div className="relative -mt-16 block xl:hidden text-center">
              <Link
                className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
                href="/"
              >
                <span className="sr-only">Home</span>
                <Image src="/icon.png" width={200} height={200} alt="icon" />
              </Link>

              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                RoboSpace 🤖
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                Temiz enerji için temiz güneş panelleri.
              </p>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <h2 className="lg:my-10 text-xl">İletişim Formu</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="name">
                    İsim
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
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
                      name="email"
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
                      type="tel"
                      id="phone"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">
                    Mesaj
                  </label>
                  <textarea
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Mesajınız"
                    rows="6"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="flex items-start mt-3">
                  <input
                    type="checkbox"
                    id="permission"
                    ref={checkboxRef}
                    className="h-5 w-5 relative rounded border-gray-300 bg-white shadow-sm mr-2"
                  />
                  <label
                    htmlFor="permission"
                    className="text-xs text-gray-500 hover:cursor-pointer"
                  >
                    Bu formu doldurarak Robospace çalışanlarının sizinle
                    telefonla ve email ile iletişime geçmesine izin vermiş
                    olursunuz. Ayrıca verileriniz anonim olarak işlenerek
                    deneyiminizi iyileştirmek için kullanılacaktır.
                  </label>
                </div>

                <div className="m-2">
                  <button
                    type="submit"
                    className="inline-flex ring-1 px-7 py-2 hover:bg-secondary rounded-lg bg-primary font-medium text-white sm:w-auto"
                    disabled={!checkboxRef.current?.checked || loading}
                  >
                    Detaylı Bilgi
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
  )
}

export default ContactForm