import GlassCard from "@/app/components/GlassCard";

import StatusPill from "@/app/components/StatusPill";

type Props = {
  company: string;
  hasAnalysis: boolean;
  selectedStep: string;
};

export default function QuickStats({
  company,
  hasAnalysis,
  selectedStep,
}: Props) {
  const stats = [
    {
      label: "Target Company",
      value:
        company || "Not selected",
    },
    {
      label: "Current Phase",
      value: selectedStep,
    },
  ];

  return (
    <div className="space-y-6 mb-8">

      <div className="flex flex-wrap gap-3">

        <StatusPill
          label={
            hasAnalysis
              ? "AI Analysis Completed"
              : "No Analysis Yet"
          }
          active={hasAnalysis}
        />

        <StatusPill
          label={selectedStep}
          active
        />

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {stats.map((stat) => (
          <GlassCard
            key={stat.label}
            className="p-6"
          >

            <p className="text-zinc-500 text-sm mb-3">
              {stat.label}
            </p>

            <p className="text-xl font-bold break-words">
              {stat.value}
            </p>

          </GlassCard>
        ))}

      </div>

    </div>
  );
}