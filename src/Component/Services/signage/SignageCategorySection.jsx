import React from "react";

export default function SignageCategorySection() {
  const categories = [
    {
      title: "Exterior sign",
      image: "/Image/signage/Exterior-sign-01.png",
      gradient: "from-[#CF414B]/80 to-[#852170]/80",
      number: "01",
    },
    {
      title: "Interior sign",
      image: "/Image/signage/Interior-sign-02.png",
      gradient: "from-[#4FE6F1]/80 to-[#ED90CF]/80",
      number: "02",
    },
    {
      title: "LED Digital Board",
      image: "/Image/signage/Digital-Board-03.png",
      gradient: "from-[#ADFDA2]/80 to-[#05A5BF]/80",
      number: "03",
    },
    {
      title: "LED Neon Signs",
      image: "/Image/signage/LED-Neon-04.png",
      gradient: "from-[#8711C1]/80 to-[#2472FC]/80",
      number: "04",
    },
    {
      title: "Window & Wall Graphics",
      image: "/Image/signage/Wall-Graphics-05.png",
      gradient: "from-[#F79C29]/80 to-[#EDBC5A]/80",
      number: "05",
    },
    {
      title: "Vehicle Graphics",
      image: "/Image/signage/Vehicle-Graphics-06.png",
      gradient: "from-[#05A5BF]/80 to-[#CF414B]/80",
      number: "06",
    },
  ];

  return (
    <section className="w-full py-20 overflow-hidden">
      <div className="max-w-[80%] w-full mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        {/* Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-[#c5a880]"></div>
            <span className="text-[#c5a880] tracking-widest text-sm uppercase font-semibold">
              Category
            </span>
          </div>
          <h2 className="text-white text-4xl md:text-5xl font-bold max-w-xl leading-tight font-poppins">
            Find the Right Signage for Your Business
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 h-[580px]">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="relative rounded-xl overflow-hidden group h-full flex flex-col items-center justify-between py-10 transition-transform duration-500 hover:-translate-y-2 cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={cat.image}
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${cat.gradient} mix-blend-multiply opacity-90`}
              ></div>
              <div
                className={`absolute inset-0 bg-gradient-to-b ${cat.gradient} opacity-70`}
              ></div>

              {/* Top Line & Text */}
              <div className="relative flex flex-col items-center gap-1">
                <div className="w-[1px] h-20 bg-white/50"></div>
                <div
                  className="text-xl tracking-wider font-medium whitespace-nowrap"
                  style={{ writingMode: "vertical-rl" }}
                >
                  {cat.title}
                </div>
              </div>

              {/* Outline Number */}
              <div className="relative z-10 text-6xl font-bold text-transparent [-webkit-text-stroke:2px_white] mt-auto">
                {cat.number}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
