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

  const getNeonStyle = () => ({
    color: textColor || "#ffffff",
    fontFamily: font?.family || "'Inter', sans-serif",
    fontSize: `clamp(32px, ${getCalculatedFontSize() * 0.5}px, ${getCalculatedFontSize()}px)`,
    textShadow: glowColor
      ? `0 0 5px #fff, 0 0 10px #fff, 0 0 20px ${glowColor}, 0 0 40px ${glowColor}, 0 0 80px ${glowColor}, 0 0 90px ${glowColor}, 0 0 100px ${glowColor}, 0 0 150px ${glowColor}`
      : "none",
  });

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

  // ─── Panel renderer (shared between desktop right-panel & mobile bottom-panel) ───
  const renderPanel = () => {
    if (activeTab === "COLOR" || activeTab === "FONT") {
      return (
        <div
          className="flex flex-col gap-4 overflow-y-auto max-h-[50vh] lg:max-h-[70vh] pb-4 pr-1
          [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent
          [&::-webkit-scrollbar-thumb]:bg-white/20 hover:[&::-webkit-scrollbar-thumb]:bg-white/40
          [&::-webkit-scrollbar-thumb]:rounded-full"
        >
          {/* TEXT COLOR */}
          <div className="bg-[#222222] border border-[#333] rounded-[24px] p-4 shadow-2xl">
            <h3 className="text-[10px] font-bold text-[var(--color-gray)] tracking-widest mb-4 flex items-center gap-2 uppercase">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: textColor || "#ffffff" }}
              ></span>
              Text Color
            </h3>
            <div className="grid grid-cols-4 gap-y-3 gap-x-2">
              {COLORS.map((c) => (
                <div
                  key={`text-${c.id}`}
                  className="flex justify-center relative"
                >
                  <button
                    onClick={() =>
                      setTextColor(textColor === c.hex ? null : c.hex)
                    }
                    className="w-10 h-10 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: c.hex,
                      boxShadow:
                        textColor === c.hex ? `0 0 15px ${c.hex}` : "none",
                      border: "2px solid transparent",
                    }}
                  />
                  {textColor === c.hex && (
                    <div className="absolute inset-0 rounded-full border-2 border-[var(--color-primary)] scale-125 pointer-events-none" />
                  )}
                </div>
              ))}
              <div className="flex justify-center items-center">
                <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-[var(--color-gray)] hover:text-white transition-colors hover:bg-white/30">
                  <LuPenTool size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* GLOW COLOR */}
          <div className="bg-[#222222] border border-[#333] rounded-[24px] p-4 shadow-2xl">
            <h3 className="text-[10px] font-bold text-[var(--color-gray)] tracking-widest mb-4 flex items-center gap-2 uppercase">
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: glowColor || "#ffffff",
                  boxShadow: `0 0 8px ${glowColor || "#ffffff"}`,
                }}
              />
              Glow Color
            </h3>
            <div className="grid grid-cols-4 gap-y-3 gap-x-2">
              {COLORS.map((c) => (
                <div
                  key={`glow-${c.id}`}
                  className="flex justify-center relative"
                >
                  <button
                    onClick={() =>
                      setGlowColor(glowColor === c.hex ? null : c.hex)
                    }
                    className="w-10 h-10 rounded-full transition-all duration-300 relative"
                    style={{
                      backgroundColor: c.hex,
                      boxShadow:
                        glowColor === c.hex ? `0 0 25px ${c.hex}` : "none",
                    }}
                  >
                    <div className="absolute inset-0 rounded-full shadow-[inset_0_0_10px_rgba(255,255,255,0.4)] pointer-events-none" />
                  </button>
                  {glowColor === c.hex && (
                    <div className="absolute inset-0 rounded-full border-2 border-[var(--color-primary)] scale-125 pointer-events-none" />
                  )}
                </div>
              ))}
              <div className="flex justify-center items-center">
                <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-[var(--color-gray)] hover:text-white transition-colors hover:bg-white/30">
                  <LuPenTool size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* TYPOGRAPHIC SOUL */}
          <div className="border border-[#333] rounded-[24px] p-4 shadow-2xl">
            <h3 className="text-[10px] font-bold text-[var(--color-gray)] tracking-widest mb-4 flex items-center gap-2 uppercase">
              <span className="w-2 h-2 rounded-full bg-gray-500" />
              Typographic Soul
            </h3>
            <div className="flex flex-col gap-2">
              {FONTS.map((f) => {
                const isActive = font?.id === f.id;
                return (
                  <button
                    key={f.id}
                    onClick={() => setFont(font?.id === f.id ? null : f)}
                    className={`flex items-center justify-between px-4 py-3 rounded-[16px] border transition-all text-left w-full ${isActive ? "bg-[#332228]" : "border-[#444] bg-[#2a2a2a] hover:bg-[#333]"}`}
                    style={{ borderColor: isActive ? themeColor : "#444" }}
                  >
                    <span
                      className="text-lg"
                      style={{ fontFamily: f.family, color: "white" }}
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
      );
    }

    if (activeTab === "SIZE") {
      return (
        <div className="bg-[#111111]/70 backdrop-blur border border-[#333] rounded-[32px] p-5 shadow-2xl">
          <h3 className="text-[10px] font-bold text-[var(--color-gray)] tracking-widest mb-4 flex items-center gap-2 uppercase">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: themeColor }}
            />
            Size Options
          </h3>
          <div className="flex flex-col gap-2">
            {SIZES.map((s) => {
              const isActive = selectedSize?.id === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() =>
                    setSelectedSize(selectedSize?.id === s.id ? null : s)
                  }
                  className={`flex flex-col px-4 py-2.5 rounded-2xl border transition-all text-left w-full ${isActive ? "bg-[#2a2a2a]" : "border-[#444] bg-[#2a2a2a] hover:bg-[#333]"}`}
                  style={{ borderColor: isActive ? themeColor : "#444" }}
                >
                  <div className="flex justify-between items-center mb-0.5 w-full">
                    <span className="font-bold text-white">{s.name}</span>
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
      );
    }

    if (activeTab === "BACKBOARD" || activeTab === "BACKGROUND") {
      return (
        <div
          className="flex flex-col gap-4 overflow-y-auto max-h-[50vh] lg:max-h-[70vh] pb-4 pr-1
          [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent
          [&::-webkit-scrollbar-thumb]:bg-white/20 hover:[&::-webkit-scrollbar-thumb]:bg-white/40
          [&::-webkit-scrollbar-thumb]:rounded-full"
        >
          <div className="bg-[#222222] backdrop-blur-xl border border-[#333] rounded-[32px] p-5 shadow-2xl">
            <h3 className="text-[10px] font-bold text-[var(--color-gray)] tracking-widest mb-4 flex items-center gap-2 uppercase">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: themeColor }}
              />
              Backboard Style
            </h3>
            <div
              className="grid grid-cols-2 gap-3 max-h-[250px] overflow-y-auto pr-1
              [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent
              [&::-webkit-scrollbar-thumb]:bg-white/20 hover:[&::-webkit-scrollbar-thumb]:bg-white/40
              [&::-webkit-scrollbar-thumb]:rounded-full"
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
                    className="flex flex-col rounded-2xl border transition-all overflow-hidden relative border-[#444] bg-[#2a2a2a] hover:bg-[#333]"
                    style={{ borderColor: isActive ? themeColor : "#444" }}
                  >
                    <div className="w-full h-[80px] bg-[#2a2a2a] flex items-center justify-center relative overflow-hidden">
                      {b.id === "cut-around" && (
                        <div className="absolute w-[70px] h-[38px] border border-dashed border-[#666] rounded-[40px] -rotate-6" />
                      )}
                      {b.id === "rectangle" && (
                        <div className="absolute w-[95px] h-[52px] border border-dashed border-[#666] rounded-[4px]" />
                      )}
                      {b.id === "cut-to-letter" && (
                        <div className="absolute w-[60px] h-[30px] border border-dashed border-[#666] rounded-[10px] -rotate-6" />
                      )}
                      {b.id === "acrylic-stand" && (
                        <div className="absolute bottom-[10px] w-[70px] h-[6px] bg-[#444] rounded-[2px]" />
                      )}
                      {b.id === "open-box" && (
                        <div className="absolute w-[105px] h-[60px] border-[2px] border-[#333] shadow-[inset_0_0_15px_rgba(0,0,0,0.8)]" />
                      )}
                      <span className="font-['Dancing_Script'] text-[28px] text-[#111] z-10 -rotate-6">
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

          <div className="bg-[#222222] backdrop-blur-xl border border-[#333] rounded-[32px] p-5 shadow-2xl">
            <h3 className="text-[10px] font-bold text-[var(--color-gray)] tracking-widest mb-4 flex items-center gap-2 uppercase">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: themeColor }}
              />
              Backboard Color
            </h3>
            <div className="flex gap-3 mb-6">
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
                    className="flex-1 py-2.5 rounded-2xl border transition-all flex flex-col items-center gap-2 border-[#444] bg-[#2a2a2a] hover:bg-[#333]"
                    style={{ borderColor: isActive ? themeColor : "#444" }}
                  >
                    <div
                      className={`w-5 h-5 rounded-full border-2 ${bc.id === "white" ? "border-gray-200" : "border-white/20"}`}
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
                    <span className="text-[9px] font-bold text-white uppercase">
                      {bc.name}
                    </span>
                  </button>
                );
              })}
            </div>
            <h3 className="text-[10px] font-bold text-[var(--color-gray)] tracking-widest mb-3 flex items-center gap-2 uppercase">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: themeColor }}
              />
              Background Settings
            </h3>
            <p className="text-xs text-[var(--color-gray)]">
              Select a room background using the thumbnails on the left side of
              the screen.
            </p>
          </div>
        </div>
      );
    }

    if (activeTab === "EFFECTS") {
      return (
        <div className="bg-[#222222] backdrop-blur-xl border border-[#333] rounded-[32px] p-5 shadow-2xl">
          <h3 className="text-[10px] font-bold text-[var(--color-gray)] tracking-widest mb-4 flex items-center gap-2 uppercase">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: themeColor }}
            />
            Special Effects
          </h3>
          <div className="flex flex-col gap-3">
            {[
              {
                id: "remote-dimmer",
                label: "Remote Control Dimmer",
                desc: "Adjust brightness and flashing modes.",
              },
              {
                id: "rgb-color",
                label: "RGB Color Changing",
                desc: "Dynamic color changing effects with remote.",
              },
            ].map((fx) => (
              <button
                key={fx.id}
                onClick={() =>
                  setSelectedEffects(selectedEffects === fx.id ? null : fx.id)
                }
                className="flex flex-col px-4 py-3 rounded-2xl border transition-all text-left w-full border-[#444] bg-[#2a2a2a] hover:bg-[#333]"
                style={{
                  borderColor: selectedEffects === fx.id ? themeColor : "#444",
                }}
              >
                <span
                  className="font-bold mb-1 text-sm"
                  style={{
                    color: selectedEffects === fx.id ? themeColor : "white",
                  }}
                >
                  {fx.label}
                </span>
                <span className="text-[10px] text-[var(--color-gray)]">
                  {fx.desc}
                </span>
              </button>
            ))}
          </div>
        </div>
      );
    }

    if (activeTab === "LEDKIT") {
      return (
        <div className="bg-[#222222] backdrop-blur-xl border border-[#333] rounded-[32px] p-5 shadow-2xl">
          <h3 className="text-[10px] font-bold text-[var(--color-gray)] tracking-widest mb-4 flex items-center gap-2 uppercase">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: themeColor }}
            />
            LED Kit Options
          </h3>
          <div className="flex flex-col gap-3">
            {[
              {
                id: "indoor",
                label: "Indoor Use Only",
                desc: "Standard power supply and wiring.",
              },
              {
                id: "outdoor",
                label: "Outdoor Waterproofing",
                desc: "Weather-sealed LEDs and waterproof supply.",
              },
            ].map((kit) => (
              <button
                key={kit.id}
                onClick={() =>
                  setSelectedLedKit(selectedLedKit === kit.id ? null : kit.id)
                }
                className="flex flex-col px-4 py-3 rounded-2xl border transition-all text-left w-full relative border-[#444] bg-[#2a2a2a] hover:bg-[#333]"
                style={{
                  borderColor: selectedLedKit === kit.id ? themeColor : "#444",
                }}
              >
                <span
                  className="font-bold mb-1 text-sm"
                  style={{
                    color: selectedLedKit === kit.id ? themeColor : "white",
                  }}
                >
                  {kit.label}
                </span>
                <span className="text-[10px] text-[var(--color-gray)]">
                  {kit.desc}
                </span>
                {kit.id === "outdoor" && selectedLedKit === "outdoor" && (
                  <div className="mt-2 self-end text-[11px] font-['Inter'] bg-[#0096ff26] text-[#00e5ff] px-2.5 py-1 rounded-md border border-[#0096ff66] tracking-[2px] font-semibold whitespace-nowrap">
                    OUTDOOR READY
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="flex flex-col w-full overflow-hidden font-['Inter',sans-serif]">
      <style>{`
        @keyframes neonRgb { 0% { filter: hue-rotate(0deg); } 100% { filter: hue-rotate(360deg); } }
        .animate-neon-rgb { animation: neonRgb 4s infinite linear; }
      `}</style>

      {/* ─── DESKTOP LAYOUT (lg and above) ─────────────────────────────────────── */}
      <div
        className="hidden lg:flex w-full overflow-hidden"
        style={{ height: "calc(100vh - 100px)" }}
      >
        {/* Primary Left Sidebar — desktop only */}
        <div className="w-26 border-r border-white/5 flex flex-col items-center py-6 z-30 flex-shrink-0 relative shadow-2xl">
          <div className="flex flex-col space-y-4 w-full px-3 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {SIDEBAR_TABS.map((tab) => {
              const Icon = tab.icon;
              const isGroup1 =
                ["COLOR", "FONT"].includes(tab.id) &&
                ["COLOR", "FONT"].includes(activeTab);
              const isGroup2 =
                ["BACKBOARD", "BACKGROUND"].includes(activeTab) &&
                ["BACKBOARD", "BACKGROUND"].includes(tab.id);
              const isActive = activeTab === tab.id || isGroup1 || isGroup2;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-col items-center justify-center w-full aspect-square rounded-[20px] transition-all relative ${isActive ? "text-[var(--color-primary)]" : "hover:text-[var(--color-primary)]"}`}
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

        {/* Main canvas area — desktop */}
        <div
          className="flex-1 relative overflow-hidden flex flex-col"
          style={{
            backgroundImage: `url(${bgImage.url})`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            transition: "background-image 0.5s ease-in-out",
          }}
        >
          {/* Floating left bg thumbnails */}
          <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20 backdrop-blur-xl border border-white/20 rounded-2xl p-2 flex flex-col gap-2 max-h-[60vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] shadow-2xl">
            {BACKGROUNDS.map((bg) => (
              <button
                key={bg.id}
                onClick={() => setBgImage(bg)}
                className={`w-[70px] h-[70px] rounded-lg bg-cover bg-center border-2 transition-all duration-300 ${bg.id === bgImage.id ? "scale-110" : "border-transparent opacity-60 hover:opacity-100 hover:scale-105"}`}
                style={{
                  backgroundImage: `url(${bg.url})`,
                  borderColor:
                    bg.id === bgImage.id
                      ? "var(--color-primary)"
                      : "transparent",
                }}
                title={bg.id.replace("-", " ")}
              />
            ))}
          </div>

          {/* Center canvas neon text */}
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none p-12">
            <div
              className={`whitespace-pre-wrap text-center max-w-[90%] leading-[1.2] select-none transition-all duration-500 relative
                ${
                  selectedBackboard?.id === "rectangle" ||
                  selectedBackboard?.id === "open-box"
                    ? `backdrop-blur-md px-16 py-10 rounded-3xl border shadow-2xl ${selectedBbColor?.id === "white" ? "bg-white/80 border-white/50 text-black" : selectedBbColor?.id === "black" ? "bg-black/90 border-white/20" : "bg-white/10 border-white/20"}`
                    : ""
                }
                ${
                  selectedBackboard?.id === "cut-around" ||
                  selectedBackboard?.id === "cut-to-letter"
                    ? selectedBbColor?.id === "black"
                      ? "drop-shadow-[0_0_15px_rgba(0,0,0,0.9)] bg-black/40 rounded-2xl px-8 py-4 backdrop-blur-sm"
                      : selectedBbColor?.id === "white"
                        ? "drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] bg-white/40 rounded-2xl px-8 py-4 backdrop-blur-sm"
                        : "drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]"
                    : ""
                }
                ${selectedBackboard?.id === "acrylic-stand" ? `border-b-8 pb-4 ${selectedBbColor?.id === "black" ? "border-black" : selectedBbColor?.id === "white" ? "border-white" : "border-white/20"}` : ""}
                ${selectedEffects === "remote-dimmer" ? "animate-pulse" : ""}
                ${selectedEffects === "rgb-color" ? "animate-neon-rgb" : ""}`}
              style={getNeonStyle()}
            >
              {text || "Enter Text"}
            </div>
          </div>

          {/* Bottom text input */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
            <div className="backdrop-blur-xl border border-white/20 rounded-[16px] px-2 py-3 shadow-2xl flex items-center gap-6">
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

          {/* Right panel — desktop */}
          <div className="absolute right-12 top-1/2 -translate-y-1/2 w-[320px] z-20">
            {renderPanel()}
          </div>
        </div>
      </div>

      {/* ─── TABLET + MOBILE LAYOUT (below lg) ─────────────────────────────────── */}
      <div
        className="flex flex-col w-full lg:hidden overflow-hidden"
        style={{ minHeight: "calc(100vh - 80px)" }}
      >
        {/* Top horizontal sidebar */}
        <div className="w-full border-b border-white/10 z-30 shadow-xl flex-shrink-0">
          <div className="flex flex-row items-center overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-2 py-2 gap-1">
            {SIDEBAR_TABS.map((tab) => {
              const Icon = tab.icon;
              const isGroup1 =
                ["COLOR", "FONT"].includes(tab.id) &&
                ["COLOR", "FONT"].includes(activeTab);
              const isGroup2 =
                ["BACKBOARD", "BACKGROUND"].includes(activeTab) &&
                ["BACKBOARD", "BACKGROUND"].includes(tab.id);
              const isActive = activeTab === tab.id || isGroup1 || isGroup2;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-col items-center justify-center flex-shrink-0 rounded-[16px] transition-all px-3 py-2 min-w-[56px] ${isActive ? "text-[var(--color-primary)]" : "hover:text-[var(--color-primary)]"}`}
                  style={{
                    backgroundColor: isActive
                      ? "color-mix(in srgb, var(--color-primary) 20%, transparent)"
                      : "transparent",
                  }}
                >
                  <Icon
                    className="w-[15px] h-[15px] mb-1"
                    style={{ color: "inherit" }}
                  />
                  <span className="text-[8px] text-center font-bold tracking-wider whitespace-pre-line leading-tight uppercase">
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Canvas area (background image) */}
        <div
          className="relative flex-shrink-0 w-full overflow-hidden"
          style={{
            height: "clamp(220px, 40vw, 360px)",
            backgroundImage: `url(${bgImage.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            transition: "background-image 0.5s ease-in-out",
          }}
        >
          {/* Neon text centered on canvas */}
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none px-4">
            <div
              className={`whitespace-pre-wrap text-center max-w-full leading-[1.2] select-none transition-all duration-500
                ${
                  selectedBackboard?.id === "rectangle" ||
                  selectedBackboard?.id === "open-box"
                    ? `backdrop-blur-md px-6 py-4 rounded-2xl border shadow-2xl ${selectedBbColor?.id === "white" ? "bg-white/80 border-white/50 text-black" : selectedBbColor?.id === "black" ? "bg-black/90 border-white/20" : "bg-white/10 border-white/20"}`
                    : ""
                }
                ${
                  selectedBackboard?.id === "cut-around" ||
                  selectedBackboard?.id === "cut-to-letter"
                    ? selectedBbColor?.id === "black"
                      ? "drop-shadow-[0_0_15px_rgba(0,0,0,0.9)] bg-black/40 rounded-2xl px-4 py-2 backdrop-blur-sm"
                      : selectedBbColor?.id === "white"
                        ? "drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] bg-white/40 rounded-2xl px-4 py-2 backdrop-blur-sm"
                        : "drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]"
                    : ""
                }
                ${selectedBackboard?.id === "acrylic-stand" ? `border-b-8 pb-2 ${selectedBbColor?.id === "black" ? "border-black" : selectedBbColor?.id === "white" ? "border-white" : "border-white/20"}` : ""}
                ${selectedEffects === "remote-dimmer" ? "animate-pulse" : ""}
                ${selectedEffects === "rgb-color" ? "animate-neon-rgb" : ""}`}
              style={getNeonStyle()}
            >
              {text || "Enter Text"}
            </div>
          </div>

          {/* Horizontal bg thumbnails — bottom strip on mobile canvas */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 backdrop-blur-xl border border-white/20 rounded-xl p-1.5 flex flex-row gap-1.5 max-w-[90vw] overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] shadow-xl">
            {BACKGROUNDS.map((bg) => (
              <button
                key={bg.id}
                onClick={() => setBgImage(bg)}
                className={`w-[42px] h-[42px] flex-shrink-0 rounded-lg bg-cover bg-center border-2 transition-all duration-300 ${bg.id === bgImage.id ? "scale-110" : "border-transparent opacity-60 hover:opacity-100"}`}
                style={{
                  backgroundImage: `url(${bg.url})`,
                  borderColor:
                    bg.id === bgImage.id
                      ? "var(--color-primary)"
                      : "transparent",
                }}
                title={bg.id.replace("-", " ")}
              />
            ))}
          </div>
        </div>

        {/* Text input bar */}
        <div className="w-full px-4 py-3 border-t border-white/10 flex-shrink-0">
          <div className="backdrop-blur-xl border border-white/20 rounded-[14px] px-2 py-2 shadow-xl flex items-center gap-3 w-full">
            <input
              ref={textInputRef}
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Your text"
              className="bg-transparent border-0 outline-none flex-1 py-2 px-2 text-sm placeholder:text-[var(--color-gray)] text-center min-w-0"
              maxLength={30}
            />
            <button
              className="w-[44px] h-[36px] flex-shrink-0 rounded-[10px] flex items-center justify-center text-black transition-transform hover:scale-110 shadow-xl"
              style={{
                backgroundColor: themeColor,
                boxShadow: `0 0 12px ${themeColor}`,
              }}
            >
              <LuCheck size={18} />
            </button>
          </div>
        </div>

        {/* Options panel — scrollable area below canvas */}
        <div className="flex-1 overflow-y-auto px-4 pt-3">
          {renderPanel()}
        </div>
      </div>
    </div>
  );
}
