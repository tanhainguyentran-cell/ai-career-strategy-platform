const roadmap = [
  {
    phase: "Phase 1",
    title: "AI Capability Foundation",
    timeline: "Month 1 - 2",
  },

  {
    phase: "Phase 2",
    title: "Strategic Execution System",
    timeline: "Month 3 - 4",
  },

  {
    phase: "Phase 3",
    title: "Leadership Positioning",
    timeline: "Month 5 - 6",
  },

  {
    phase: "Phase 4",
    title: "Compounding Career Leverage",
    timeline: "Month 7 - 12",
  },
];

export default function AIRoadmapTimeline() {
  return (
    <div
      className="
        rounded-[40px]
        border
        border-zinc-800
        bg-black
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
          SMART Roadmap
        </p>

        <h3
          className="
            text-3xl
            lg:text-5xl
            font-black
            leading-tight
          "
        >
          AI-generated strategic
          career execution roadmap.
        </h3>

      </div>

      <div className="space-y-8">

        {roadmap.map((item, index) => (
          <div
            key={item.phase}
            className="
              flex
              gap-5
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
                  h-14
                  w-14
                  rounded-full
                  bg-white
                  text-black
                  font-black
                  flex
                  items-center
                  justify-center
                "
              >
                {index + 1}
              </div>

              {index !==
                roadmap.length - 1 && (
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
                bg-zinc-950/40
                p-6
              "
            >

              <p
                className="
                  text-zinc-500
                  text-sm
                  mb-3
                "
              >
                {item.phase}
              </p>

              <h4
                className="
                  text-2xl
                  font-black
                  mb-4
                "
              >
                {item.title}
              </h4>

              <p className="text-zinc-400">
                {item.timeline}
              </p>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}