"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  React.useEffect(() => {
    const sectionIds = ["about", "projects", "contact"];
    const options = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: [0, 0.25, 0.5, 0.75, 1],
    };
    const handler = (entries) => {
      // Pick the section with the largest visible ratio
      const visibleEntries = entries.filter((e) => e.isIntersecting);
      if (visibleEntries.length > 0) {
        const topEntry = visibleEntries.reduce((best, cur) =>
          cur.intersectionRatio > best.intersectionRatio ? cur : best
        );
        setActiveSection(topEntry.target.id);
      }
    };
    const observer = new IntersectionObserver(handler, options);
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-50 bg-[#121212] bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto px-16 py-2">
        <Link href={"/"} className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="w-auto h-8 md:h-12"
            priority
          />
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:flex items-center md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  href={link.path}
                  title={link.title}
                  isActive={activeSection === link.path.replace("#", "")}
                />
              </li>
            ))}
          </ul>
          <Link
            href="#contact"
            className="ml-4 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            Hire Me
          </Link>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
