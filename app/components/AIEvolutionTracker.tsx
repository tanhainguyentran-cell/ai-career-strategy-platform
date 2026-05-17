const evolution = [
  {
    phase: "Foundation",
    status: "Completed",
  },

  {
    phase: "Execution Expansion",
    status: "Active",
  },

  {
    phase: "Leadership Scaling",
    status: "In Progress",
  },

  {
    phase: "Strategic Positioning",
    status: "Optimizing",
  },

  {
    phase: "AI-native Evolution",
    status: "Compounding",
  },
];

export default function AIEvolutionTracker() {
  return (
    <div
      className="
        rounded-[64px]
        border
        border-zinc-800
        bg-black
        p-10
      "
    >

      <div className="mb-14">

        <p
          className="
            text-zinc-500
            uppercase
            tracking-[0.45em]
            text-xs
            mb-4
          "
        >
          Evolution Tracker
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
          evolution tracking system.
        </h3>

      </div>

      <div className="space-y-6">

        {evolution.map((item, index) => (
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
                evolution.length - 1 && (
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

              <h4
                className="
                  text-2xl
                  font-black
                  mb-3
                "
              >
                {item.phase}
              </h4>

              <p className="text-zinc-500">
                {item.status}
              </p>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}