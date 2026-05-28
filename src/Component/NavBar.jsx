import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// Container import removed; layout handled inline
import { Icons } from "./Icons/icons";
import { Icon } from "@iconify/react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);

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

  const toggleSubDropdown = (name) => {
    if (activeSubDropdown === name) {
      setActiveSubDropdown(null);
    } else {
      setActiveSubDropdown(name);
    }
  };

  const NavLinks = [
    { name: "Home", href: "/" },
    {
      name: "Services",
      href: "/services",
      dropdown: [
        {
          name: "Signage",
          href: "/services/signage",
          icon: Icons.Signage,
          subItems: [
            {
              name: "Exterior Sign",
              href: "/services/signage/exterior-sign",
              icon: Icons.ExteriorSign,
            },
            {
              name: "Interior Sign",
              href: "/services/signage/interior-sign",
              icon: Icons.InteriorSign,
            },
            {
              name: "LED Digital Board",
              href: "/services/signage/digital-board",
              icon: Icons.DigitalBoard,
            },
            {
              name: "LED Neon Sign",
              href: "/services/signage/neon-sign",
              icon: Icons.NeonSign,
            },
            {
              name: "Window & Wall Graphics",
              href: "/services/signage/window-wall-graphics",
              icon: Icons.WallGraphics,
            },
            {
              name: "Vehical Graphics",
              href: "/services/signage/vehicle-graphics",
              icon: Icons.VehicleGraphics,
            },
          ],
        },
        { name: "Printing", href: "/services/printing", icon: Icons.Printing },
        {
          name: "Direct Mailing",
          href: "/services/direct-mailing",
          icon: Icons.DirectMailing,
        },
        {
          name: "Web Designing",
          href: "/services/web-designing",
          icon: Icons.WebDesigning,
        },
        { name: "SEO", href: "/services/seo", icon: Icons.SEO },
      ],
    },
    { name: "Apparel", href: "/apparel" },
    { name: "Promotional products", href: "/promotional-products" },
    { name: "Our work", href: "/our-work" },
    { name: "Contact us", href: "/contact" },
  ];

  return (
    <>
      <nav className="fixed w-full h-[100px] z-50 top-0 left-0 border-b border-[#333333] backdrop-blur-sm">
        <div className="flex items-center justify-between max-w-[1720px] mx-auto w-full h-full px-4">
          {/* Left: Logo */}
          <div className=" z-50">
            <Link to="/">
              <img
                src="/Image/NavBar/NE_Sign_Logo.png"
                alt="NE-Sign Logo"
                className="w-[155px] h-auto object-contain"
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
                    location.pathname === link.href ||
                    (link.dropdown &&
                      link.dropdown.some((d) => location.pathname === d.href))
                      ? "text-[var(--color-primary)]"
                      : "hover:text-[var(--color-primary)]"
                  }`}
                >
                  {link.name}{" "}
                  {link.dropdown && <span className="text-sm">+</span>}
                </Link>
                {link.dropdown && (
                  <div className="absolute left-0 top-full pt-6 hidden group-hover:block z-50">
                    <div className="border border-[#333] shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-2 rounded-[20px] flex flex-col gap-1 w-[260px] xl:w-[280px] bg-[#000000]">
                      {link.dropdown.map((dropLink) => {
                        const isActive = location.pathname === dropLink.href;

                        return (
                          <div
                            key={dropLink.name}
                            className="relative group/subitem"
                          >
                            <Link
                              to={dropLink.href}
                              className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-900 ${
                                isActive
                                  ? "bg-[var(--color-primary)] text-black"
                                  : "text-white hover:bg-[#1a1a1a]"
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                {dropLink.icon && (
                                  <dropLink.icon
                                    className={`text-[20px] ${isActive ? "text-black" : "text-white"}`}
                                  />
                                )}
                                <span className="text-[15px] font-medium font-poppins">
                                  {dropLink.name}
                                </span>
                              </div>
                              {dropLink.subItems && (
                                <Icons.ChevronRight
                                  className={`w-4 h-4 ${isActive ? "text-black" : "text-gray-400"}`}
                                />
                              )}
                            </Link>

                            {/* Cascading Pop-out Menu for Sub Items */}
                            {dropLink.subItems && (
                              <div className="absolute left-full top-0 ml-2 hidden group-hover/subitem:block w-[280px] xl:w-[300px]">
                                <div className="border border-[#333] shadow-2xl p-2 rounded-[20px] flex flex-col gap-1 bg-[#000000]">
                                  {dropLink.subItems.map((subItem) => {
                                    const isSubActive =
                                      location.pathname === subItem.href;
                                    return (
                                      <Link
                                        key={subItem.name}
                                        to={subItem.href}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group/sub ${
                                          isSubActive
                                            ? "bg-[var(--color-primary)] text-black font-semibold"
                                            : "text-white hover:bg-[#333333]"
                                        }`}
                                      >
                                        {subItem.icon && (
                                          <subItem.icon
                                            className={`text-[20px] ${isSubActive ? "text-black" : "group-hover/sub:text-white"}`}
                                          />
                                        )}
                                        <span className="text-[15px] font-poppins">
                                          {subItem.name}
                                        </span>
                                      </Link>
                                    );
                                  })}
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right: Search Bar & Badge (Desktop) */}
          <div className="hidden xl:flex items-center space-x-4 xl:space-x-8">
            {/* Search Bar */}
            <div className="flex items-center justify-between w-[160px] xl:w-[200px] h-[36px] px-4 border border-gray-400 rounded-full bg-transparent group focus-within:border-white transition-colors">
              <input
                type="text"
                placeholder="Search here"
                className="bg-transparent text-[#ffffff] w-full font-poppins font-normal text-[13px] outline-none placeholder-gray-400"
              />
              <Icons.Search color="white" className="ml-2" />
            </div>
            <Icons.Profile color="white" />
            {/* Lowest Price Badge */}
            <div className="">
              <img
                src="/Image/NavBar/Lowest-Price-Logo.png"
                alt="Lowest Price Guarantee"
                className="w-[97px] object-contain"
              />
            </div>
          </div>

          {/* Mobile Right: Badge & Hamburger */}
          <div className="flex xl:hidden items-center space-x-4 z-50">
            {/* Lowest Price Badge on Mobile */}
            <img
              src="/Image/NavBar/Lowest-Price-Logo.png"
              alt="Lowest Price"
              className="w-[55px] h-[55px] sm:w-[65px] sm:h-[65px] object-contain"
            />

            {/* Hamburger Button */}
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-[var(--color-primary)] focus:outline-none p-2"
            >
              <Icons.MenuIcon className="w-10 h-10" />
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
                src="/Image/NavBar/coolicon.svg"
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
                      location.pathname === link.href ||
                      (link.dropdown &&
                        link.dropdown.some((d) => location.pathname === d.href))
                        ? "text-[var(--color-primary)]"
                        : "text-gray-300 hover:text-[var(--color-primary)]"
                    }`}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="text-gray-300 hover:text-[var(--color-primary)] text-2xl leading-none px-2 focus:outline-none"
                    >
                      {activeDropdown === index ? "-" : "+"}
                    </button>
                  )}
                </div>
                {link.dropdown && activeDropdown === index && (
                  <div className="pl-4 pb-3 space-y-3 flex flex-col">
                    {link.dropdown.map((dropLink) => (
                      <div key={dropLink.name} className="flex flex-col">
                        <div className="flex justify-between items-center">
                          <Link
                            to={dropLink.href}
                            onClick={() => {
                              if (!dropLink.subItems) setIsOpen(false);
                            }}
                            className={`font-poppins text-[16px] transition duration-300 ${
                              location.pathname === dropLink.href
                                ? "text-[var(--color-primary)]"
                                : "text-gray-400 hover:text-[var(--color-primary)]"
                            }`}
                          >
                            {dropLink.name}
                          </Link>
                          {dropLink.subItems && (
                            <button
                              onClick={() => toggleSubDropdown(dropLink.name)}
                              className="text-gray-400 hover:text-[var(--color-primary)] text-2xl leading-none px-2 focus:outline-none"
                            >
                              {activeSubDropdown === dropLink.name ? "-" : "+"}
                            </button>
                          )}
                        </div>

                        {/* Nested Sub Items for Mobile */}
                        {dropLink.subItems && activeSubDropdown === dropLink.name && (
                          <div className="pl-4 pt-2 pb-1 space-y-3 flex flex-col border-l border-[#333333] mt-2">
                            {dropLink.subItems.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                onClick={() => setIsOpen(false)}
                                className={`font-poppins text-[14px] transition duration-300 ${
                                  location.pathname === subItem.href
                                    ? "text-[var(--color-primary)]"
                                    : "text-gray-500 hover:text-[var(--color-primary)]"
                                }`}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
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
