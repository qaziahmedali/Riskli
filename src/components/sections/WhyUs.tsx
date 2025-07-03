import Image from "next/image";
import { WHY_US_DATA } from "@/utils/constants";

const WhyUsCard = ({
  icon,
  title,
  description,
  colorBorder,
  bgGradient,
  bgSvg,
}: {
  icon: string;
  title: string;
  description: string;
  colorBorder: string;
  bgGradient: string;
  bgSvg: string;
}) => {
  return (
    <div className="relative group hover:scale-105 transition-transform duration-300">
      <div
        className={`absolute right-20 top-1/2 transform -translate-y-1/2 w-[220px] h-[260px] border-2 border-solid ${colorBorder} rounded-md`}
      ></div>
      {/* SVG Background */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={bgSvg}
          alt="Card background"
          fill
          className="object-contain"
        />
      </div>

      {/* Card Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[330px] w-full text-center px-8">
        {/* Icon */}
        <div className="w-16 h-16 flex items-center justify-center mb-4 ">
          <Image src={icon} alt={title} width={32} height={32} />
        </div>

        {/* Title */}
        <h3 className="text-md font-bold text-gray-900 mb-4 leading-tight text-center">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm font-[14px] text-gray-600 leading-relaxed max-w-[240px] text-center mb-4">
          {description}
        </p>
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
              bgSvg={item.bgSvg}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
