const systems = [
  {
    title: "AI Strategy Engine",
    status: "Online",
  },

  {
    title: "Execution Tracker",
    status: "Active",
  },

  {
    title: "Leadership Intelligence",
    status: "Optimizing",
  },

  {
    title: "Career Positioning System",
    status: "Monitoring",
  },

  {
    title: "Strategic Learning Loop",
    status: "Expanding",
  },
];

export default function AIMissionControl() {
  return (
    <div
      className="
        rounded-[48px]
        border
        border-zinc-800
        bg-gradient-to-br
        from-black
        via-zinc-950
        to-black
        p-8
      "
    >

      <div className="mb-12">

        <p
          className="
            text-zinc-500
            uppercase
            tracking-[0.35em]
            text-xs
            mb-4
          "
        >
          Mission Control
        </p>

        <h3
          className="
            text-3xl
            lg:text-6xl
            font-black
            leading-tight
          "
        >
          AI-powered career
          mission control center.
        </h3>

      </div>

      <div className="space-y-5">

        {systems.map((system) => (
          <div
            key={system.title}
            className="
              flex
              flex-col
              lg:flex-row
              lg:items-center
              lg:justify-between
              gap-5
              rounded-3xl
              border
              border-zinc-800
              bg-black/40
              px-6
              py-5
            "
          >

            <div className="flex items-center gap-5">

              <div
                className="
                  h-4
                  w-4
                  rounded-full
                  bg-white
                  animate-pulse
                "
              />

              <h4
                className="
                  text-2xl
                  font-black
                "
              >
                {system.title}
              </h4>

            </div>

            <div
              className="
                rounded-full
                border
                border-zinc-700
                px-5
                py-3
                text-sm
                font-semibold
                text-zinc-300
              "
            >
              {system.status}
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}