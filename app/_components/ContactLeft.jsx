import Image from 'next/image'
import React from 'react'
import Map from './Map'
import Link from 'next/link'
import { AtSign, MapPin, PhoneCall } from 'lucide-react'
import { usePathname } from 'next/navigation'

const ContactLeft = () => {
  const pathName = usePathname();
  
  return (
    <section className="relative flex items-end bg-gray-900 col-span-1 xl:col-span-5 xl:h-full h-auto md:h-auto">
      {/* Background Image */}
      <Image
        alt="robospace"
        height="564"
        width="846"
        src="/robot-bg.png"
        className="absolute inset-0 h-full w-full object-cover opacity-50"
      />

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>

      {/* Content */}
      <div className="relative p-6 md:p-10 xl:p-12 text-white w-full">
        {/* Map */}
        {pathName === "/iletisim" && (
          <div className="relative w-full h-64 md:h-96 lg:h-[28rem] overflow-hidden">
            <Map />
          </div>
        )}

        {/* Logo */}
        <Link className="block" href="/">
          <div className="flex justify-center mt-4">
            <Image
              src="/robo-space-logo.png"
              alt="RoboSpace Logo"
              width={150}
              height={150}
              className="md:w-40 md:h-10 lg:w-56 lg:h-20"
            />
          </div>
        </Link>

        {/* Title */}
        <h2 className="mt-4 text-xl md:text-2xl lg:text-3xl font-bold text-center w-full">
          RoboSpace 🤖
        </h2>

        {/* Subtitle */}
        <p className="text-center text-gray-600 mt-2">
          Temiz enerji için temiz güneş panelleri.
        </p>

        {/* Contact Details */}
        <div>
          <div className="mt-4 leading-relaxed text-white">
            <a
              className="flex"
              href="https://maps.app.goo.gl/fnDgH94kCd3wrNLr9"
            >
              <MapPin className="mr-1" /> Odaksan Mühendislik - Gaziantep
            </a>
          </div>
          <div className="mt-4 leading-relaxed text-white">
            <a className="flex" href="tel:+90 342 218 02 02">
              <PhoneCall className="mr-1" /> +90 342 218 02 02
            </a>
          </div>
          <div className="mt-4 leading-relaxed text-white">
            <a className="flex" href="mailto:info@robospace.com">
              <AtSign className="mr-1" /> info@robospace.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactLeft;
