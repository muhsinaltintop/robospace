import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";
const menu = [
  { label: "Anasayfa", href: "/" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Ürünler", href: "/urunler" },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/iletisim" },
];

const social = [
  { label: "Facebook", href: "#", icon: <Facebook /> },
  { label: "Instagram", href: "#", icon: <Instagram /> },
  { label: "Youtube", href: "#", icon: <Youtube /> },
  { label: "LinkedIn", href: "#", icon: <Linkedin /> },
];
const Header = () => {
  return (
    <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 z-10 mb-8">
      <div className="flex h-16 items-center justify-between pt-8">
        <div className="md:flex md:items-center md:gap-12">
          <Link className="block text-primary" href="#">
            <span className="sr-only">Home</span>
            <Logo/>
          </Link>
        </div>

        <div className="hidden md:block">
          <nav aria-label="Global">
            <ul className="flex items-center gap-3 text-sm">
              {menu.map(({ label, href }) => (
                <li key={label} className="font-bold text-lg bg-primary px-3 py-1 rounded-md hover:bg-white">
                  <Link
                    className="text-white transition hover:text-primary"
                    href={href}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="sm:flex sm:gap-4">
            <ul className="flex items-center gap-4">
              {social.map(({ label, href, icon }) => (
                <Link className="" href={`/${href}`} key={label}>
                  <li>{icon}</li>
                </Link>
              ))}
            </ul>
          </div>

          <div className="block md:hidden">
            <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
