const commands = [
  {
    label: "AI Intelligence",
    value: "ACTIVE",
  },

  {
    label: "Execution System",
    value: "OPTIMIZING",
  },

  {
    label: "Leadership Expansion",
    value: "SCALING",
  },

  {
    label: "Strategic Positioning",
    value: "MONITORING",
  },

  {
    label: "Learning Loop",
    value: "COMPOUNDING",
  },

  {
    label: "Adaptive Growth",
    value: "EVOLVING",
  },
];

export default function AIStrategicCommandCenter() {
  return (
    <div
      className="
        rounded-[64px]
        border
        border-zinc-800
        bg-gradient-to-br
        from-black
        via-zinc-950
        to-black
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
          Strategic Command Center
        </p>

        <h3
          className="
            text-3xl
            lg:text-6xl
            font-black
            leading-tight
          "
        >
          Centralized AI-native
          strategic control system.
        </h3>

      </div>

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-6
        "
      >

        {commands.map((command) => (
          <div
            key={command.label}
            className="
              rounded-3xl
              border
              border-zinc-800
              bg-black/40
              p-8
            "
          >

            <p
              className="
                text-zinc-500
                text-sm
                mb-5
              "
            >
              {command.label}
            </p>

            <h4
              className="
                text-3xl
                font-black
              "
            >
              {command.value}
            </h4>

          </div>
        ))}

      </div>

    </div>
  );
}