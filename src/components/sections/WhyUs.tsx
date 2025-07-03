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
  // Define colors based on the border color with medium gradients
  const gradientColors = {
    "border-red-500": {
      bgGradient:
        "linear-gradient(135deg, rgba(255,215,215,0.25), rgba(255,180,180,0.1))",
      borderColor: "#FF3A3A",
      lightColor: "rgba(255,220,220,0.4)",
    },
    "border-purple-500": {
      bgGradient:
        "linear-gradient(135deg, rgba(235,220,255,0.25), rgba(210,190,255,0.1))",
      borderColor: "#A855F7",
      lightColor: "rgba(235,220,255,0.4)",
    },
    "border-yellow-500": {
      bgGradient:
        "linear-gradient(135deg, rgba(255,240,200,0.25), rgba(255,230,180,0.1))",
      borderColor: "#EAB308",
      lightColor: "rgba(255,245,210,0.4)",
    },
  };

  // Get the correct color set
  const colors = gradientColors[colorBorder as keyof typeof gradientColors];

  return (
    <div className="relative w-full flex items-center justify-center">
      <div className="relative w-[180px] h-[220px] sm:w-[200px] sm:h-[240px] md:w-[230px] md:h-[260px] lg:w-[274px] lg:h-[307px]">
        {/* Colored border behind card with spread effect */}
        <div
          className="absolute overflow-hidden"
          style={{
            width: "110%",
            height: "108%",
            transform: "translate(20px, 20px)",
            zIndex: 0,
            border: `3px solid ${colors.borderColor}`,
            background: colors.bgGradient,
            borderRadius: "20px",
            boxShadow: `0 4px 15px ${colors.borderColor}44`,
          }}
        ></div>

        {/* White card with curved corners */}
        <div
          className="absolute w-full h-full z-10 bg-white"
          style={{
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
            border: "1px solid rgba(0, 0, 0, 0.03)",
            borderRadius: "10px",
            maskImage: `
              radial-gradient(circle 60px at bottom left, transparent 50%, black 55%),
              radial-gradient(circle 60px at top right, transparent 50%, black 55%)
            `,
            maskComposite: "intersect",
            WebkitMaskImage: `
              radial-gradient(circle 60px at bottom left, transparent 50%, black 55%),
              radial-gradient(circle 60px at top right, transparent 50%, black 55%)
            `,
            WebkitMaskComposite: "source-in",
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
  );
};

const WhyUs = () => {
  return (
    <section className="py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20" id="why-us">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-5 sm:mb-6 md:mb-8 lg:mb-12 xl:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
            Why Use Riskli?
          </h2>
        </div>

        {/* Increased gap on mobile: gap-16 on small screens, scaling down on larger screens */}
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
