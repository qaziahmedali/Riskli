import Image from 'next/image';
import { WHY_US_DATA } from '@/utils/constants';

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
  // Map border color to gradient and icon bg
  const gradientMap: Record<string, string> = {
    'border-red-500': 'from-red-400 via-white to-red-200',
    'border-purple-500': 'from-purple-400 via-white to-purple-200',
    'border-yellow-500': 'from-yellow-400 via-white to-yellow-200',
  };
  const iconBgMap: Record<string, string> = {
    'border-red-500': 'bg-red-100',
    'border-purple-500': 'bg-purple-100',
    'border-yellow-500': 'bg-yellow-100',
  };
  const gradient =
    gradientMap[colorBorder] || 'from-gray-300 via-white to-gray-100';
  const iconBg = iconBgMap[colorBorder] || 'bg-gray-100';

  return (
    <div
      className={`relative p-[2px] rounded-2xl bg-gradient-to-tr ${gradient} shadow-lg hover:shadow-2xl transition-all duration-300`}
    >
      <div className='bg-white rounded-2xl p-10 flex flex-col items-center min-h-[300px]'>
        <span
          className={`mb-4 w-16 h-16 rounded-full flex items-center justify-center ${iconBg} shadow`}
        >
          <Image src={icon} alt={title} width={40} height={40} />
        </span>
        <h3 className='text-2xl font-bold text-center mb-2'>{title}</h3>
        <p className='text-base text-gray-600 text-center'>{description}</p>
      </div>
    </div>
  );
};

const WhyUs = () => {
  return (
    <section className='py-16 bg-white' id='why-us'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            Why Use Riskli?
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
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
