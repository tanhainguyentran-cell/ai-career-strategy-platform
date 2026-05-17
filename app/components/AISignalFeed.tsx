const signals = [
  {
    title:
      "AI leadership demand increasing globally",
    category: "Market Signal",
  },

  {
    title:
      "Execution-focused professionals outperforming peers",
    category: "Performance Insight",
  },

  {
    title:
      "Cross-functional adaptability becoming critical",
    category: "Strategic Trend",
  },

  {
    title:
      "AI-native positioning accelerating career growth",
    category: "Career Intelligence",
  },
];

export default function AISignalFeed() {
  return (
    <div
      className="
        rounded-[64px]
        border
        border-zinc-800
        bg-black
        p-10
      "
    >

      <div className="mb-14">

        <p
          className="
            text-zinc-500
            uppercase
            tracking-[0.45em]
            text-xs
            mb-4
          "
        >
          Signal Feed
        </p>

        <h3
          className="
            text-3xl
            lg:text-6xl
            font-black
            leading-tight
          "
        >
          Real-time AI strategic
          intelligence feed.
        </h3>

      </div>

      <div className="space-y-6">

        {signals.map((signal) => (
          <div
            key={signal.title}
            className="
              rounded-3xl
              border
              border-zinc-800
              bg-zinc-950/40
              p-7
            "
          >

            <p
              className="
                text-zinc-500
                text-sm
                mb-4
              "
            >
              {signal.category}
            </p>

            <h4
              className="
                text-2xl
                font-black
                leading-relaxed
              "
            >
              {signal.title}
            </h4>

          </div>
        ))}

      </div>

    </div>
  );
}