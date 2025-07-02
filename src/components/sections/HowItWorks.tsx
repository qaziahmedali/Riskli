import { Step, StepCardProps } from "@/interfaces/step.interface";
import { STEPS } from "@/utils/constants";

const StepCard: React.FC<StepCardProps> = ({ icon, title, description }) => (
  <div className="card-step bg-white text-center p-6 rounded-2xl shadow-lg h-full">
    <div className="flex items-center justify-center mx-auto mb-4">
      <div className="w-8 h-8 text-riskliBlue-500 flex items-center justify-center">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
      {title}
    </h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

// HowItWorks component
export const HowItWorks = () => {
  return (
    <section className="py-20 bg-riskliBlue-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-semibold text-black mb-4">
            How It Works
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {STEPS.map((step: Step) => {
            const Icon = step.icon; // Get the icon component
            return (
              <StepCard
                key={step.id}
                icon={<Icon />} // Render the icon as a ReactNode
                title={step.title}
                description={step.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
