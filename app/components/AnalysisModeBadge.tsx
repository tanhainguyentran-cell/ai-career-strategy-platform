type Props = {
  mode: string;
};

const labels: Record<string, string> = {
  strategic: "Strategic Analysis",

  skills: "Skills Gap Analysis",

  roadmap: "SMART Roadmap",

  interview: "Interview Preparation",
};

export default function AnalysisModeBadge({
  mode,
}: Props) {
  return (
    <div
      className="
        inline-flex
        items-center
        gap-2
        px-4
        py-2
        rounded-full
        border
        border-zinc-800
        bg-zinc-900/70
        text-zinc-300
        text-sm
      "
    >

      <div className="w-2 h-2 rounded-full bg-white" />

      <span>
        {labels[mode] || "Analysis"}
      </span>

    </div>
  );
}