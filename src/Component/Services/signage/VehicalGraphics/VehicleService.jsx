import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import VehicleData from "../../../Data/VehicleGraphicsData.json";
import { Icons } from "../../../Icons/icons";
import { motion } from "framer-motion";

export default function VehicleService() {
  const { subCategory } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [subCategory]);

  if (subCategory) {
    const cardData = VehicleData.cards.find((c) => c.id === subCategory);

    if (!cardData || !cardData.modal) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-4">
          <h2 className="text-xl text-white">
            Page content is being updated...
          </h2>
          <button
            onClick={() => navigate("/services/signage/vehicle-graphics")}
            className="text-[var(--color-primary)] underline"
          >
            Go Back
          </button>
        </div>
      );
    }

    const { modal } = cardData;
    const mainImage = modal.images?.[0] || modal.image;
    const orbitalImage1 = modal.images?.[1];
    const orbitalImage2 = modal.images?.[2];

    return (
      <section className="min-h-screen font-poppins pb-20 pt-20 mt-12 relative overflow-hidden">
        {/* Subtle Glow Background */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#EAB308] opacity-[0.03] blur-[120px] rounded-full pointer-events-none"></div>

        {/* Hero Section */}
        <div className="max-w-[1392px] mx-auto px-4 md:px-12 relative z-10">
          {/* Back Button */}
          <button
            onClick={() => navigate("/services/signage/vehicle-graphics")}
            className="flex items-center text-white hover:text-[#EAB308] transition-colors mb-12"
          >
            <Icons.ArrowRight className="w-6 h-6 rotate-180" />
          </button>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-20">
            {/* Left Column: Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-[50%] max-w-[747px]"
            >
              {modal.tagline && (
                <span className="text-[#EAB308] text-xs font-bold tracking-widest uppercase mb-4 block">
                  {modal.tagline}
                </span>
              )}
              <h1 className="text-[32px] md:text-[38px] lg:text-[44px] font-bold leading-[1.2] mb-6 tracking-tight">
                {modal.title}
              </h1>
              <p className="text-[#a8a8a8] text-[14px] md:text-[15px] leading-relaxed">
                {modal.description}
              </p>
              {!modal.whiteCards && modal.buttonText && (
                <div className="mt-8">
                  <Link
                    to="/contact-us"
                    className="inline-block bg-[#EAB308] text-white font-bold py-3.5 px-8 rounded-full hover:bg-[#d9a007] transition-colors shadow-md text-[14px]"
                  >
                    {modal.buttonText}
                  </Link>
                </div>
              )}
            </motion.div>

            {/* Right Column: Orbital Layout */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full lg:w-[40%] relative flex flex-col justify-center items-center py-10 min-h-[350px] lg:min-h-[450px]"
            >
              {/* Main Image Card */}
              <div className="relative lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:-left-10 xl:-left-10 z-10 w-full max-w-[320px] h-auto lg:max-w-none lg:w-[320px] lg:h-[360px] xl:w-[350px] xl:h-[390px] rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center p-6 mx-auto lg:mx-0">
                <img
                  src={mainImage}
                  alt={modal.title}
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/600x400/eeeeee/999999?text=Vehicle+Image";
                  }}
                />
              </div>

              {/* The orbital circle / Mobile Grid Wrapper */}
              <div className="w-full max-w-[500px] lg:max-w-none mt-8 lg:mt-0 lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-[60%] xl:left-[55%] lg:-translate-x-1/2 lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] lg:rounded-full lg:border lg:border-white z-0 flex flex-col sm:flex-row lg:block justify-center items-center gap-6">
                {/* Top Yellow Dot */}
                <div className="hidden lg:block absolute top-0 left-1/2 w-7 h-7 rounded-full bg-[#EAB308] -translate-x-1/2 -translate-y-1/2 z-10 ring-8 ring-[#121212]"></div>

                {/* Bottom Yellow Dot */}
                <div className="hidden lg:block absolute bottom-0 left-1/2 w-7 h-7 rounded-full bg-[#EAB308] -translate-x-1/2 translate-y-1/2 z-10 ring-8 ring-[#121212]"></div>

                {/* Top Right Small Image */}
                {orbitalImage1 && (
                  <div className="relative lg:absolute lg:top-[14.6%] lg:right-[14.6%] w-full sm:w-1/2 lg:w-[150px] lg:h-[100px] xl:w-[350px] xl:h-[130px] aspect-[4/3] lg:aspect-auto rounded-2xl overflow-hidden shadow-2xl z-20 lg:translate-x-1/2 lg:-translate-y-1/2">
                    <img
                      src={orbitalImage1}
                      alt="Orbital 1"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Bottom Right Small Image */}
                {orbitalImage2 && (
                  <div className="relative lg:absolute lg:top-[80%] lg:right-[14.6%] w-full sm:w-1/2 lg:w-[150px] lg:h-[180px] xl:w-[180px] xl:h-[220px] aspect-[4/3] lg:aspect-auto rounded-2xl overflow-hidden shadow-2xl z-20 lg:translate-x-1/2 lg:-translate-y-1/2">
                    <img
                      src={orbitalImage2}
                      alt="Orbital 2"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Dynamic Content Sections */}
        {modal.whiteCards ? (
          <>
            <div className="max-w-[1000px] mx-auto px-4 md:px-8 space-y-12 relative z-10 mt-10">
              {modal.whiteCards.map((card, idx) => {
                const IconComponent = Icons[card.icon];

                const isImageLeft = card.imagePosition === "left";

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-[32px] overflow-hidden flex flex-col md:flex-row shadow-2xl"
                  >
                    {isImageLeft && (
                      <div className="w-full md:w-[45%] min-h-[300px] order-2 md:order-1">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}

                    <div
                      className={`w-full md:w-[55%] p-8 md:p-12 flex flex-col justify-center ${isImageLeft ? "order-1 md:order-2" : ""}`}
                    >
                      <div className="flex items-center gap-4 mb-6">
                        {card.icon === "Grid" ? (
                          <div className="grid grid-cols-2 gap-[2px] text-[#EAB308]">
                            <div className="w-3 h-3 border-[2px] border-current rounded-[2px]"></div>
                            <div className="w-3 h-3 border-[2px] border-current rounded-[2px]"></div>
                            <div className="w-3 h-3 border-[2px] border-current rounded-[2px]"></div>
                            <div className="w-3 h-3 border-[2px] border-current rounded-[2px]"></div>
                          </div>
                        ) : IconComponent ? (
                          <IconComponent className="w-8 h-8 text-[#EAB308]" />
                        ) : null}
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#111]">
                          {card.title}
                        </h2>
                      </div>

                      <div className="text-[#444] text-[14px] leading-relaxed space-y-5">
                        {card.intro && <p>{card.intro}</p>}

                        {card.paragraphs &&
                          card.paragraphs.map((p, i) => (
                            <p
                              key={i}
                              className={
                                !card.intro && i === 0 ? "text-[#333]" : ""
                              }
                            >
                              {p}
                            </p>
                          ))}

                        {card.bulletPoints &&
                          card.bulletPoints.map((bp, i) => (
                            <p key={i}>
                              <strong className="text-[#111] font-extrabold">
                                {bp.title}
                              </strong>{" "}
                              {bp.text}
                            </p>
                          ))}

                        {card.footerText && <p>{card.footerText}</p>}
                      </div>

                      {card.note && (
                        <div className="mt-8 border-l-[3px] border-[#EAB308] pl-5 py-1">
                          <p className="text-[#555] text-[13px] font-medium leading-relaxed">
                            {card.note}
                          </p>
                        </div>
                      )}
                    </div>

                    {!isImageLeft && (
                      <div className="w-full md:w-[45%] min-h-[300px]">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Section (White Card) */}
            {modal.ctaBanner && (
              <div className="max-w-[1500px] mx-auto px-4 md:px-8 relative z-10 mt-12 mb-20">
                <div className="bg-white rounded-[24px] p-8 md:px-12 md:py-10 flex flex-col md:flex-row items-center justify-between shadow-2xl gap-8">
                  <div className="text-[#111] text-center md:text-left">
                    <h3 className="text-xl md:text-2xl font-extrabold mb-2">
                      {modal.ctaBanner.title}
                    </h3>
                    <p className="text-[#666] text-[13px] font-medium">
                      {modal.ctaBanner.description}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8">
                    <span className="text-[#EAB308] font-extrabold text-[16px]">
                      {modal.ctaBanner.phone}
                    </span>
                    <Link
                      to="/contact-us"
                      className="bg-[#EAB308] text-white font-bold py-3.5 px-8 rounded-full hover:bg-[#d9a007] transition-colors shadow-md text-[14px] whitespace-nowrap"
                    >
                      {modal.ctaBanner.buttonText}
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          /* Fallback for other vehicle graphics subcategories */
          <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10 mt-10">
            {/* Features Section */}
            {modal.features && modal.features.length > 0 && (
              <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-3xl p-8 md:p-10 shadow-2xl mb-16">
                <div className="flex items-start gap-4 mb-8">
                  <div className="text-[#EAB308] mt-1">
                    <Icons.Star className="w-7 h-7" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold leading-tight text-white">
                    {modal.featuresTitle || "Key Features"}
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {modal.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 bg-[#222] py-4 px-6 rounded-xl border border-[#333]"
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-[#EAB308] flex-shrink-0"></div>
                      <span className="text-gray-300 text-[14px] font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Options Sections (Ideal For / Benefits) */}
            {modal.options && modal.options.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {modal.options.map((option, idx) => {
                  const OptIcon = Icons[option.icon] || Icons.Check;
                  return (
                    <div
                      key={idx}
                      className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-3xl p-8 md:p-10 shadow-2xl"
                    >
                      <div className="flex items-start gap-4 mb-8">
                        <div className="text-[#EAB308] mt-1 bg-[#EAB308]/10 p-2.5 rounded-xl">
                          <OptIcon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white mt-1">
                          {option.title}
                        </h3>
                      </div>
                      <ul className="space-y-4">
                        {option.list.map((item, i) => (
                          <li key={i} className="flex items-center gap-4">
                            <div className="w-2 h-2 rounded-full bg-[#EAB308] flex-shrink-0"></div>
                            <span className="text-gray-300 text-[14px]">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Footer CTA */}
            {modal.buttonText && (
              <div className="bg-[#EAB308] rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between shadow-2xl gap-8">
                <div className="text-black text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    Ready to Get Started?
                  </h3>
                  <p className="text-black/80 text-[15px] font-semibold">
                    {modal.footerText}
                  </p>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <Link
                    to="/contact-us"
                    className="bg-black text-white font-bold py-4 px-10 rounded-full hover:bg-gray-900 transition-colors shadow-xl text-[14px]"
                  >
                    {modal.buttonText}
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}
      </section>
    );
  }

  // Parent Category Page rendering
  return (
    <section className="bg-[#121212] py-20 px-4 md:px-8 font-poppins text-white min-h-screen mt-12 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            {VehicleData.header.title}
          </h2>
          <p className="text-gray-300 text-[15px] md:text-[16px] max-w-3xl mx-auto leading-relaxed mb-6">
            {VehicleData.header.description}
          </p>
          <div className="w-20 h-1 bg-[#EAB308] rounded-full"></div>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {VehicleData.cards.map((card, idx) => (
            <Link
              key={idx}
              to={`/services/signage/vehicle-graphics/${card.id}`}
              className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-[340px] group cursor-pointer block hover:-translate-y-2"
            >
              <div className="flex-1 w-full bg-gray-200 overflow-hidden relative">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/600x400/eeeeee/999999?text=Vehicle+Image";
                  }}
                />
              </div>
              <div className="bg-[#1a1a1a] p-5 flex items-center h-[70px] border-t border-[#2a2a2a]">
                <h3 className="font-bold text-white text-[16px] group-hover:text-[#EAB308] transition-colors">
                  {card.title}
                </h3>
              </div>
            </Link>
          ))}

          {/* CTA Box */}
          <div className="bg-[#EAB308] rounded-2xl lg:col-span-2 flex flex-col items-center justify-center p-8 sm:p-10 text-center shadow-lg h-[340px]">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-black">
              {VehicleData.cta.title}
            </h3>
            <p className="text-black/80 font-semibold text-[15px] mb-8 max-w-md">
              {VehicleData.cta.description}
            </p>
            <Link
              to="/contact"
              className="bg-black text-white font-bold py-3.5 px-8 rounded-full hover:bg-gray-900 transition-colors shadow-xl text-[14px]"
            >
              {VehicleData.cta.buttonText}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
