const optimizations = [
  {
    title:
      "Executive Communication",
    improvement: "+24%",
  },

  {
    title:
      "Strategic Positioning",
    improvement: "+31%",
  },

  {
    title:
      "Leadership Narrative",
    improvement: "+18%",
  },

  {
    title:
      "Interview Readiness",
    improvement: "+27%",
  },
];

export default function AIOptimizationEngine() {
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
          Optimization Engine
        </p>

        <h3 className="text-4xl font-black">
          AI Performance Optimization
        </h3>

      </div>

      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-6
        "
      >

        {optimizations.map((item) => (
          <div
            key={item.title}
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
                bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_60%)]
                pointer-events-none
              "
            />

            <div className="relative z-10">

              <p
                className="
                  text-zinc-500
                  uppercase
                  tracking-[0.2em]
                  text-xs
                  mb-4
                "
              >
                Optimization Area
              </p>

              <h4
                className="
                  text-3xl
                  font-black
                  mb-4
                "
              >
                {item.title}
              </h4>

              <div
                className="
                  inline-flex
                  items-center
                  gap-3
                  px-4
                  py-3
                  rounded-2xl
                  border
                  border-zinc-700
                  bg-black/40
                "
              >

                <div
                  className="
                    w-3
                    h-3
                    rounded-full
                    bg-white
                    animate-pulse
                  "
                />

                <p
                  className="
                    text-2xl
                    font-black
                  "
                >
                  {item.improvement}
                </p>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}