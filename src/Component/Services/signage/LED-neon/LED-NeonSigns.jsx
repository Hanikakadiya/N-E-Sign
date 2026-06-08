import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { LuCheck, LuMessageCircle, LuPenTool } from "react-icons/lu";
import { Icons } from "../../../Icons/icons";

const COLORS = [
  { id: "pink", hex: "#ff007f" },
  { id: "cyan", hex: "#00f0ff" },
  { id: "yellow", hex: "#ffea00" },
  { id: "purple", hex: "#b026ff" },
  { id: "green", hex: "#00ff66" },
  { id: "orange", hex: "#ff7700" },
  { id: "blue", hex: "#0077ff" },
];

const FONTS = [
  { id: "modernist", name: "MODERNIST", family: "'Montserrat', sans-serif" },
  { id: "artisan", name: "Artisan", family: "'Dancing Script', cursive" },
  { id: "elegance", name: "Elegance", family: "'Great Vibes', cursive" },
];

const BACKGROUNDS = [
  { id: "dark-brick", url: "/Image/signage/LED-Neon-04.png" },
  { id: "white-brick", url: "/Image/signage/Interior-sign-02.png" },
  {
    id: "living-room",

    url: "/Image/InteriorSigns/InteriorSigns-CorporateBranding.jpg",
  },
  {
    id: "bedroom",
    url: "/Image/InteriorSigns/InteriorSigns-CustomCanvaPrints.jpg",
  },
  { id: "gaming", url: "/Image/signage/Exterior-sign-01.png" },
  {
    id: "bar",
    url: "/Image/InteriorSigns/MenuBoard/ModernMenu-CoffeeMenu.png",
  },
  {
    id: "office",
    url: "/Image/InteriorSigns/InteriorSigns-WayfindingSign.jpg",
  },
  { id: "party", url: "/Image/InteriorSigns/InteriorSigns-StepandRepeat.jpg" },
];

const SIZES = [
  { id: "mini", name: "Mini", length: '16.5"', height: "--", price: "$84" },
  { id: "small", name: "Small", length: '25"', height: "--", price: "$118" },
  { id: "large", name: "Large", length: '38"', height: "--", price: "$170" },
  { id: "xxl", name: "XX Large", length: '64"', height: "--", price: "$211" },
  { id: "xs", name: "Extra Small", length: '20"', height: "--", price: "$211" },
];

const BACKBOARDS = [
  { id: "cut-around", name: "Cut Around", price: "FREE" },
  { id: "rectangle", name: "Rectangle", price: "FREE" },
  { id: "cut-to-letter", name: "Cut-To-Letter", price: "+$39" },
  { id: "naked-neon", name: "Naked Neon", price: "+$62" },
  { id: "acrylic-stand", name: "Acrylic Stand", price: "+$62" },
  { id: "open-box", name: "Open Box", price: "+$116" },
];

const BACKBOARD_COLORS = [
  { id: "clear", name: "Clear", hex: "transparent" },
  { id: "white", name: "White", hex: "#ffffff" },
  { id: "black", name: "Black", hex: "#000000" },
];

