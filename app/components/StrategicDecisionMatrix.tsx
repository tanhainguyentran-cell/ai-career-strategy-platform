const decisions = [
  {
    title: "Skill Investment",
    impact: "High",
    timeline: "Long-term",
  },

  {
    title: "AI Capability Adoption",
    impact: "Critical",
    timeline: "Immediate",
  },

  {
    title: "Leadership Expansion",
    impact: "High",
    timeline: "Mid-term",
  },

  {
    title: "Execution Optimization",
    impact: "Critical",
    timeline: "Continuous",
  },
];

export default function StrategicDecisionMatrix() {
  return (
    <div
      className="
        rounded-[40px]
        border
        border-zinc-800
        bg-black
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
          Decision Matrix
        </p>

        <h3
          className="
            text-3xl
            lg:text-5xl
            font-black
            leading-tight
          "
        >
          Strategic decision
          prioritization engine.
        </h3>

      </div>

      <div className="space-y-5">

        {decisions.map((decision) => (
          <div
            key={decision.title}
            className="
              flex
              flex-col
              lg:flex-row
              lg:items-center
              lg:justify-between
              gap-5
              rounded-2xl
              border
              border-zinc-800
              bg-zinc-950/50
              p-6
            "
          >

            <div>

              <h4
                className="
                  text-2xl
                  font-black
                  mb-2
                "
              >
                {decision.title}
              </h4>

              <p className="text-zinc-500">
                Timeline: {decision.timeline}
              </p>

            </div>

            <div
              className="
                rounded-full
                border
                border-zinc-700
                px-5
                py-3
                text-sm
                text-zinc-300
              "
            >
              Impact: {decision.impact}
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}