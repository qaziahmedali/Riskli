import Image from "next/image";
import { WHY_US_DATA } from "@/utils/constants";

const WhyUsCard = ({
  icon,
  title,
  description,
  colorBorder,
}: {
  icon: string;
  title: string;
  description: string;
  colorBorder: string;
}) => {
  // Define colors based on the border color with darker shading to match Figma design
  const colorStyles = {
    "border-red-500": {
      borderColor: "#FF3A3A",
      shadowColor: "rgba(255, 58, 58, 0.1)",
      bgColor: "rgba(255, 58, 58, 0.05)",
    },
    "border-purple-500": {
      borderColor: "#A855F7",
      shadowColor: "rgba(168, 85, 247, 0.1)",
      bgColor: "rgba(168, 85, 247, 0.05)",
    },
    "border-yellow-500": {
      borderColor: "#EAB308",
      shadowColor: "rgba(234, 179, 8, 0.1)",
      bgColor: "rgba(234, 179, 8, 0.05)",
    },
  };

  // Get the correct color set
  const colors = colorStyles[colorBorder as keyof typeof colorStyles];

  return (
    <div className="relative w-full flex items-center justify-center">
      <div className="relative w-[180px] h-[220px] sm:w-[200px] sm:h-[240px] md:w-[230px] md:h-[260px] lg:w-[274px] lg:h-[307px]">
        {/* This wrapper ensures the background for the entire card area matches the colored card */}
        <div
          className="absolute w-full h-full"
          style={{
            backgroundColor: colors.bgColor,
            borderRadius: "20px",
            zIndex: 5,
          }}
        ></div>

        {/* Colored shadow effect */}
        <div
          className="absolute overflow-hidden"
          style={{
            width: "110%",
            height: "108%",
            transform: "translate(15px, 15px)",
            zIndex: 0,
            border: `3px solid ${colors.borderColor}`,
            boxShadow: `0 8px 16px ${colors.shadowColor}, 0 4px 8px ${colors.shadowColor}`,
            borderRadius: "20px",
          }}
        ></div>

        {/* Shadow layer */}
        <div
          className="absolute w-full h-full"
          style={{
            boxShadow: `30px 30px 40px ${colors.shadowColor}, 20px 30px 35px ${colors.shadowColor}, 15px 20px 30px ${colors.shadowColor}`,
            borderRadius: "10px",
            zIndex: 10,
          }}
        ></div>

        {/* This is a wrapper to handle the mask with adjusted corner sizes */}

        <div
          className="absolute w-full h-full overflow-hidden"
          style={{
            borderRadius: "10px",
            // Here we've modified the mask to make the bottom-left corner smaller (45px instead of 60px)
            // and kept the top-right corner at original size
            maskImage: `
              radial-gradient(circle 50px at bottom left, transparent 50%, black 55%),
              radial-gradient(circle 60px at top right, transparent 50%, black 55%)
            `,
            maskComposite: "intersect",
            WebkitMaskImage: `
              radial-gradient(circle 50px at bottom left, transparent 50%, black 55%),
              radial-gradient(circle 60px at top right, transparent 50%, black 55%)
            `,
            WebkitMaskComposite: "source-in",
            zIndex: 20,
          }}
        >
          {/* White card without border */}
          <div
            className="absolute w-full h-full bg-white"
            style={{
              zIndex: 30,
            }}
          >
            {/* Content container */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-3 sm:p-4 md:p-6 lg:p-8">
              <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-9 md:h-9 mb-2 sm:mb-3 md:mb-4 lg:mb-6 relative">
                <Image src={icon} alt={title} fill className="object-contain" />
              </div>

              <h3 className="text-sm sm:text-base md:text-xl font-semibold text-gray-900 mb-1 sm:mb-2 md:mb-3 lg:mb-4">
                {title}
              </h3>
              <p className="text-black text-xs sm:text-sm md:text-base font-[450] leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WhyUs = () => {
  return (
    <section className="py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20" id="why-us">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-5 sm:mb-6 md:mb-8 lg:mb-12 xl:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
            Why Use Riskli?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {WHY_US_DATA.map((item) => (
            <div className="mb-12 sm:mb-8 md:mb-0" key={item.id}>
              <WhyUsCard
                icon={item.icon}
                title={item.title}
                description={item.description}
                colorBorder={item.colorBorder}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
