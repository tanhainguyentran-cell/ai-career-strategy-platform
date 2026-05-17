const learningPaths = [
  {
    title:
      "Strategic Communication",
    progress: 72,
  },

  {
    title:
      "Leadership & Influence",
    progress: 64,
  },

  {
    title:
      "AI & Business Strategy",
    progress: 81,
  },

  {
    title:
      "Execution Systems",
    progress: 76,
  },
];

export default function AdaptiveLearningPanel() {
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
          Adaptive Learning
        </p>

        <h3 className="text-4xl font-black">
          AI Skill Development Paths
        </h3>

      </div>

      <div className="space-y-5">

        {learningPaths.map((path) => (
          <div
            key={path.title}
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

                <h4
                  className="
                    text-2xl
                    font-bold
                  "
                >
                  {path.title}
                </h4>

                <p className="text-zinc-500">
                  {path.progress}%
                </p>

              </div>

              <div
                className="
                  h-3
                  rounded-full
                  bg-black/50
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
                    width: `${path.progress}%`,
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