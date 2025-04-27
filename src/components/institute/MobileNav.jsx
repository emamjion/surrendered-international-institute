"use client";

import { useMediaQuery } from "react-responsive";
import { Link as ScrollLink } from "react-scroll";

const links = [
  { name: "Home", target: "home", offset: -100 },
  { name: "About", target: "about", offset: -80 },
  { name: "Admission", target: "admission", offset: -80 },
  { name: "Campus", target: "campus", offset: 0 },
  { name: "Information", target: "information", offset: -40 },
  { name: "Courses", target: "courses", offset: 0 },
  { name: "Contact Us", target: "contact", offset: 0 },
];

const MobileNav = ({ containerStyles }) => {
  const isMobile = useMediaQuery({
    query : '(max-width : 640px)'
  })
  
  return (
    <nav className={` ${containerStyles}`}>
      {links.map((link, i) => {
        return (
          <ScrollLink
            offset={link.offset}
            to={link.target}
            smooth
            spy
            activeClass={` ${!isMobile && "active"}`}
            key={i}
            className="cursor-pointer hover:text-accent transition-all"
          >
            {link.name}
          </ScrollLink>
        );
      })}
    </nav>
  );
};

export default MobileNav;
