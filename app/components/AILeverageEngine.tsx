const engines = [
  {
    title: "AI Learning Loops",
    description:
      "Continuously expanding strategic and technical capability through adaptive systems.",
  },

  {
    title: "Execution Systems",
    description:
      "Transforming strategic intent into measurable career acceleration outputs.",
  },

  {
    title: "Market Positioning",
    description:
      "Optimizing long-term professional differentiation and visibility.",
  },

  {
    title: "Leadership Evolution",
    description:
      "Scaling influence, decision-making, and cross-functional adaptability.",
  },
];

export default function AILeverageEngine() {
  return (
    <div
      className="
        rounded-[40px]
        border
        border-zinc-800
        bg-gradient-to-br
        from-zinc-950
        via-black
        to-zinc-950
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
          Leverage Engine
        </p>

        <h3
          className="
            text-3xl
            lg:text-5xl
            font-black
            leading-tight
          "
        >
          Strategic leverage
          amplification systems.
        </h3>

      </div>

      <div className="space-y-5">

        {engines.map((engine) => (
          <div
            key={engine.title}
            className="
              rounded-2xl
              border
              border-zinc-800
              bg-black/40
              p-6
            "
          >

            <h4
              className="
                text-2xl
                font-black
                mb-4
              "
            >
              {engine.title}
            </h4>

            <p
              className="
                text-zinc-400
                leading-relaxed
              "
            >
              {engine.description}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}