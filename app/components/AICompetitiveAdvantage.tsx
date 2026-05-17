const advantages = [
  {
    title:
      "Systems-Level Thinking",
    description:
      "Ability to analyze organizational ecosystems and make strategic long-term decisions.",
  },

  {
    title:
      "Adaptive Leadership",
    description:
      "Capability to evolve rapidly within uncertain and high-transformation environments.",
  },

  {
    title:
      "Execution Discipline",
    description:
      "Consistent conversion of strategic planning into measurable outcomes and operational progress.",
  },

  {
    title:
      "Strategic Communication",
    description:
      "Executive-level communication optimized for influence, clarity, and organizational alignment.",
  },
];

export default function AICompetitiveAdvantage() {
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
          Competitive Intelligence
        </p>

        <h3 className="text-4xl font-black">
          AI Competitive Advantages
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

        {advantages.map((advantage) => (
          <div
            key={advantage.title}
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
                bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_60%)]
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
                  bg-black/40
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
                {advantage.title}
              </h4>

              <p className="text-zinc-400 leading-relaxed">
                {advantage.description}
              </p>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}