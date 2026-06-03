import React from "react";
import { Link, useParams } from "react-router-dom";
import { Icons } from "../../Icons/icons";
import DirectMailData from "../../Data/DirectMailData.json";

export function DirectMailDetail({ id }) {
  const card = DirectMailData.find(
    (c) => c.title.toLowerCase().replace(/[^a-z0-9]+/g, "-") === id,
  );

  return (
    <div className="w-full min-h-screen font-poppins bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[450px] flex flex-col items-center justify-center bg-[#18140c] overflow-hidden pt-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#d99f2b]/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center text-center px-4 mb-10">
          <h1 className="text-white text-4xl md:text-5xl lg:text-[54px] font-bold mb-8 font-poppins">
            {card ? card.title.replace(/\n/g, " ") : "Direct Mail"}
          </h1>
          <div className="flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-md">
            <Icons.Home className="w-4 h-4 text-white" />
            <Link
              to="/"
              className="text-white text-[13px] hover:text-[var(--color-primary)] transition-colors font-medium"
            >
              Home
            </Link>
            <span className="text-white/30 text-[13px]">•</span>
            <span className="text-[var(--color-gray)] text-[13px] font-medium tracking-wide">
              Direct Mailing
            </span>
          </div>
        </div>

        <svg
          viewBox="0 0 1440 320"
          className="absolute bottom-[-1px] left-0 w-full h-[120px] md:h-[180px] lg:h-[220px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#0a0a0a"
            fillOpacity="1"
            d="M0,192L48,208C96,224,192,256,288,245.3C384,235,480,181,576,149.3C672,117,768,107,864,128C960,149,1056,203,1152,202.7C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </section>

      {/* Main Content Area */}
      <div className="w-full xl:max-w-[85%] 2xl:max-w-[75%] mx-auto px-4 md:px-8 py-16 lg:py-24">
        {card ? (
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 relative flex justify-center">
              <div className="absolute -top-10 -left-6 lg:-left-12 z-10 text-[var(--color-primary)]">
                <Icons.Star className="w-10 h-10 lg:w-12 lg:h-12 absolute top-0 left-8 lg:left-12 opacity-80" />
                <Icons.Star className="w-6 h-6 lg:w-8 lg:h-8 absolute top-12 left-0 opacity-60" />
              </div>
              <div className="w-full max-w-[500px] h-[450px] sm:h-[550px] lg:h-[650px] rounded-tl-[64px] rounded-tr-[64px] rounded-bl-[24px] rounded-br-[24px] overflow-hidden relative z-0 border border-white/5">
                <img
                  src={card.detail?.image || card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 lg:-left-12 z-[-1] w-32 h-32 lg:w-40 lg:h-40 bg-[var(--color-primary)] rounded-full blur-3xl opacity-20"></div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col pt-4 lg:pt-16">
              <h2 className="text-[32px] md:text-4xl lg:text-[42px] font-bold leading-[1.2] mb-6 text-white font-poppins">
                {card.detail?.heading || card.title}
              </h2>
              <p className="text-[16px] md:text-[18px] text-white/90 leading-relaxed mb-10 font-normal">
                {card.detail?.subDescription || card.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                {card.detail?.features?.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 w-[18px] h-[18px] rounded-full border border-[var(--color-primary)] flex items-center justify-center">
                      <Icons.Check className="w-3 h-3 text-[var(--color-primary)]" />
                    </div>
                    <span className="text-[15px] lg:text-[16px] text-white font-medium leading-snug">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-16 lg:mt-20">
                <Link
                  to="/services/direct-mailing"
                  className="flex items-center gap-2 text-[var(--color-gray)] hover:text-[var(--color-primary)] transition-colors w-fit"
                >
                  <Icons.ArrowRight className="w-5 h-5 rotate-180" />
                  <span className="font-semibold tracking-wide text-sm">
                    Return to Direct Mailing Services
                  </span>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center text-[var(--color-gray)] text-xl italic py-20">
            Service details not found.
          </div>
        )}
      </div>
    </div>
  );
}

const DIRECT_MAIL_DATA = [
  {
    id: 1,
    title: "EDDM Service(Every door\ndirect mail)",
    description:
      "NE Signs makes Every Door Direct Mail (EDDM®) easy and affordable, giving small businesses the opportunity to connect with entire neighborhoods.",
    buttonText: "Get Service Now",
    image: "/Image/Services/DirectMail/DirectMail-PostONTable.png",
    color: "#0f62bb", // Blue
  },
  {
    id: 2,
    title: "Direct Mail",
    description:
      "NE Signs leverages a complete arsenal of direct mail solutions to effectively highlight your brand's products and services.",
    buttonText: "Get Service Now",
    image: "/Image/Services/DirectMail/DirectMail-PostInBox.png",
    color: "#e6af41", // Yellow/Gold
  },
  {
    id: 3,
    title: "Political Mail",
    description:
      "Connect with voters efficiently using our targeted political mailing services. Ensure your message reaches the right constituents at the right time.",
    buttonText: "Get Service Now",
    image: "/Image/Services/DirectMail/DirectMail-PostDilivered.png",
    color: "#df5551", // Red
  },
  {
    id: 4,
    title: "Customer and business\nmailing list",
    description:
      "Access high-quality, verified mailing lists to expand your reach. Target specific demographics and business sectors to optimize your direct mail ROI.",
    buttonText: "Get Service Now",
    image: "/Image/Services/DirectMail/DirectMail-BoxPicked.png",
    color: "#66a848", // Green
  },
  {
    id: 5,
    title: "Variable Data",
    description:
      "Personalize every piece of mail with variable data printing. Increase engagement by dynamically changing text and graphics based on recipient data.",
    buttonText: "Get Service Now",
    image: "/Image/Services/DirectMail/DirectMail-Location.png",
    color: "#a1194e", // Magenta/Dark Red
  },
];

export default function DirectMail() {
  const { id } = useParams();

  if (id) {
    return <DirectMailDetail id={id} />;
  }

  const cards = DirectMailData || DIRECT_MAIL_DATA;

  return (
    <div className="min-h-screen container mx-auto flex flex-col pt-40 pb-20 px-4 md:px-8 font-['Inter',sans-serif]">
      {/* Header Section */}
      <div className="mb-12 flex flex-col items-center">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[var(--color-primary)] text-[16px] tracking-[0.2em] uppercase">
            OUR TECHNIQUES
          </span>
          <Icons.ArrowDownRight
            className="text-[var(--color-primary)]"
            width="16"
            height="16"
          />
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-[50px] font-bold leading-[1.1] ">
          Results-Oriented Direct
          <br />
          Mailing Approaches
        </h2>
      </div>

      {/* Container for the cards */}
      <div className="flex flex-wrap justify-center gap-4 xl:gap-5 w-full pb-8 xl:pb-0">
        {cards.map((card) => (
          <div
            key={card.id}
            className="group relative bg-white p-3 rounded-[32px] min-w-[280px] max-w-[360px] flex flex-col gap-3 flex-1 h-[500px] overflow-hidden hover:overflow-visible"
          >
            {/* Image */}
            <div className="w-full rounded-[24px] overflow-hidden h-[344px] group-hover:h-[120px] transition-all duration-500">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
            </div>

            {/* Title Card */}
            <div
              className="relative rounded-[24px] p-6 flex-1 h-[120px] transition-all duration-500 "
              style={{ backgroundColor: card.color }}
            >
              <h3 className="text-white text-xl font-bold">{card.title}</h3>

              {/* Slide Up Content */}
              <div
                className="
                    absolute
                    left-0
                    right-0
                    bottom-0
                    p-6
                    translate-y-full
                    group-hover:translate-y-0
                    transition-all
                    duration-1000
                    ease-in-out
                    opacity-0
                    group-hover:opacity-100
                "
              >
                <p className="text-[14px] text-white mb-4">
                  {card.description}
                </p>

                <Link
                  to={`/services/direct-mailing/${card.title
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")}`}
                  className="bg-black text-white px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2 w-max"
                >
                  {card.buttonText}
                  <Icons.ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
