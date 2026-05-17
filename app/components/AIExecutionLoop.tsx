const loop = [
  {
    phase: "Analyze",
    description:
      "AI evaluates strategic positioning and market signals.",
  },

  {
    phase: "Plan",
    description:
      "Generate adaptive execution and growth strategies.",
  },

  {
    phase: "Execute",
    description:
      "Deploy measurable strategic actions consistently.",
  },

  {
    phase: "Reflect",
    description:
      "Review performance, leverage, and learning loops.",
  },

  {
    phase: "Optimize",
    description:
      "Continuously improve systems and positioning.",
  },
];

export default function AIExecutionLoop() {
  return (
    <div
      className="
        rounded-[72px]
        border
        border-zinc-800
        bg-gradient-to-br
        from-black
        via-zinc-950
        to-black
        p-10
      "
    >

      <div className="mb-16">

        <p
          className="
            text-zinc-500
            uppercase
            tracking-[0.5em]
            text-xs
            mb-4
          "
        >
          Execution Loop
        </p>

        <h3
          className="
            text-3xl
            lg:text-6xl
            font-black
            leading-tight
          "
        >
          AI-powered strategic
          execution feedback loop.
        </h3>

      </div>

      <div className="space-y-8">

        {loop.map((item, index) => (
          <div
            key={item.phase}
            className="
              flex
              gap-6
            "
          >

            <div
              className="
                flex
                flex-col
                items-center
              "
            >

              <div
                className="
                  h-16
                  w-16
                  rounded-full
                  bg-white
                  text-black
                  font-black
                  flex
                  items-center
                  justify-center
                  text-lg
                "
              >
                {index + 1}
              </div>

              {index !==
                loop.length - 1 && (
                <div
                  className="
                    w-[2px]
                    flex-1
                    bg-zinc-800
                    mt-4
                  "
                />
              )}

            </div>

            <div
              className="
                flex-1
                rounded-3xl
                border
                border-zinc-800
                bg-black/40
                p-7
              "
            >

              <h4
                className="
                  text-3xl
                  font-black
                  mb-4
                "
              >
                {item.phase}
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

          </div>
        ))}

      </div>

    </div>
  );
}