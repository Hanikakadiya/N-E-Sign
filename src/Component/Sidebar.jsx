import React from "react";
import { Link } from "react-router-dom";
import { Icons } from "./Icons/icons";

export default function Sidebar({ title, links, activeId, backLink = "/services/signage/exterior-sign" }) {
  return (
    <div className="w-full lg:w-[280px] xl:w-[320px] flex-shrink-0 lg:sticky lg:top-[100px] lg:left-0 lg:h-[calc(100vh-100px)] self-start overflow-y-auto custom-scrollbar px-4 lg:px-8 py-8 lg:border-r border-[#222] bg-[#0a0a0a] z-40">
      


      {title && (
        <h2 className="text-[var(--color-primary)] text-2xl lg:text-[24px] font-bold mb-6 ml-4">
          {title}
        </h2>
      )}
      <div className="flex flex-col gap-2">
        {links?.map((link) => (
          <Link
            key={link.id}
            to={link.href || "#"}
            className={`text-left px-4 py-3 rounded-2xl text-[15px] font-medium transition-colors ${
              link.id === activeId
                ? "bg-[#1f1f1f] text-[var(--color-primary)]"
                : "text-[#a3a3a3] hover:text-white hover:bg-[#1a1a1a]"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {backLink && (
        <Link
          to={backLink}
          className="flex items-center justify-center gap-2 border border-[var(--color-primary)] text-[var(--color-primary)] px-6 py-3 rounded-full text-[16px] font-semibold hover:bg-[var(--color-primary)] hover:text-black transition-colors mt-12 w-fit group"
        >
          <span className="inline-block group-hover:-translate-x-1 transition-transform">
            <Icons.ArrowRight className="w-4 h-4 rotate-180" />
          </span>
          Go Back
        </Link>
      )}
    </div>
  );
}
