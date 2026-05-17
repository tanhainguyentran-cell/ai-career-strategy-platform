const roadmap = [
  {
    month: "Month 1",
    title:
      "Strategic Positioning",
  },

  {
    month: "Month 2",
    title:
      "Portfolio Optimization",
  },

  {
    month: "Month 3",
    title:
      "Interview Simulation",
  },

  {
    month: "Month 4",
    title:
      "Leadership Branding",
  },

  {
    month: "Month 5",
    title:
      "Execution Validation",
  },
];

export default function ExecutionRoadmapPreview() {
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
          SMART Roadmap
        </p>

        <h3 className="text-4xl font-black">
          Execution Timeline Preview
        </h3>

      </div>

      <div className="space-y-5">

        {roadmap.map((item) => (
          <div
            key={item.month}
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
                bg-[radial-gradient(circle_at_left,rgba(255,255,255,0.05),transparent_55%)]
                pointer-events-none
              "
            />

            <div
              className="
                relative
                z-10
                flex
                items-center
                justify-between
              "
            >

              <div>

                <p
                  className="
                    text-zinc-500
                    text-sm
                    mb-2
                  "
                >
                  {item.month}
                </p>

                <h4
                  className="
                    text-2xl
                    font-bold
                  "
                >
                  {item.title}
                </h4>

              </div>

              <div
                className="
                  w-4
                  h-4
                  rounded-full
                  bg-white
                  animate-pulse
                "
              />

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}