import StrategicSignalCard from "@/app/components/StrategicSignalCard";

export default function StrategicSignalsSection() {
  const signals = [
    {
      title: "Market Alignment",
      value: "92%",
      description:
        "Your strategic positioning is strongly aligned with current hiring market expectations.",
    },

    {
      title: "Execution Readiness",
      value: "88%",
      description:
        "Your capability stack demonstrates strong execution potential for target company environments.",
    },

    {
      title: "AI Career Score",
      value: "94",
      description:
        "AI systems predict high adaptability and long-term strategic career growth trajectory.",
    },
  ];

  return (
    <div className="space-y-8">

      <div>

        <p
          className="
            text-zinc-500
            uppercase
            tracking-[0.25em]
            text-xs
            mb-4
          "
        >
          Strategic Signals
        </p>

        <h2
          className="
            text-4xl
            lg:text-6xl
            font-black
            leading-tight
          "
        >
          AI-powered
          strategic intelligence
          indicators.
        </h2>

      </div>

      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-3
          gap-6
        "
      >

        {signals.map((signal) => (
          <StrategicSignalCard
            key={signal.title}
            title={signal.title}
            value={signal.value}
            description={signal.description}
          />
        ))}

      </div>

    </div>
  );
}