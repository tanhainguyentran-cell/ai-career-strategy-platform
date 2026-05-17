const pillars = [
  {
    title:
      "Strategic Thinking",
    description:
      "Build long-term positioning and systems-level decision-making capability.",
  },

  {
    title:
      "Execution Systems",
    description:
      "Develop measurable execution frameworks and operational discipline.",
  },

  {
    title:
      "Leadership Presence",
    description:
      "Strengthen influence, communication, and executive-level positioning.",
  },

  {
    title:
      "Adaptive Intelligence",
    description:
      "Continuously evolve with changing market and organizational dynamics.",
  },
];

export default function StrategicPillars() {
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
          Strategic Foundations
        </p>

        <h3 className="text-4xl font-black">
          AI Career Growth Pillars
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

        {pillars.map((pillar) => (
          <div
            key={pillar.title}
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
                  w-12
                  h-12
                  rounded-2xl
                  border
                  border-zinc-700
                  bg-zinc-800/40
                  flex
                  items-center
                  justify-center
                  mb-6
                "
              >

                <div
                  className="
                    w-3
                    h-3
                    rounded-full
                    bg-white
                  "
                />

              </div>

              <h4
                className="
                  text-2xl
                  font-black
                  mb-4
                "
              >
                {pillar.title}
              </h4>

              <p className="text-zinc-400 leading-relaxed">
                {pillar.description}
              </p>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}