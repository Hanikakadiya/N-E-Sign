import React from "react";
import { Link } from "react-router-dom";
import { Icons } from "../../Icons/icons";
import DirectMailData from "../../Data/DirectMailData.json";

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
                <p className="text-[14px] mb-4">{card.description}</p>

                <Link
                  to={`/services/direct-mailing/${card.title
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")}`}
                  className="bg-black px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2 w-max"
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
