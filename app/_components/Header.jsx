"use client"
import { useState } from "react";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo"; // Logonuzu import ediyorsunuz
import Image from "next/image";

const menu = [
  { label: "Anasayfa", href: "/" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Ürünler", href: "/urunler" },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/iletisim" },
];

const social = [
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61559182716924", icon: <Facebook /> },
  { label: "Instagram", href: "https://www.instagram.com/solar_robospace", icon: <Instagram /> },
  { label: "Youtube", href: "https://www.youtube.com/@RobospaceGESTemizlemeRobotu", icon: <Youtube /> },
  { label: "LinkedIn", href: "#", icon: <Linkedin /> },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 z-10 mb-8">
        <div className="flex h-16 items-center justify-between pt-8">
          <div className="md:flex md:items-center md:gap-12">
            <Link className="block text-primary" href="/">
              <span className="sr-only">Home</span>
              <Logo />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-3 text-sm">
                {menu.map(({ label, href }) => (
                  <li key={label} className="font-bold text-lg bg-primary px-3 py-1 rounded-md hover:bg-white">
                    <Link className="text-white transition hover:text-primary" href={href}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <ul className="flex items-center gap-4">
                {social.map(({ label, href, icon }) => (
                  <Link className="" href={href} key={label}>
                    <li>{icon}</li>
                  </Link>
                ))}
              </ul>
            </div>

            {/* Mobile Menu Button */}
            <div className="block md:hidden">
              <button
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                onClick={toggleMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide-in Mobile Menu */}
      <div
        className={`fixed inset-y-0 right-0 z-40 w-64 bg-white overflow-y-auto transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col h-full p-4">
          {/* Close Button */}
          <button
            className="absolute top-0 left-0 mt-4 ml-4 focus:outline-none"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Logo */}
          <div className="mb-6 w-9/12 ml-6">
            <Link href="/">
              <Logo />
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-start mb-6">
            {social.map(({ label, href, icon }) => (
              <Link href={href} key={label} className="mr-4">
                {icon}
              </Link>
            ))}
          </div>

          {/* Menu Items */}
          <nav aria-label="Mobile">
            <ul className="flex flex-col items-start gap-3 text-sm">
              {menu.map(({ label, href }) => (
                <li key={label} className="font-bold text-lg bg-primary px-3 py-1 rounded-md hover:bg-white">
                  <Link className="text-white transition hover:text-primary" href={href}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Background overlay when menu is open */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Header;
