const timeline = [
  {
    title:
      "Macro Environment Scan",
    description:
      "AI evaluates industry dynamics, market pressure, and external strategic forces.",
  },

  {
    title:
      "Corporate DNA Mapping",
    description:
      "Analyze competitive positioning, strategic priorities, and internal resources.",
  },

  {
    title:
      "Hiring Intelligence",
    description:
      "Decode competency expectations, organizational culture, and hiring signals.",
  },

  {
    title:
      "Personal Strategy",
    description:
      "Build differentiation strategy aligned with target company priorities.",
  },

  {
    title:
      "SMART Roadmap",
    description:
      "Generate measurable execution roadmap and interview preparation milestones.",
  },
];

export default function AnalysisTimeline() {
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
          AI Workflow
        </p>

        <h3 className="text-4xl font-black">
          Strategic Analysis Timeline
        </h3>

      </div>

      <div className="relative">

        <div
          className="
            absolute
            left-[11px]
            top-0
            bottom-0
            w-[2px]
            bg-zinc-800
          "
        />

        <div className="space-y-10">

          {timeline.map((item, index) => (
            <div
              key={item.title}
              className="
                relative
                pl-12
              "
            >

              <div
                className="
                  absolute
                  left-0
                  top-1
                  w-6
                  h-6
                  rounded-full
                  border
                  border-zinc-700
                  bg-black
                  flex
                  items-center
                  justify-center
                "
              >

                <div
                  className="
                    w-2
                    h-2
                    rounded-full
                    bg-white
                  "
                />

              </div>

              <div>

                <p
                  className="
                    text-zinc-500
                    text-sm
                    mb-2
                  "
                >
                  STEP {index + 1}
                </p>

                <h4
                  className="
                    text-2xl
                    font-bold
                    mb-3
                  "
                >
                  {item.title}
                </h4>

                <p className="text-zinc-400 leading-relaxed">
                  {item.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}