const trajectory = [
  {
    phase: "Current Position",
    status: "Foundation Established",
  },

  {
    phase: "Strategic Expansion",
    status: "In Progress",
  },

  {
    phase: "Leadership Positioning",
    status: "Projected",
  },

  {
    phase: "Executive-Level Impact",
    status: "Future Potential",
  },
];

export default function StrategicTrajectory() {
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
          Strategic Projection
        </p>

        <h3 className="text-4xl font-black">
          Career Trajectory Forecast
        </h3>

      </div>

      <div className="relative">

        <div
          className="
            absolute
            left-[18px]
            top-0
            bottom-0
            w-px
            bg-zinc-800
          "
        />

        <div className="space-y-8">

          {trajectory.map((item) => (
            <div
              key={item.phase}
              className="
                relative
                pl-14
              "
            >

              <div
                className="
                  absolute
                  left-0
                  top-1
                  w-10
                  h-10
                  rounded-full
                  border
                  border-zinc-700
                  bg-zinc-900
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

              <div
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

                  <p
                    className="
                      text-zinc-500
                      text-sm
                      mb-3
                    "
                  >
                    {item.status}
                  </p>

                  <h4
                    className="
                      text-2xl
                      font-black
                    "
                  >
                    {item.phase}
                  </h4>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}