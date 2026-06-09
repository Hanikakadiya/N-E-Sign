import React from "react";
import { Link } from "react-router-dom";
import { Icons } from "./Icons/icons";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-black font-poppins pt-30">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row justify-between items-center pb-8 border-b border-[#222222]"
        >
          {/* Logo */}
          <Link to="/">
            <img
              src="/Image/NavBar/NE_Sign_Logo.png"
              alt="N.E Signs Logo"
              className="w-[180px] h-auto object-contain"
            />
          </Link>

          {/* Social Links */}
          <div className="flex items-center gap-4 mt-6 sm:mt-0">
            <a
              href="https://www.facebook.com/"
              className="flex items-center gap-2 text-sm text-[var(--color-gray)] hover:text-[var(--color-primary)] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.Facebook className="w-5 h-5" />
              Facebook
            </a>
            <a
              href="https://in.pinterest.com/"
              className="flex items-center gap-2 text-sm text-[var(--color-gray)] hover:text-[var(--color-primary)] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.Pinterest className="w-5 h-5" />
              Pinterest
            </a>
            <a
              href="https://www.linkedin.com/"
              className="flex items-center gap-2 text-sm text-[var(--color-gray)] hover:text-[var(--color-primary)] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.LinkedIn className="w-5 h-5" />
              Linkedin
            </a>
          </div>
        </motion.div>

        {/* Middle Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-5 gap-8 lg:gap-6 xl:gap-12 py-16 border-b border-[#222222]"
        >
          {/* Column 1: Let's Work Together */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2 xl:col-span-1 flex flex-col items-center lg:items-start pr-0 lg:pr-6 xl:pr-8 lg:border-r border-[#222222] mb-10 lg:mb-0 w-full">
            <h2 className="text-[40px] lg:text-[32px] xl:text-[40px] font-bold leading-none mb-2 tracking-wide text-center lg:text-left">
              LET'S WORK
            </h2>
            <h3 className="text-[22px] font-medium tracking-[0.1em] uppercase mb-8 text-center lg:text-left">
              Together
            </h3>
            <a
              href="mailto:nesignsinc@gmail.com"
              className="inline-flex items-center justify-center gap-3 xl:gap-4 px-6 py-3 xl:px-6 xl:py-3 rounded-full border border-[#333] transition-colors group hover:bg-white/5"
            >
              <span className="text-[14px] text-[var(--color-gray)] group-hover:text-white transition-colors whitespace-nowrap">
                nesignsinc@gmail.com
              </span>
              <Icons.ArrowUpRight className="w-4 h-4 transition-colors shrink-0" />
            </a>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[16px] font-semibold text-[var(--color-primary)] mb-2">
              Quick Links
            </h4>
            <Link
              to="/"
              className="text-[14px] hover:text-[var(--color-primary)] transition-colors"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-[14px] hover:text-[var(--color-primary)] transition-colors"
            >
              Services
            </Link>
            <Link
              to="/apparel"
              className="text-[14px] hover:text-[var(--color-primary)] transition-colors"
            >
              Apparel
            </Link>
            <Link
              to="/promotional-products"
              className="text-[14px] hover:text-[var(--color-primary)] transition-colors leading-tight"
            >
              Promotional <br className="hidden lg:block xl:hidden" /> Products
            </Link>
            <Link
              to="/our-work"
              className="text-[14px] hover:text-[var(--color-primary)] transition-colors"
            >
              Our Work
            </Link>
            <Link
              to="/contact"
              className="text-[14px] hover:text-[var(--color-primary)] transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Column 3: Our Services */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[16px] font-semibold text-[var(--color-primary)] mb-2">
              Our Services
            </h4>
            <Link
              to="/services/signage"
              className="text-[14px] hover:text-[var(--color-primary)] transition-colors"
            >
              Signage
            </Link>
            <Link
              to="/services/printing"
              className="text-[14px] hover:text-[var(--color-primary)] transition-colors"
            >
              Printing
            </Link>
            <Link
              to="/services/direct-mailing"
              className="text-[14px] hover:text-[var(--color-primary)] transition-colors"
            >
              Direct Mailing
            </Link>
            <Link
              to="/services/web-designing"
              className="text-[14px] hover:text-[var(--color-primary)] transition-colors"
            >
              Web Designing
            </Link>
            <Link
              to="/services/seo"
              className="text-[14px] hover:text-[var(--color-primary)] transition-colors"
            >
              SEO
            </Link>
          </div>

          {/* Column 4: All Signages */}
          <div className="flex flex-col gap-4 ">
            <h4 className="text-[16px] font-semibold text-[var(--color-primary)] mb-2">
              All Signages
            </h4>
            <Link
              to="/services/signage/exterior-sign"
              className="text-[14px] hover:text-[var(--color-primary)] transition-colors"
            >
              Exterior Signs
            </Link>
            <Link
              to="/services/signage/interior-sign"
              className="text-[14px] hover:text-[var(--color-primary)] transition-colors"
            >
              Interior Signs
            </Link>
            <Link
              to="/services/signage/led-digital-board"
              className="text-[14px] hover:text-[var(--color-primary)] transition-colors"
            >
              LED Digital Boards
            </Link>
            <Link
              to="/services/signage/led-neon-sign"
              className="text-[14px] hover:text-[var(--color-primary)] transition-colors"
            >
              LED Neon Signs
            </Link>
            <Link
              to="/services/signage/window-wall-graphics"
              className="text-[14px] hover:text-[var(--color-primary)] transition-colors leading-tight"
            >
              Window & Wall <br className="hidden lg:block xl:hidden" />{" "}
              Graphics
            </Link>
            <Link
              to="/services/signage/vehicle-graphics"
              className="text-[14px] hover:text-[var(--color-primary)] transition-colors"
            >
              Vehicle Graphics
            </Link>
          </div>

          {/* Column 5: Contact Details */}
          <div className="md:col-span-3 lg:col-span-1 flex flex-col items-center lg:items-start gap-6 xl:pl-4 mt-8 lg:mt-0">
            <h4 className="text-[16px] font-semibold text-[var(--color-primary)] mb-0 text-center lg:text-left">
              Contact Details
            </h4>
            <div className="flex items-start justify-center lg:justify-start gap-4">
              <Icons.Location className="w-5 h-5 mt-1 flex-shrink-0" />
              <span className="text-[14px] leading-relaxed uppercase">
                2223 OGDEN AVE #B <br className="hidden lg:block xl:hidden" />{" "}
                LISLE, IL 60515
              </span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <Icons.Phone className="w-5 h-5 flex-shrink-0" />
              <span className="text-[14px] uppercase leading-relaxed">
                630-454-SIGN <br className="hidden lg:block xl:hidden" /> (7446)
              </span>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="py-8 flex flex-col sm:flex-row justify-between justify-center items-center gap-4"
        >
          <p className="text-[13px] text-[var(--color-gray)]">
            ©2026{" "}
            <span className="text-[var(--color-primary)] font-semibold">
              N.E SIGNS
            </span>{" "}
            All Rights Reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
