import SpotlightCard from "@/app/components/SpotlightCard";

export default function StrategicSpotlight() {
  const spotlight = [
    {
      title:
        "Corporate Intelligence",

      description:
        "Decode the hidden strategic priorities, organizational dynamics, and competitive pressures shaping hiring decisions.",
    },

    {
      title:
        "Personal Positioning",

      description:
        "Identify how your strengths, experiences, and narrative can create differentiated value in the hiring process.",
    },

    {
      title:
        "Execution Roadmapping",

      description:
        "Transform career objectives into measurable SMART milestones with AI-guided strategic planning.",
    },
  ];

  return (
    <div className="space-y-6">

      <div>

        <p className="text-zinc-500 uppercase tracking-[0.25em] text-xs mb-4">
          Strategic Focus
        </p>

        <h3 className="text-3xl font-bold">
          AI Strategic Spotlight
        </h3>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

        {spotlight.map((item) => (
          <SpotlightCard
            key={item.title}
            title={item.title}
            description={
              item.description
            }
          />
        ))}

      </div>

    </div>
  );
}