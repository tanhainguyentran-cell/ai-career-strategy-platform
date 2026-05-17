const insights = [
  "AI-driven professionals outperform static career paths.",

  "Execution consistency compounds strategic leverage.",

  "Adaptive positioning creates long-term hiring resilience.",

  "Personal branding is now a dynamic intelligence system.",

  "AI fluency is becoming a foundational business capability.",

  "Career growth increasingly follows data-driven optimization loops.",
];

export default function StrategicInsightWall() {
  return (
    <div
      className="
        rounded-[40px]
        border
        border-zinc-800
        bg-zinc-950/60
        p-8
      "
    >

      <div className="mb-10">

        <p
          className="
            text-zinc-500
            uppercase
            tracking-[0.25em]
            text-xs
            mb-4
          "
        >
          Strategic Insights
        </p>

        <h3
          className="
            text-3xl
            lg:text-5xl
            font-black
            leading-tight
          "
        >
          Intelligence patterns
          shaping the AI economy.
        </h3>

      </div>

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-5
        "
      >

        {insights.map((insight) => (
          <div
            key={insight}
            className="
              rounded-2xl
              border
              border-zinc-800
              bg-black/40
              px-6
              py-5
            "
          >

            <p
              className="
                text-zinc-300
                leading-relaxed
              "
            >
              {insight}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}