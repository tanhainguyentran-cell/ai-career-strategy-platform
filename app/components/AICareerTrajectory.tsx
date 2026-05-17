const trajectory = [
  "AI Skill Expansion",
  "Leadership Positioning",
  "Strategic Visibility",
  "Execution Optimization",
  "Long-term Career Leverage",
];

export default function AICareerTrajectory() {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[40px]
        border
        border-zinc-800
        bg-gradient-to-br
        from-black
        via-zinc-950
        to-black
        p-8
      "
    >

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_45%)]
        "
      />

      <div className="relative z-10">

        <div className="mb-10">

          <p
            className="
              text-zinc-500
              uppercase
              tracking-[0.25em]
              text-xs
              mb-4
            "
          >
            Career Trajectory
          </p>

          <h3
            className="
              text-3xl
              lg:text-5xl
              font-black
              leading-tight
            "
          >
            AI-guided long-term
            professional evolution.
          </h3>

        </div>

        <div className="space-y-6">

          {trajectory.map((item, index) => (
            <div
              key={item}
              className="
                flex
                items-center
                gap-5
              "
            >

              <div
                className="
                  flex
                  items-center
                  justify-center
                  h-12
                  w-12
                  rounded-full
                  border
                  border-zinc-700
                  bg-zinc-900
                  font-black
                "
              >
                {index + 1}
              </div>

              <div
                className="
                  flex-1
                  rounded-2xl
                  border
                  border-zinc-800
                  bg-black/40
                  px-6
                  py-5
                "
              >
                <p className="font-semibold">
                  {item}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}