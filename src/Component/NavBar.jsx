import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import NavLogo from "../assets/Image/NavBar/NE_Sign_Logo.png";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const location = useLocation();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  const NavLinks = [
    { name: "Home", href: "/" },
    {
      name: "Services",
      href: "/services",
      dropdown: [
        { name: "Signage", href: "/services/signage" },
        { name: "Printing", href: "/services/printing" },
        { name: "Direct Mailing", href: "/services/direct-mailing" },
        { name: "Web Designing", href: "/services/web-designing" },
        { name: "SEO", href: "/services/seo" }
      ]
    },
    { name: "Apparel", href: "/apparel" },
    { name: "Promotional products", href: "/promotional-products" },
    { name: "Our work", href: "/our-work" },
    { name: "Contact us", href: "/contact" },
  ];

  return (
    <>
      <nav className="fixed w-full h-[100px] z-50 top-0 left-0 bg-[#000000]/70 border-b border-[#333333] backdrop-blur-md ">
        <div className=" mx-auto px-4 sm:px- flex items-center justify-between ">
          {/* Left: Logo */}
          <div className=" z-50">
            <Link to="/">
              <img
                src={NavLogo}
                alt="NE-Sign Logo"
                className="w-[120px] sm:w-[155px] h-auto sm:h-[56px] object-contain"
              />
            </Link>
          </div>

          {/* Middle: Links (Desktop) */}
          <div className="hidden lg:flex items-center space-x-6">
            {NavLinks.map((link, index) => (
              <div key={link.name} className="relative group">
                <Link
                  to={link.href}
                  className={`font-poppins font-normal md-text-sm xl:text-[18px] transition duration-300 whitespace-nowrap flex items-center gap-1 ${
                    location.pathname === link.href || (link.dropdown && link.dropdown.some(d => location.pathname === d.href))
                      ? "text-primary"
                      : "text-white hover:text-primary"
                  }`}
                >
                  {link.name}{" "}
                  {link.dropdown && <span className="text-sm">+</span>}
                </Link>
                {link.dropdown && (
                  <div className="absolute left-0 top-full pt-4 hidden group-hover:block w-56 z-50">
                    <div className="bg-[#111111] border border-white shadow-lg py-2 rounded-md">
                      {link.dropdown.map((dropLink) => (
                        <Link
                          key={dropLink.name}
                          to={dropLink.href}
                          className={`block px-4 py-2 text-[15px] font-poppins transition-colors ${
                            location.pathname === dropLink.href
                              ? "text-primary bg-[#222222]"
                              : "text-gray-300 hover:text-primary hover:bg-[#222222]"
                          }`}
                        >
                          {dropLink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right: Search Bar & Badge (Desktop) */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            {/* Search Bar */}
            <div className="flex items-center justify-between w-[160px] xl:w-[200px] h-[36px] px-4 border border-gray-400 rounded-full bg-transparent group focus-within:border-white transition-colors">
              <input
                type="text"
                placeholder="Search here"
                className="bg-transparent text-[#ffffff] w-full font-poppins font-normal text-[13px] outline-none placeholder-gray-400"
              />
              <img
                src="/src/assets/Image/NavBar/coolicon.svg"
                alt="Search"
                className="w-[14px] h-[14px] ml-2 opacity-70 group-focus-within:opacity-100 transition-opacity"
              />
            </div>

            {/* Lowest Price Badge */}
            <div className="">
              <img
                src="/src/assets/Image/NavBar/Lowest-Price-Logo.png"
                alt="Lowest Price Guarantee"
                className="w-[70px] xl:w-[85px] h-[70px] xl:h-[85px] object-contain"
              />
            </div>
          </div>

          {/* Mobile Right: Badge & Hamburger */}
          <div className="flex lg:hidden items-center space-x-4 z-50">
            {/* Lowest Price Badge on Mobile */}
            <img
              src="/src/assets/Image/NavBar/Lowest-Price-Logo.png"
              alt="Lowest Price"
              className="w-[55px] h-[55px] sm:w-[65px] sm:h-[65px] object-contain"
            />

            {/* Hamburger Button */}
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none p-2"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`lg:hidden absolute top-[100px] left-0 w-full bg-[#000000] border-b border-[#333333] transition-all duration-300 ease-in-out overflow-hidden shadow-2xl ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 py-6 flex flex-col space-y-4">
            {/* Mobile Search Bar */}
            <div className="flex items-center justify-between w-full h-[40px] px-4 border border-gray-400 rounded-full bg-transparent focus-within:border-white transition-colors mb-4">
              <input
                type="text"
                placeholder="Search here"
                className="bg-transparent text-[#ffffff] w-full font-poppins font-normal text-[14px] outline-none placeholder-gray-400"
              />
              <img
                src="/src/assets/Image/NavBar/coolicon.svg"
                alt="Search"
                className="w-[16px] h-[16px] ml-2 opacity-70"
              />
            </div>

            {/* Mobile Links */}
            {NavLinks.map((link, index) => (
              <div
                key={link.name}
                className="border-b border-[#222222] flex flex-col"
              >
                <div className="flex justify-between items-center pb-3">
                  <Link
                    to={link.href}
                    onClick={() => {
                      if (!link.dropdown) setIsOpen(false);
                    }}
                    className={`font-poppins font-normal text-[18px] transition duration-300 ${
                      location.pathname === link.href || (link.dropdown && link.dropdown.some(d => location.pathname === d.href))
                        ? "text-primary"
                        : "text-gray-300 hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="text-gray-300 hover:text-primary text-2xl leading-none px-2 focus:outline-none"
                    >
                      {activeDropdown === index ? "-" : "+"}
                    </button>
                  )}
                </div>
                {link.dropdown && activeDropdown === index && (
                  <div className="pl-4 pb-3 space-y-3 flex flex-col">
                    {link.dropdown.map((dropLink) => (
                      <Link
                        key={dropLink.name}
                        to={dropLink.href}
                        onClick={() => setIsOpen(false)}
                        className={`font-poppins text-[16px] transition duration-300 ${
                          location.pathname === dropLink.href
                            ? "text-primary"
                            : "text-gray-400 hover:text-primary"
                        }`}
                      >
                        {dropLink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
