const matrix = [
  {
    title: "Strengths",
    items: [
      "AI adaptability",
      "Strategic thinking",
      "Execution discipline",
    ],
  },

  {
    title: "Weaknesses",
    items: [
      "Limited visibility",
      "Network scaling",
      "Leadership exposure",
    ],
  },

  {
    title: "Opportunities",
    items: [
      "AI economy growth",
      "Leadership demand",
      "Cross-functional expansion",
    ],
  },

  {
    title: "Threats",
    items: [
      "Rapid market shifts",
      "AI disruption",
      "Competitive saturation",
    ],
  },
];

export default function AIStrategyMatrix() {
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

      <div className="mb-12">

        <p
          className="
            text-zinc-500
            uppercase
            tracking-[0.3em]
            text-xs
            mb-4
          "
        >
          Strategic Matrix
        </p>

        <h3
          className="
            text-3xl
            lg:text-5xl
            font-black
            leading-tight
          "
        >
          Interactive SWOT/TOWS
          strategic intelligence board.
        </h3>

      </div>

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-6
        "
      >

        {matrix.map((section) => (
          <div
            key={section.title}
            className="
              rounded-3xl
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
                mb-6
              "
            >
              {section.title}
            </h4>

            <div className="space-y-4">

              {section.items.map((item) => (
                <div
                  key={item}
                  className="
                    rounded-2xl
                    border
                    border-zinc-800
                    bg-zinc-950/50
                    px-5
                    py-4
                  "
                >
                  {item}
                </div>
              ))}

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}
