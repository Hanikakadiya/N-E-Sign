import React from "react";
import { Link } from "react-router-dom";
export default function OurServices() {
  const servicesData = [
    {
      title: "Signage",
      description:
        "We provide custom signage solutions that improve visibility, enhance communication, and support your brand growth.",
      image: "/Image/Services/services-Signage.png",
    },
    {
      title: "Printing",
      description:
        "We provide printing solutions that enhance visibility, communicate your message clearly, and support your brand growth.",
      image: "/Image/Services/services-Printing.png",
    },
    {
      title: "Direct Mailing",
      description:
        "We provide direct mailing solutions that enhance reach, communicate your message clearly, and support your brand growth.",
      image: "/Image/Services/services-Direct Mailing.png",
    },
    {
      title: "Web Designing",
      description:
        "We provide web design solutions that enhance user experience, your message clearly, and support your brand growth.",
      image: "/Image/Services/services-Web Designing.png",
    },
    {
      title: "SEO",
      description:
        "We provide SEO solutions that improve search visibility, communicate your message clearly, and support your brand growth.",
      image: "/Image/Services/services-seo.png",
    },
  ];

  return (
    <section className="w-full bg-black py-24 md:py-32 relative overflow-hidden font-poppins">
      {/* Right side background glow */}

      {/* Right side SVG Ring Graphic */}
      <div className="absolute right-12 xl:right-32 top-[15%] -translate-y-1/2 opacity-70 hidden lg:block pointer-events-none">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-[var(--color-primary)]/40 blur-[100px] sm:blur-[150px] rounded-full pointer-events-none"></div>
        <svg viewBox="0 0 100 100" className="w-full h-auto">
          <defs>
            <pattern
              id="lines"
              width="100"
              height="4"
              patternUnits="userSpaceOnUse"
            >
              <line x1="0" x2="100" stroke="white" strokeWidth="0.2" />
            </pattern>
          </defs>
          <circle cx="50" cy="50" r="48" fill="url(#lines)" />
          <circle cx="50" cy="50" r="25" fill="black" />
        </svg>
        <div className="absolute top-[20px] right-[-40px] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/30 blur-[100px] md:blur-[130px] rounded-full pointer-events-none"></div>
      </div>
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24 relative z-10">
        <div className="max-w-5xl">
          {/* Subtitle */}
          <h3 className="text-primary text-[13px] font-semibold tracking-[0.2em] uppercase mb-6 flex items-center gap-2">
            Our Services
          </h3>

          {/* Main Title */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[55px] font-bold leading-[1.15] tracking-wide mb-8">
            <span className="text-primary">Customized Solutions</span>{" "}
            <span className="text-white">to Achieve Your Business Goals</span>
          </h2>

          {/* Description Paragraph */}
          <div className="pl-0 md:pl-16 lg:pl-14">
            <p className="text-gray-300 text-base md:text-lg lg:text-[22px] font-poppins leading-[1.3] max-w-3xl">
              We create customized printing solutions focused on achieving your
              business goals. From impactful designs to premium-quality
              materials, every print is thoughtfully crafted to strengthen your
              brand, communicate your message clearly, engage your audience, and
              deliver measurable results for your business
            </p>
          </div>
        </div>
      </div>

      {/* Services Cards Grid */}
      <div className="mt-20 flex flex-wrap justify-center gap-6">
        {servicesData.map((service, index) => (
          <Link
            to={`/services/${service.title.toLowerCase().replace(" ", "-")}`}
            key={index}
            className="block w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-16px)] p-[1px] bg-gradient-to-b from-transparent to-white transition-all duration-500 cursor-pointer group"
          >
            <div className="bg-[#050505] w-full h-full p-4 sm:p-5 flex flex-col">
              <div className="w-full h-[220px] rounded-xl overflow-hidden mb-6 relative shrink-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <h4 className="text-xl sm:text-[24px] font-bold text-white mb-3 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                {service.title}
              </h4>

              <p className="text-gray-300 text-[15px] font-normal leading-[1.6] mb-8 grow">
                {service.description}
              </p>

              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-[1px] bg-[#333] group-hover:bg-[var(--color-primary)] transition-colors duration-300"></div>
                <div className="flex items-center group-hover:translate-x-4 duration-300">
                  <span className="text-[var(--color-primary)] font-medium transition-all">
                    Read More
                  </span>
                  <svg
                    className="w-3.5 h-3.5 text-[var(--color-primary)] transition-transform ml-1 group-hover:translate-x-2 duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
