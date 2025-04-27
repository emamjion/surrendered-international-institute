"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MdArrowRightAlt, MdClose, MdMenu } from "react-icons/md";
import MobileNav from "../institute/MobileNav";
import Nav from "../institute/Nav";

const Header = () => {
  const [headerActive, setHeaderActive] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // detect scroll
      setHeaderActive(window.scrollY > 50);
    };
    // add scroll event
    window.addEventListener("scroll", handleScroll);
    // clear scroll event
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        headerActive ? "h-[100px]" : "h-[124px]"
      } fixed max-w-[1920px] top-0 w-full bg-primary h-[100px] transition-all z-50`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center justify-center w-10 h-10 bg-orange-300 rounded-full"
        >
          <span className="font-bold">S</span>
        </Link>
        {/* Mobile Nav - Hidden on Large devices */}
        <MobileNav
          containerStyles={` ${headerActive ? "top-[90px]" : "top-[124px]"}  ${
            openNav
              ? "max-h-max pt-8 pb-10 border-t border-white/10"
              : "max-h-0 pt-0 pb-0 overflow-hidden border-white/0"
          }  xl:hidden text-white flex flex-col text-center gap-8 fixed bg-primary left-0 w-full text-base uppercase font-medium transition-all`}
        />
        {/* Desktop Nav  - Hidden on small devices */}
        <Nav containerStyles="flex gap-4 text-white hidden xl:flex text-base uppercase font-medium transition-all" />
        {/* Hide/open menu button */}
        <div className="flex items-center gap-4">
          {/* Apply button */}
          <div className="text-white">
            <button className="group text-base font-medium hover:text-accent transition-all uppercase flex items-center gap-2">
              <span>Apply Online</span>
              <span className="transition-transform duration-300 ease-in-out group-hover:translate-x-2">
                <MdArrowRightAlt className="text-4xl" />
              </span>
            </button>
          </div>
          <button
            onClick={() => setOpenNav(!openNav)}
            className="text-white lg:hidden"
          >
            {openNav ? (
              <MdClose className="text-4xl" />
            ) : (
              <MdMenu className="text-4xl" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
