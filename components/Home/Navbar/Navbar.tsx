"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { NavLinks } from "@/constant/constant";
import Logo from "./Logo";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Navbar = ({ openNav }: Props) => {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id); // e.g. "projects"
          }
        });
      },
      { threshold: 0.6 } // 60% must be visible before active changes
    );

    NavLinks.forEach((link) => {
      const el = document.getElementById(link.sectionId);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="transition-all duration-200 h-[10vh] z-[10000] fixed w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="flex items-center h-full justify-between w-[90%] mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Logo />
          <span className="text-lg hidden sm:block md:text-xl text-[#f1f5f9] font-semibold">
            MIKAELA
          </span>
        </div>

        {/* Navlinks */}
        <div className="hidden lg:flex items-center space-x-10">
          {NavLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
             
              className={`nav-link text-base transition-all duration-300 ${
                active === link.sectionId
                  ? "text-teal-400 font-semibold"
                  : "text-[#f1f5f9] hover:text-teal-400 hover:scale-105"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-end space-x-4">
          <Link
            href="/images/Mikaela-Resume.pdf"
            target="_blank"
            className="bg-teal-400 text-slate-950 p-2.5 px-6 rounded-xl text-base font-semibold hover:bg-purple-400 hover:text-dark border-solid border-transparent hover:border-dark border-2 transition-all duration-300"
            download
          >
            Resume
          </Link>

          {/* Hamburger menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