export default function LEDNeonSigns() {
  const [text, setText] = useState("Create");
  const [textColor, setTextColor] = useState(COLORS[0].hex);
  const [glowColor, setGlowColor] = useState(COLORS[0].hex);
  const [font, setFont] = useState(FONTS[1]);
  const [bgImage, setBgImage] = useState(BACKGROUNDS[0]);
  // Static UI theme color (so changing neon color doesn't affect the entire interface)
  const themeColor = "var(--color-primary)";
  const [activeTab, setActiveTab] = useState("SIZE");
  const [selectedSize, setSelectedSize] = useState(SIZES[3]);
  const [selectedBackboard, setSelectedBackboard] = useState(BACKBOARDS[0]);
  const [selectedBbColor, setSelectedBbColor] = useState(BACKBOARD_COLORS[0]);
  const [selectedEffects, setSelectedEffects] = useState(null);
  const [selectedLedKit, setSelectedLedKit] = useState(null);

  const textInputRef = useRef(null);

  useEffect(() => {
    if (activeTab === "TEXT" && textInputRef.current) {
      textInputRef.current.focus();
    }
  }, [activeTab]);

  const getCalculatedFontSize = () => {
    if (!selectedSize) return 120;
    switch (selectedSize.id) {
      case "mini":
        return 60;
      case "xs":
        return 75;
      case "small":
        return 90;
      case "large":
        return 120;
      case "xxl":
        return 180;
      default:
        return 120;
    }
  };

  const getNeonStyle = () => {
    return {
      color: textColor || "#ffffff",
      fontFamily: font?.family || "'Inter', sans-serif",
      fontSize: `${getCalculatedFontSize()}px`,
      textShadow: glowColor
        ? `
        0 0 5px #fff,
        0 0 10px #fff,
        0 0 20px ${glowColor},
        0 0 40px ${glowColor},
        0 0 80px ${glowColor},
        0 0 90px ${glowColor},
        0 0 100px ${glowColor},
        0 0 150px ${glowColor}
      `
        : "none",
    };
  };

  const SIDEBAR_TABS = [
    { id: "TEXT", label: "TEXT", icon: Icons.neonText },
    { id: "COLOR", label: "COLOR", icon: Icons.neonColor },
    { id: "FONT", label: "FONT", icon: Icons.neonFont },
    { id: "SIZE", label: "SIZE", icon: Icons.neonSize },
    { id: "BACKBOARD", label: "BACK\nBOARD", icon: Icons.neonBackboard },
    { id: "BACKGROUND", label: "BACKGR\nOUND", icon: Icons.neonBackground },
    { id: "EFFECTS", label: "SPECIAL\nEFFECTS", icon: Icons.neonEffects },
    { id: "LEDKIT", label: "LED KIT", icon: Icons.neonLedKit },
  ];

  return (
    <div
      className="flex w-full bg-black overflow-hidden pt-[80px] md:pt-[100px] font-['Inter',sans-serif]"
      style={{ height: "calc(100vh)" }}
    >
      <style>{`
        @keyframes neonRgb { 0% { filter: hue-rotate(0deg); } 100% { filter: hue-rotate(360deg); } }
        .animate-neon-rgb { animation: neonRgb 4s infinite linear; }
      `}</style>

      {/* Primary Left Sidebar */}
      <div className="w-26 border-r border-white/5 flex flex-col items-center py-6 z-30 flex-shrink-0 relative shadow-2xl">
        <div className="flex flex-col space-y-4 w-full px-3 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {SIDEBAR_TABS.map((tab) => {
            const Icon = tab.icon;
            // Group TEXT, COLOR, and FONT to show as active together
            const isGroup1 =
              ["TEXT", "COLOR", "FONT"].includes(activeTab) &&
              ["TEXT", "COLOR", "FONT"].includes(tab.id);
            // Group BACKBOARD and BACKGROUND to show as active together
            const isGroup2 =
              ["BACKBOARD", "BACKGROUND"].includes(activeTab) &&
              ["BACKBOARD", "BACKGROUND"].includes(tab.id);
            const isActive = activeTab === tab.id || isGroup1 || isGroup2;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center justify-center w-full aspect-square rounded-[20px] transition-all relative ${
                  isActive
                    ? "text-[var(--color-primary)]"
                    : "hover:text-[var(--color-primary)]"
                }`}
                style={{
                  backgroundColor: isActive
                    ? "color-mix(in srgb, var(--color-primary) 20%, transparent)"
                    : "transparent",
                }}
              >
                <Icon
                  className="mb-1.5 w-[16px] h-[19px]"
                  style={{ color: "inherit" }}
                />
                <span className="text-[10px] text-center font-bold tracking-widest whitespace-pre-line leading-tight uppercase">
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Area with Background */}
      <div
        className="flex-1 relative overflow-hidden flex flex-col"
        style={{
          backgroundImage: `url(${bgImage.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 0.5s ease-in-out",
        }}
      >
        <div className="absolute inset-0 z-0 pointer-events-none"></div>

        {/* Floating Left Thumbnails (Square Shape) */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-black/30 backdrop-blur-xl border border-white/20 rounded-2xl p-2 flex flex-col gap-2 max-h-[60vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] shadow-2xl">
          {BACKGROUNDS.map((bg) => (
            <button
              key={bg.id}
              onClick={() => setBgImage(bg)}
              className={`w-[70px] h-[70px] rounded-lg bg-cover bg-center border-2 transition-all duration-300 ${
                bg.id === bgImage.id
                  ? "scale-110"
                  : "border-transparent opacity-60 hover:opacity-100 hover:scale-105"
              }`}
              style={{
                backgroundImage: `url(${bg.url})`,
                borderColor:
                  bg.id === bgImage.id ? "var(--color-primary)" : "transparent",
              }}
              title={bg.id.replace("-", " ")}
            />
          ))}
        </div>

        {/* Center Canvas */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none p-12">
          <div
            className={`whitespace-pre-wrap text-center max-w-[90%] leading-[1.2] select-none transition-all duration-500 relative ${
              selectedBackboard?.id === "rectangle" ||
              selectedBackboard?.id === "open-box"
                ? `backdrop-blur-md px-16 py-10 rounded-3xl border shadow-2xl ${
                    selectedBbColor?.id === "white"
                      ? "bg-white/80 border-white/50 text-black"
                      : selectedBbColor?.id === "black"
                        ? "bg-black/90 border-white/20"
                        : "bg-white/10 border-white/20"
                  }`
                : ""
            } ${
              selectedBackboard?.id === "cut-around" ||
              selectedBackboard?.id === "cut-to-letter"
                ? selectedBbColor?.id === "black"
                  ? "drop-shadow-[0_0_15px_rgba(0,0,0,0.9)] bg-black/40 rounded-2xl px-8 py-4 backdrop-blur-sm"
                  : selectedBbColor?.id === "white"
                    ? "drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] bg-white/40 rounded-2xl px-8 py-4 backdrop-blur-sm"
                    : "drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]"
                : ""
            } ${
              selectedBackboard?.id === "acrylic-stand"
                ? `border-b-8 pb-4 ${
                    selectedBbColor?.id === "black"
                      ? "border-black"
                      : selectedBbColor?.id === "white"
                        ? "border-white"
                        : "border-white/20"
                  }`
                : ""
            } ${selectedEffects === "remote-dimmer" ? "animate-pulse" : ""} ${
              selectedEffects === "rgb-color" ? "animate-neon-rgb" : ""
            }`}
            style={getNeonStyle()}
          >
            {text || "Enter Text"}
          </div>
        </div>

        {/* Floating Bottom Input */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <div className=" backdrop-blur-xl border border-white/20 rounded-[16px] px-2 py-3 shadow-2xl flex items-center gap-6">
            <input
              ref={textInputRef}
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Your text"
              className="bg-transparent border-1 rounded-[15px] outline-none w-full py-3 px-2 text-sm placeholder:text-[var(--color-gray)] text-center"
              maxLength={30}
            />
            <button
              className="w-[50px] h-[40px] rounded-[12px] flex items-center justify-center text-black transition-transform hover:scale-110 shadow-2xl"
              style={{
                backgroundColor: themeColor,
                boxShadow: `0 0 15px ${themeColor}`,
              }}
            >
              <LuCheck size={20} />
            </button>
          </div>
        </div>

        {/* Right Floating Controls Panel */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 w-[320px] z-20">
          {(activeTab === "COLOR" || activeTab === "FONT") && (
            <div
              tabIndex={0}
              className="flex flex-col gap-4 max-h-[70vh] overflow-y-auto pb-10 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/20 hover:[&::-webkit-scrollbar-thumb]:bg-white/40 [&::-webkit-scrollbar-thumb]:rounded-full pr-2 focus:outline-none"
            >
              {/* TEXT COLOR */}
              <div className="bg-[#222222] border border-[#333] rounded-[24px] p-5 shadow-2xl">
                <h3 className="text-[10px] font-bold text-[var(--color-gray)] tracking-widest mb-4 flex items-center gap-2 uppercase">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: textColor || "#ffffff" }}
                  ></span>
                  Text Color
                </h3>
                <div className="grid grid-cols-4 gap-y-4 gap-x-2">
                  {COLORS.map((c) => (
                    <div
                      key={`text-${c.id}`}
                      className="flex justify-center relative"
                    >
                      <button
                        onClick={() =>
                          setTextColor(textColor === c.hex ? null : c.hex)
                        }
                        className="w-12 h-12 rounded-full transition-all duration-300"
                        style={{
                          backgroundColor: c.hex,
                          boxShadow:
                            textColor === c.hex ? `0 0 15px ${c.hex}` : "none",
                          border:
                            textColor === c.hex
                              ? "2px solid transparent"
                              : "2px solid transparent",
                        }}
                      ></button>
                      {/* Active Indicator ring */}
                      {textColor === c.hex && (
                        <div className="absolute inset-0 rounded-full border-2 border-[var(--color-primary)] scale-125 pointer-events-none"></div>
                      )}
                    </div>
                  ))}
                  <div className="flex justify-center items-center">
                    <button className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-[var(--color-gray)] hover:text-white transition-colors hover:bg-white/30">
                      <LuPenTool size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {/* GLOW COLOR */}
              <div className="bg-[#222222] border border-[#333] rounded-[24px] p-5 shadow-2xl">
                <h3 className="text-[10px] font-bold text-[var(--color-gray)] tracking-widest mb-4 flex items-center gap-2 uppercase">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: glowColor || "#ffffff",
                      boxShadow: `0 0 8px ${glowColor || "#ffffff"}`,
                    }}
                  ></span>
                  Glow Color
                </h3>
                <div className="grid grid-cols-4 gap-y-4 gap-x-2">
                  {COLORS.map((c) => (
                    <div
                      key={`glow-${c.id}`}
                      className="flex justify-center relative"
                    >
                      <button
                        onClick={() =>
                          setGlowColor(glowColor === c.hex ? null : c.hex)
                        }
                        className="w-12 h-12 rounded-full transition-all duration-300 relative"
                        style={{
                          backgroundColor: c.hex,
                          boxShadow:
                            glowColor === c.hex ? `0 0 25px ${c.hex}` : "none",
                        }}
                      >
                        {/* Internal glow for swatch */}
                        <div className="absolute inset-0 rounded-full shadow-[inset_0_0_10px_rgba(255,255,255,0.4)] pointer-events-none"></div>
                      </button>
                      {glowColor === c.hex && (
                        <div className="absolute inset-0 rounded-full border-2 border-[var(--color-primary)] scale-125 pointer-events-none"></div>
                      )}
                    </div>
                  ))}
                  <div className="flex justify-center items-center">
                    <button className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-[var(--color-gray)] hover:text-white transition-colors hover:bg-white/30">
                      <LuPenTool size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {/* TYPOGRAPHIC SOUL */}
              <div className="bg-[#222222] border border-[#333] rounded-[24px] p-5 shadow-2xl">
                <h3 className="text-[10px] font-bold text-[var(--color-gray)] tracking-widest mb-4 flex items-center gap-2 uppercase">
                  <span className="w-2 h-2 rounded-full bg-gray-500"></span>
                  Typographic Soul
                </h3>
                <div className="flex flex-col gap-2">
                  {FONTS.map((f) => {
                    const isActive = font?.id === f.id;
                    return (
                      <button
                        key={f.id}
                        onClick={() => setFont(font?.id === f.id ? null : f)}
                        className={`flex items-center justify-between px-5 py-4 rounded-[16px] border transition-all ${
                          isActive
                            ? "bg-[#332228]"
                            : "border-[#444] bg-[#2a2a2a] hover:bg-[#333]"
                        } text-left w-full`}
                        style={{ borderColor: isActive ? themeColor : "#444" }}
                      >
                        <span
                          className="text-xl"
                          style={{
                            fontFamily: f.family,
                            color: isActive ? "white" : "white",
                          }}
                        >
                          {f.name}
                        </span>
                        {isActive && (
                          <LuPenTool size={16} style={{ color: themeColor }} />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {activeTab === "SIZE" && (
            <div className="bg-[#111111]/70 backdrop-blur border border-[#333] rounded-[32px] p-6 shadow-2xl">
              <h3 className="text-[10px] font-bold text-[var(--color-gray)] tracking-widest mb-4 flex items-center gap-2 uppercase">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: themeColor }}
                ></span>
                Size Options
              </h3>
              <div className="flex flex-col gap-3">
                {SIZES.map((s) => {
                  const isActive = selectedSize?.id === s.id;
                  return (
                    <button
                      key={s.id}
                      onClick={() =>
                        setSelectedSize(selectedSize?.id === s.id ? null : s)
                      }
                      className={`flex flex-col px-5 py-3 rounded-2xl border transition-all text-left w-full ${isActive && "border-[#444] bg-[#2a2a2a] hover:bg-[#333]"}`}
                      style={{ borderColor: isActive ? themeColor : "#444" }}
                    >
                      <div className="flex justify-between items-center mb-1 w-full">
                        <span
                          className="font-bold"
                          style={{ color: isActive ? "white" : "white" }}
                        >
                          {s.name}
                        </span>
                        <span
                          className="font-bold text-sm"
                          style={{ color: isActive ? themeColor : "white" }}
                        >
                          {s.price}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-[10px] text-[var(--color-gray)] w-full">
                        <span>Length: {s.length}</span>
                        <span>Height: {s.height}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {(activeTab === "BACKBOARD" || activeTab === "BACKGROUND") && (
            <div
              tabIndex={0}
              className="flex flex-col gap-4 max-h-[70vh] overflow-y-auto pb-10 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/20 hover:[&::-webkit-scrollbar-thumb]:bg-white/40 [&::-webkit-scrollbar-thumb]:rounded-full pr-2 w-[370px] -ml-6 focus:outline-none"
            >
              <div className="bg-[#222222] backdrop-blur-xl border border-[#333] rounded-[32px] p-6 shadow-2xl">
                <h3 className="text-[10px] font-bold text-[var(--color-gray)] tracking-widest mb-4 flex items-center gap-2 uppercase">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: themeColor }}
                  ></span>
                  Backboard Style
                </h3>
                <div
                  tabIndex={0}
                  className="grid grid-cols-2 gap-3 max-h-[250px] overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/20 hover:[&::-webkit-scrollbar-thumb]:bg-white/40 [&::-webkit-scrollbar-thumb]:rounded-full focus:outline-none"
                >
                  {BACKBOARDS.map((b) => {
                    const isActive = selectedBackboard?.id === b.id;
                    const isFree = b.price === "FREE";
                    return (
                      <button
                        key={b.id}
                        onClick={() =>
                          setSelectedBackboard(
                            selectedBackboard?.id === b.id ? null : b,
                          )
                        }
                        className={`flex flex-col rounded-2xl border transition-all overflow-hidden relative border-[#444] bg-[#2a2a2a] hover:bg-[#333]`}
                        style={{ borderColor: isActive ? themeColor : "#444" }}
                      >
                        <div className="w-full h-[90px] bg-[#2a2a2a] flex items-center justify-center relative overflow-hidden">
                          {/* Dynamic shape rendering instead of CSS pseudo-elements */}
                          {b.id === "cut-around" && (
                            <div className="absolute w-[80px] h-[45px] border border-dashed border-[#666] rounded-[40px] -rotate-6"></div>
                          )}
                          {b.id === "rectangle" && (
                            <div className="absolute w-[110px] h-[60px] border border-dashed border-[#666] rounded-[4px]"></div>
                          )}
                          {b.id === "cut-to-letter" && (
                            <div className="absolute w-[70px] h-[35px] border border-dashed border-[#666] rounded-[10px] -rotate-6"></div>
                          )}
                          {b.id === "acrylic-stand" && (
                            <div className="absolute bottom-[10px] w-[80px] h-[6px] bg-[#444] rounded-[2px]"></div>
                          )}
                          {b.id === "open-box" && (
                            <div className="absolute w-[120px] h-[70px] border-[2px] border-[#333] shadow-[inset_0_0_15px_rgba(0,0,0,0.8)]"></div>
                          )}

                          <span className="font-['Dancing_Script'] text-[32px] text-[#111] z-10 -rotate-6">
                            Hello
                          </span>
                        </div>

                        <div className="flex justify-between items-center w-full px-3 py-2 bg-[#222]">
                          <span className="font-bold text-white text-[9px]">
                            {b.name}
                          </span>
                          <span
                            className={`font-bold text-[9px] ${isFree ? "text-[#00ff66]" : "text-[#ffb300]"}`}
                          >
                            {b.price}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="bg-[#222222] backdrop-blur-xl border border-[#333] rounded-[32px] p-6 shadow-2xl">
                <h3 className="text-[10px] font-bold text-[var(--color-gray)] tracking-widest mb-4 flex items-center gap-2 uppercase">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: themeColor }}
                  ></span>
                  Backboard Color
                </h3>
                <div className="flex gap-3 mb-8">
                  {BACKBOARD_COLORS.map((bc) => {
                    const isActive = selectedBbColor?.id === bc.id;
                    return (
                      <button
                        key={bc.id}
                        onClick={() =>
                          setSelectedBbColor(
                            selectedBbColor?.id === bc.id ? null : bc,
                          )
                        }
                        className={`flex-1 py-3 rounded-2xl border transition-all flex flex-col items-center gap-2 border-[#444] bg-[#2a2a2a] hover:bg-[#333]`}
                        style={{ borderColor: isActive ? themeColor : "#444" }}
                      >
                        <div
                          className={`w-6 h-6 rounded-full border-2 ${bc.id === "white" ? "border-gray-200" : "border-white/20"}`}
                          style={{
                            backgroundColor: bc.hex,
                            backgroundImage:
                              bc.id === "clear"
                                ? "linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc), linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc)"
                                : "none",
                            backgroundPosition: "0 0, 4px 4px",
                            backgroundSize: "8px 8px",
                          }}
                        />
                        <span className="text-[10px] font-bold text-white uppercase">
                          {bc.name}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <h3 className="text-[10px] font-bold text-[var(--color-gray)] tracking-widest mb-4 flex items-center gap-2 uppercase">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: themeColor }}
                  ></span>
                  Background Settings
                </h3>
                <p className="text-xs text-[var(--color-gray)]">
                  You can select a room background using the thumbnails on the
                  left side of the screen.
                </p>
              </div>
            </div>
          )}

          {activeTab === "BGCOLOR" && (
            <div className="bg-[#222222] backdrop-blur-xl border border-[#333] rounded-[32px] p-6 shadow-2xl">
              <h3 className="text-[10px] font-bold text-[var(--color-gray)] tracking-widest mb-4 flex items-center gap-2 uppercase">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: themeColor }}
                ></span>
                Background Color
              </h3>
              <p className="text-xs text-[var(--color-gray)]">
                Custom background colors coming soon.
              </p>
            </div>
          )}

          {activeTab === "EFFECTS" && (
            <div className="bg-[#222222] backdrop-blur-xl border border-[#333] rounded-[32px] p-6 shadow-2xl">
              <h3 className="text-[10px] font-bold text-[var(--color-gray)] tracking-widest mb-4 flex items-center gap-2 uppercase">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: themeColor }}
                ></span>
                Special Effects
              </h3>
              <div className="flex flex-col gap-3">
                <button
                  onClick={() =>
                    setSelectedEffects(
                      selectedEffects === "remote-dimmer"
                        ? null
                        : "remote-dimmer",
                    )
                  }
                  className={`flex flex-col px-5 py-3 rounded-2xl border transition-all text-left w-full border-[#444] bg-[#2a2a2a] hover:bg-[#333]`}
                  style={{
                    borderColor:
                      selectedEffects === "remote-dimmer" ? themeColor : "#444",
                  }}
                >
                  <span
                    className="font-bold text-white mb-1 text-sm"
                    style={{
                      color:
                        selectedEffects === "remote-dimmer"
                          ? themeColor
                          : "white",
                    }}
                  >
                    Remote Control Dimmer
                  </span>
                  <span className="text-[10px] text-[var(--color-gray)]">
                    Adjust brightness and flashing modes.
                  </span>
                </button>
                <button
                  onClick={() =>
                    setSelectedEffects(
                      selectedEffects === "rgb-color" ? null : "rgb-color",
                    )
                  }
                  className={`flex flex-col px-5 py-3 rounded-2xl border transition-all text-left w-full border-[#444] bg-[#2a2a2a] hover:bg-[#333]`}
                  style={{
                    borderColor:
                      selectedEffects === "rgb-color" ? themeColor : "#444",
                  }}
                >
                  <span
                    className="font-bold text-white mb-1 text-sm"
                    style={{
                      color:
                        selectedEffects === "rgb-color" ? themeColor : "white",
                    }}
                  >
                    RGB Color Changing
                  </span>
                  <span className="text-[10px] text-[var(--color-gray)]">
                    Dynamic color changing effects with remote.
                  </span>
                </button>
              </div>
            </div>
          )}

          {activeTab === "LEDKIT" && (
            <div className="bg-[#222222] backdrop-blur-xl border border-[#333] rounded-[32px] p-6 shadow-2xl">
              <h3 className="text-[10px] font-bold text-[var(--color-gray)] tracking-widest mb-4 flex items-center gap-2 uppercase">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: themeColor }}
                ></span>
                LED Kit Options
              </h3>
              <div className="flex flex-col gap-3">
                <button
                  onClick={() =>
                    setSelectedLedKit(
                      selectedLedKit === "indoor" ? null : "indoor",
                    )
                  }
                  className={`flex flex-col px-5 py-3 rounded-2xl border transition-all text-left w-full border-[#444] bg-[#2a2a2a] hover:bg-[#333]`}
                  style={{
                    borderColor:
                      selectedLedKit === "indoor" ? themeColor : "#444",
                  }}
                >
                  <span
                    className="font-bold text-white mb-1 text-sm"
                    style={{
                      color: selectedLedKit === "indoor" ? themeColor : "white",
                    }}
                  >
                    Indoor Use Only
                  </span>
                  <span className="text-[10px] text-[var(--color-gray)]">
                    Standard power supply and wiring.
                  </span>
                </button>
                <button
                  onClick={() =>
                    setSelectedLedKit(
                      selectedLedKit === "outdoor" ? null : "outdoor",
                    )
                  }
                  className={`flex flex-col px-5 py-3 rounded-2xl border transition-all text-left w-full relative border-[#444] bg-[#2a2a2a] hover:bg-[#333]`}
                  style={{
                    borderColor:
                      selectedLedKit === "outdoor" ? themeColor : "#444",
                  }}
                >
                  <span
                    className="font-bold text-white mb-1 text-sm"
                    style={{
                      color:
                        selectedLedKit === "outdoor" ? themeColor : "white",
                    }}
                  >
                    Outdoor Waterproofing
                  </span>
                  <span className="text-[10px] text-[var(--color-gray)]">
                    Weather-sealed LEDs and waterproof supply.
                  </span>

                  {/* Inline absolute badge replacing CSS ::after */}
                  {selectedLedKit === "outdoor" && (
                    <div className="absolute -bottom-[30px] right-0 text-[11px] font-['Inter'] bg-[#0096ff26] text-[#00e5ff] px-2.5 py-1 rounded-md border border-[#0096ff66] tracking-[2px] font-semibold whitespace-nowrap shadow-none z-10">
                      OUTDOOR READY
                    </div>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
