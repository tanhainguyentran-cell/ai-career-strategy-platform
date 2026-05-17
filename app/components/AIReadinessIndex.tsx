const readiness = [
  {
    category:
      "Leadership Readiness",
    score: 91,
  },

  {
    category:
      "Strategic Communication",
    score: 87,
  },

  {
    category:
      "Execution Capability",
    score: 94,
  },

  {
    category:
      "Innovation Adaptability",
    score: 89,
  },

  {
    category:
      "Organizational Alignment",
    score: 92,
  },
];

export default function AIReadinessIndex() {
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
          Readiness Intelligence
        </p>

        <h3 className="text-4xl font-black">
          AI Readiness Index
        </h3>

      </div>

      <div className="space-y-5">

        {readiness.map((item) => (
          <div
            key={item.category}
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-zinc-800
              bg-zinc-900/40
              p-6
            "
          >

            <div
              className="
                absolute
                inset-0
                bg-[radial-gradient(circle_at_left,rgba(255,255,255,0.05),transparent_60%)]
                pointer-events-none
              "
            />

            <div className="relative z-10">

              <div className="flex items-center justify-between mb-5">

                <p className="text-zinc-300">
                  {item.category}
                </p>

                <p
                  className="
                    text-3xl
                    font-black
                  "
                >
                  {item.score}
                </p>

              </div>

              <div
                className="
                  h-3
                  rounded-full
                  bg-black/40
                  overflow-hidden
                "
              >

                <div
                  className="
                    h-full
                    rounded-full
                    bg-gradient-to-r
                    from-white
                    to-zinc-500
                  "
                  style={{
                    width: `${item.score}%`,
                  }}
                />

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}