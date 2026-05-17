const evolution = [
  {
    year: "2025",
    title:
      "AI Career Intelligence",
  },

  {
    year: "2026",
    title:
      "Adaptive Strategic Systems",
  },

  {
    year: "2027",
    title:
      "Predictive Leadership Modeling",
  },

  {
    year: "2028",
    title:
      "Autonomous Career Optimization",
  },
];

export default function AIEvolutionTimeline() {
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
          AI Evolution
        </p>

        <h3 className="text-4xl font-black">
          Strategic Intelligence Evolution Timeline
        </h3>

      </div>

      <div className="relative">

        <div
          className="
            absolute
            left-0
            right-0
            top-1/2
            h-px
            bg-zinc-800
          "
        />

        <div
          className="
            relative
            grid
            grid-cols-1
            lg:grid-cols-4
            gap-8
          "
        >

          {evolution.map((item) => (
            <div
              key={item.year}
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-zinc-800
                bg-zinc-900/40
                p-7
              "
            >

              <div
                className="
                  absolute
                  inset-0
                  bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_60%)]
                  pointer-events-none
                "
              />

              <div className="relative z-10">

                <div
                  className="
                    w-5
                    h-5
                    rounded-full
                    bg-white
                    mb-6
                  "
                />

                <p
                  className="
                    text-zinc-500
                    text-sm
                    mb-3
                  "
                >
                  {item.year}
                </p>

                <h4
                  className="
                    text-2xl
                    font-black
                  "
                >
                  {item.title}
                </h4>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}