const momentum = [
  {
    title: "AI Positioning",
    description:
      "Strengthening long-term competitive differentiation in the AI economy.",
  },

  {
    title: "Execution Discipline",
    description:
      "Building systems that compound strategic professional leverage over time.",
  },

  {
    title: "Leadership Evolution",
    description:
      "Expanding influence and adaptability across high-performance environments.",
  },

  {
    title: "Strategic Visibility",
    description:
      "Increasing market relevance through intelligent positioning and execution.",
  },
];

export default function StrategicMomentumGrid() {
  return (
    <div
      className="
        rounded-[40px]
        border
        border-zinc-800
        bg-zinc-950/50
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
          Strategic Momentum
        </p>

        <h3
          className="
            text-3xl
            lg:text-5xl
            font-black
            leading-tight
          "
        >
          Compounding career
          momentum systems.
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

        {momentum.map((item) => (
          <div
            key={item.title}
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
              {item.title}
            </h4>

            <p
              className="
                text-zinc-400
                leading-relaxed
              "
            >
              {item.description}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}