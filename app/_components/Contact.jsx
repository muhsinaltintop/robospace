"use client";
import React from "react";
import { MapPin, PhoneCall, AtSign } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Map from "./Map";
import ContactForm from "./ContactForm";
import ContactLeft from "./ContactLeft";

const Contact = () => {

  return (
    <section className="bg-white mx-2 my-2 sm:mx-6 sm:my-6 md:mx-8 lg:mx-16 xl:mx-20 xl:my-10">
      <div className="grid min-h-screen grid-cols-1 md:grid-cols-2 xl:grid-cols-12">
        {/* Left section */}
        <ContactLeft/>

        {/* Right section */}
        <ContactForm/>
      </div>
    </section>
  );
};

export default Contact;
