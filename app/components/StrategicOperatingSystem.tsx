const systems = [
  {
    title:
      "Career Intelligence Layer",
    description:
      "Continuously analyzes hiring signals, market transformation, and strategic organizational trends.",
  },

  {
    title:
      "Adaptive Positioning Engine",
    description:
      "Dynamically optimizes communication, branding, and executive positioning strategies.",
  },

  {
    title:
      "Execution Management System",
    description:
      "Transforms strategic recommendations into measurable SMART execution roadmaps.",
  },

  {
    title:
      "Long-Term Growth Forecasting",
    description:
      "Projects future career trajectory and strategic leadership potential over time.",
  },
];

export default function StrategicOperatingSystem() {
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
          Strategic Architecture
        </p>

        <h3 className="text-4xl font-black">
          AI Career Operating System
        </h3>

      </div>

      <div className="space-y-6">

        {systems.map((system) => (
          <div
            key={system.title}
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
                bg-[radial-gradient(circle_at_left,rgba(255,255,255,0.05),transparent_60%)]
                pointer-events-none
              "
            />

            <div className="relative z-10">

              <div
                className="
                  flex
                  items-center
                  gap-4
                  mb-5
                "
              >

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
                  "
                >
                  {system.title}
                </h4>

              </div>

              <p className="text-zinc-400 leading-relaxed">
                {system.description}
              </p>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}