const comparisons = [
  {
    factor: "Strategic Thinking",
    you: "Advanced",
    average: "Intermediate",
  },

  {
    factor: "Execution Capability",
    you: "High",
    average: "Medium",
  },

  {
    factor: "Leadership Potential",
    you: "High",
    average: "Low",
  },

  {
    factor: "Adaptability",
    you: "Excellent",
    average: "Moderate",
  },

  {
    factor: "Communication",
    you: "Strong",
    average: "Average",
  },
];

export default function StrategicComparisonTable() {
  return (
    <div className="space-y-8">

      <div>

        <p
          className="
            text-zinc-500
            uppercase
            tracking-[0.2em]
            text-xs
            mb-4
          "
        >
          Competitive Benchmarking
        </p>

        <h3 className="text-4xl font-black">
          Candidate Positioning Comparison
        </h3>

      </div>

      <div
        className="
          rounded-3xl
          border
          border-zinc-800
          bg-zinc-900/40
          overflow-hidden
        "
      >

        <div
          className="
            grid
            grid-cols-3
            border-b
            border-zinc-800
            bg-black/40
          "
        >

          <div className="p-5 text-zinc-500 text-sm uppercase tracking-[0.2em]">
            Factor
          </div>

          <div className="p-5 text-zinc-500 text-sm uppercase tracking-[0.2em]">
            You
          </div>

          <div className="p-5 text-zinc-500 text-sm uppercase tracking-[0.2em]">
            Market Average
          </div>

        </div>

        {comparisons.map((item) => (
          <div
            key={item.factor}
            className="
              grid
              grid-cols-3
              border-b
              last:border-0
              border-zinc-800
            "
          >

            <div className="p-5 text-zinc-300">
              {item.factor}
            </div>

            <div className="p-5 font-semibold">
              {item.you}
            </div>

            <div className="p-5 text-zinc-500">
              {item.average}
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}