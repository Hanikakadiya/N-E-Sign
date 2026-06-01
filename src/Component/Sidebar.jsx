import React from "react";
import { Link } from "react-router-dom";
import { Icons } from "./Icons/icons";

export default function Sidebar({ title, links, activeId, backLink = "/services/signage/exterior-sign" }) {
  return (
    <div className="w-full lg:w-[280px] xl:w-[320px] flex-shrink-0 lg:sticky lg:top-[100px] lg:left-0 lg:h-[calc(100vh-100px)] self-start overflow-y-auto custom-scrollbar px-4 lg:px-8 py-8 lg:border-r border-[#222] bg-[#0a0a0a] z-40">
      {title && (
        <h2 className="text-[var(--color-primary)] text-2xl lg:text-[24px] font-bold mb-6 ml-5">
          {title}
        </h2>
      )}
      <div className="flex flex-col gap-2">
        {links?.map((link) => (
          <Link
            key={link.id}
            to={`?tab=${link.id}`}
            className={`text-left px-4 py-3 rounded-md text-[15px] font-medium transition-colors ${
              link.id === activeId
                ? "bg-[#2a2a2a] text-white"
                : "text-gray-400 hover:text-white hover:bg-[#1a1a1a]"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {backLink && (
        <Link
          to={backLink}
          className="mt-8 flex items-center justify-center gap-2 px-6 py-2 border border-[var(--color-primary)] text-[var(--color-primary)] rounded-full text-sm font-medium hover:bg-white/5 w-max group"
        >
          <span className="inline-block animate-[bounce-x_1.5s_infinite_reverse]">
            <Icons.ArrowRight className="w-4 h-4 rotate-180" />
          </span>{" "}
          Go Back
        </Link>
      )}
    </div>
  );
}
