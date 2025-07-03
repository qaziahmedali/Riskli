import Image from "next/image";
import { WHY_US_DATA } from "@/utils/constants";

const WhyUsCard = ({
  icon,
  title,
  description,
  colorBorder,
  bgGradient,
}: {
  icon: string;
  title: string;
  description: string;
  colorBorder: string;
  bgGradient: string;
}) => {
  return (
    <div className="relative w-full h-[320px]">
      {/* Gradient background box - adjusted to be more contained */}
      <div
        className={`absolute right-0 bottom-0 w-[75%] h-[75%] ${bgGradient} rounded-xl border-4 ${colorBorder}`}
      ></div>

      {/* White card with image - now slightly overlapping the gradient */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="mt-8 relative">
          {" "}
          {/* Slightly wider white card */}
          <Image
            src="/img/RiskliCard.png"
            alt="Card background"
            className="object-contain drop-shadow-lg"
            priority
            width={320}
            height={320}
          />
          {/* Centered content container */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 p-4">
            <div className="relative w-10 h-10 mb-4">
              <Image src={icon} alt={title} fill className="object-contain" />
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="text-gray-600 text-sm max-w-[80%]">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WhyUs = () => {
  return (
    <section className="py-16 bg-white" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Use Riskli?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WHY_US_DATA.map((item) => (
            <WhyUsCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
              colorBorder={item.colorBorder}
              bgGradient={item.bgGradient}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
