const decisions = [
  {
    title: "Prioritize AI leadership skills",
    impact: "High Impact",
  },

  {
    title: "Expand strategic visibility",
    impact: "Long-term Growth",
  },

  {
    title: "Optimize execution systems",
    impact: "Efficiency Gain",
  },

  {
    title: "Increase cross-functional leverage",
    impact: "Strategic Expansion",
  },
];

export default function AIDecisionEngine() {
  return (
    <div
      className="
        rounded-[64px]
        border
        border-zinc-800
        bg-gradient-to-br
        from-black
        via-zinc-950
        to-black
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
          Decision Engine
        </p>

        <h3
          className="
            text-3xl
            lg:text-6xl
            font-black
            leading-tight
          "
        >
          AI-generated strategic
          decision intelligence.
        </h3>

      </div>

      <div className="space-y-6">

        {decisions.map((decision) => (
          <div
            key={decision.title}
            className="
              rounded-3xl
              border
              border-zinc-800
              bg-black/40
              p-7
            "
          >

            <div
              className="
                flex
                flex-col
                lg:flex-row
                lg:items-center
                lg:justify-between
                gap-5
              "
            >

              <h4
                className="
                  text-2xl
                  font-black
                "
              >
                {decision.title}
              </h4>

              <div
                className="
                  rounded-full
                  border
                  border-zinc-700
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-zinc-300
                "
              >
                {decision.impact}
              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}