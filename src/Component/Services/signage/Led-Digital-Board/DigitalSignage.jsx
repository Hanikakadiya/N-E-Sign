import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Icons } from "../../../Icons/icons";
import DigitalSignageData from "../../../Data/DigitalSignageData.json";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function DigitalSignage() {
  const { subCategory } = useParams();
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState(null);

  // Sync state with URL parameter
  useEffect(() => {
    if (subCategory) {
      const card = DigitalSignageData.find((s) => s.href.endsWith(subCategory));
      if (card) {
        setSelectedCard(card);
      }
    } else {
      setSelectedCard(null);
    }
  }, [subCategory]);

  const handleCloseModal = () => {
    setSelectedCard(null);
    navigate("/services/signage/digital-board");
  };

  const handleOpenModal = (card) => {
    setSelectedCard(card);
    navigate(card.href);
  };

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedCard) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedCard]);

  return (
    <section className="relative w-full min-h-screen overflow-hidden px-4 md:px-8 lg:px-16 font-poppins">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-5 relative z-10"
      >
        <h1 className="text-3xl md:text-[48px] leading-tight font-bold my-3">
          Digital Signage Solutions for Every
          <br className="hidden md:block" /> Industry
        </h1>
        <p className="text-gray-400 text-sm md:text-[16px] max-w-4xl mx-auto leading-relaxed">
          Transform your space, engage your audience, and communicate with
          impact using our industry-leading LED and digital display solutions.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 relative z-10"
      >
        {DigitalSignageData.map((card, idx) => (
          <div
            key={idx}
            onClick={() => handleOpenModal(card)}
            className={`group block bg-white rounded-[20px] p-6 md:p-5 transition-all duration-300 cursor-pointer flex flex-col hover:-translate-y-2 hover:shadow-xl ${card.hoverBg || ""}`}
          >
            <div
              className={`mb-6 h-[40px] flex items-center transition-colors duration-300 ${card.iconColor || "text-gray-500"} group-hover:text-white`}
            >
              
              {card.icon && Icons[card.icon] ? (
                React.createElement(Icons[card.icon], { className: "w-9 h-9" })
              ) : (
                <div className={`w-9 h-9 rounded-md bg-gray-200`}></div>
              )}
            </div>

            <h3 className="text-[#1a1a1a] group-hover:text-white text-[20px] font-bold mb-1 transition-colors duration-300">
              {card.title}
            </h3>

            <p className="text-gray-400 group-hover:text-white/80 text-[12px] font-medium mb-4 transition-colors duration-300">
              {card.subtitle}
            </p>

            <p className="text-gray-500 group-hover:text-white text-[13px] leading-relaxed mb-8 transition-colors duration-300">
              {card.description}
            </p>

            <div className="flex items-center text-[#2472FC] group-hover:text-white font-semibold text-[13px] group-hover:gap-3 gap-2 transition-all duration-300 mt-auto">
              Learn More <Icons.ArrowRight className="w-4 h-4" />
            </div>
          </div>
        ))}
      </motion.div>

      {/* Dynamic Popup Modal */}
      {selectedCard && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-sm animate-fade-in">
          <div
            className="bg-white w-full max-w-6xl max-h-[95vh] rounded-[24px] overflow-hidden flex flex-col md:flex-row relative shadow-2xl animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
            >
              <Icons.Close className="w-4 h-4" />
            </button>

            {/* Left Image Section */}
            <div className="hidden md:block w-[40%] relative">
              <img
                src={
                  selectedCard.modal?.image || "/Image/signage/church-modal.png"
                }
                alt={selectedCard.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/Image/signage/Digital-Board-03.png"; // Fallback
                }}
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>

            {/* Right Content Section */}
            <div className="w-full md:w-[60%] p-6 lg:p-10 flex flex-col justify-center">
              {/* Tagline */}
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-8 h-[2px]"
                  style={{ backgroundColor: selectedCard.themeColor }}
                ></div>
                <span
                  className="text-[11px] font-bold tracking-widest uppercase"
                  style={{ color: selectedCard.themeColor }}
                >
                  {selectedCard.modal?.tagline ||
                    `${selectedCard.title} DIGITAL LED SIGNS`}
                </span>
              </div>

              {/* Title */}
              <h2
                className="text-2xl md:text-[34px] font-extrabold mb-3 leading-tight tracking-tight"
                style={{ color: selectedCard.themeColor }}
              >
                {selectedCard.modal?.title ||
                  `Inspire, Inform & Grow Your ${selectedCard.title}.`}
              </h2>

              <p className="text-gray-500 text-[13px] leading-relaxed mb-5">
                {selectedCard.modal?.description || selectedCard.description}
              </p>

              {/* Features Box - Only render if features array exists */}
              {selectedCard.modal?.features &&
                selectedCard.modal.features.length > 0 && (
                  <div
                    className="rounded-xl p-5 mb-5 border"
                    style={{
                      backgroundColor: `${selectedCard.themeColor}0A`,
                      borderColor: `${selectedCard.themeColor}20`,
                    }}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <div style={{ color: selectedCard.themeColor }}>
                        {selectedCard.icon && Icons[selectedCard.icon] ? (
                          React.createElement(Icons[selectedCard.icon], {
                            className: "w-5 h-5",
                          })
                        ) : (
                          <Icons.Check className="w-5 h-5" />
                        )}
                      </div>
                      <h4 className="font-bold text-[#1a1a1a] text-[15px]">
                        {selectedCard.modal?.featuresTitle ||
                          `Why Choose Digital LED Signs for ${selectedCard.title}`}
                      </h4>
                    </div>

                    <ul className="space-y-2">
                      {selectedCard.modal.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Icons.Check
                            className="w-4 h-4 mt-0.5 shrink-0"
                            style={{ color: selectedCard.themeColor }}
                          />
                          <span className="text-gray-600 text-[13px]">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              {/* Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {(selectedCard.modal?.options || []).map((opt, i) => {
                  const OptIcon =
                    opt.icon && Icons[opt.icon] ? Icons[opt.icon] : Icons.Check;
                  return (
                    <div
                      key={i}
                      className="rounded-xl p-5 border hover:shadow-md transition-shadow"
                      style={{
                        backgroundColor: `${selectedCard.themeColor}08`,
                        borderColor: `${selectedCard.themeColor}20`,
                      }}
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <div style={{ color: selectedCard.themeColor }}>
                          <OptIcon className="w-6 h-6" />
                        </div>
                        <h5 className="font-bold text-[#1a1a1a] text-[14px]">
                          {opt.title}
                        </h5>
                      </div>

                      {opt.description && (
                        <p className="text-gray-500 text-[12px] leading-relaxed">
                          {opt.description}
                        </p>
                      )}

                      {opt.list && (
                        <ul className="space-y-3">
                          {opt.list.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Icons.Check
                                className="w-4 h-4 mt-0.5 shrink-0"
                                style={{ color: selectedCard.themeColor }}
                              />
                              <span className="text-gray-600 text-[13px]">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Action Button */}
              <Link
                to="/contact"
                className="w-full text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg shadow-black/10 text-[14px]"
                style={{ backgroundColor: selectedCard.themeColor }}
              >
                {selectedCard.modal?.buttonText ||
                  `Get a custom ${selectedCard.title.toLowerCase()} LED sign quote`}
                <Icons.ArrowRight className="w-4 h-4" />
              </Link>

              <p className="text-center text-gray-400 text-[11px] mt-3">
                {selectedCard.modal?.footerText ||
                  "Boost your engagement with vibrant LED displays."}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
