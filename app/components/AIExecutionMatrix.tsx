const matrix = [
  {
    focus: "Leadership",
    impact: "High",
    urgency: "Critical",
  },

  {
    focus: "Communication",
    impact: "Medium",
    urgency: "High",
  },

  {
    focus: "Strategic Thinking",
    impact: "Critical",
    urgency: "Critical",
  },

  {
    focus: "Portfolio",
    impact: "High",
    urgency: "Medium",
  },
];

export default function AIExecutionMatrix() {
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
          Execution Intelligence
        </p>

        <h3 className="text-4xl font-black">
          Strategic Execution Matrix
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
            Focus Area
          </div>

          <div className="p-5 text-zinc-500 text-sm uppercase tracking-[0.2em]">
            Impact
          </div>

          <div className="p-5 text-zinc-500 text-sm uppercase tracking-[0.2em]">
            Urgency
          </div>

        </div>

        {matrix.map((item) => (
          <div
            key={item.focus}
            className="
              grid
              grid-cols-3
              border-b
              last:border-0
              border-zinc-800
            "
          >

            <div className="p-5 text-zinc-300">
              {item.focus}
            </div>

            <div className="p-5 text-zinc-400">
              {item.impact}
            </div>

            <div className="p-5 text-zinc-400">
              {item.urgency}
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}