"use client";

import AnalysisModeCard from "@/app/components/AnalysisModeCard";

type Props = {
  selectedMode: string;

  onChange: (
    value: string
  ) => void;
};

const modes = [
  {
    id: "strategic",

    title:
      "Strategic Analysis",

    description:
      "Full company strategy, positioning, market forces, and hiring intelligence analysis.",
  },

  {
    id: "skills",

    title:
      "Skills Gap Analysis",

    description:
      "Identify missing competencies, certifications, and skills compared to target company expectations.",
  },

  {
    id: "roadmap",

    title:
      "SMART Roadmap",

    description:
      "Generate milestone-based execution roadmap with KPIs and learning priorities.",
  },

  {
    id: "interview",

    title:
      "Interview Preparation",

    description:
      "Simulate hiring expectations, likely interview questions, and preparation strategy.",
  },
];

export default function AnalysisModes({
  selectedMode,
  onChange,
}: Props) {
  return (
    <div className="space-y-5">

      <div>

        <p className="text-zinc-500 uppercase tracking-[0.25em] text-xs mb-4">
          AI Modes
        </p>

        <h3 className="text-2xl font-bold">
          Analysis Modes
        </h3>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {modes.map((mode) => (
          <AnalysisModeCard
            key={mode.id}
            title={mode.title}
            description={mode.description}
            active={
              selectedMode === mode.id
            }
            onClick={() =>
              onChange(mode.id)
            }
          />
        ))}

      </div>

    </div>
  );
}