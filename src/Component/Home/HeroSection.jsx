import React, { useState, useRef } from "react";
// Container import removed; layout handled inline

const TRAIL_IMAGES = [
  "/Image/Herosection/Hero-cursor-img-1.png",
  "/Image/Herosection/Hero-cursor-img-2.png",
  "/Image/Herosection/Hero-cursor-img-3.png",
  "/Image/Herosection/Hero-cursor-img-4.png",
  "/Image/Herosection/Hero-cursor-img-5.png",
];

export default function HeroSection() {
  const [trail, setTrail] = useState([]);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const lastPos = useRef({ x: 0, y: 0 });
  const imageIndex = useRef(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setCursorPos({ x, y });

    const dx = x - lastPos.current.x;
    const dy = y - lastPos.current.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Spawn a new image if the mouse has moved more than 60px
    if (distance > 160) {
      const newImage = {
        id: Date.now() + Math.random(),
        x,
        y,
        src: TRAIL_IMAGES[imageIndex.current % TRAIL_IMAGES.length],
      };

      imageIndex.current += 1;
      lastPos.current = { x, y };

      setTrail((prev) => [...prev, newImage]);

      setTimeout(() => {
        setTrail((prev) => prev.filter((img) => img.id !== newImage.id));
      }, 1000);
    }
  };

  return (
    <>
      <section
        className="relative w-[100%] h-[90vh] text-center flex items-center justify-center cursor-none"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="mx-auto max-w-[1720px] px-4 sm:px-4 flex flex-col items-center">
          {/* Custom Dot Cursor */}
          <div
            className={`absolute w-3 h-3 bg-white rounded-full pointer-events-none z-[100] transition-opacity duration-200 mix-blend-difference ${isHovered ? "opacity-100" : "opacity-0"}`}
            style={{
              left: `${cursorPos.x}px`,
              top: `${cursorPos.y}px`,
              transform: "translate(-50%, -50%)",
            }}
          ></div>

          {/* Trail Images */}
          {trail.map((img, i) => (
            <img
              key={img.id}
              src={img.src}
              alt="trail"
              className="absolute pointer-events-none object-cover rounded-xl shadow-lg w-[190px] h-[240px] animate-trail-fade z-20 border border-white/20"
              style={{
                left: `${img.x + i * 2}px`,
                top: `${img.y + i * 2}px`,
              }}
            />
          ))}

          {/* Top Right Glow Spot */}
          <div className="absolute top-[20px] right-[-40px] w-[300px] md:w-[500px] h-[300px] md:h-[600px] bg-[var(--color-primary)]/30 blur-[3000px] md:blur-[120px] rounded-full pointer-events-none"></div>

            <div className="text-center pt-[10vh] md:pt-[15vh] lg:pt-[20vh] relative z-10">
              <h1 className="text-[28px] sm:text-[40px] md:text-[52px] lg:text-[64px] font-poppins font-extrabold">
                <span className="text-[var(--color-primary)]">N.E Sign </span>{" "}
                Printing & Marketing{" "}
              </h1>
              <p className="font-poppins font-normal text-[24px] sm:text-[36px] md:text-[48px] lg:text-[64px]">
                Lowest Price Guaranteed
              </p>
            </div>
        </div>
      </section>
    </>
  );
}
