const capabilities = [
  {
    title: "Strategic Thinking",
    level: "Advanced",
  },

  {
    title: "AI Adaptability",
    level: "Elite",
  },

  {
    title: "Execution Discipline",
    level: "High",
  },

  {
    title: "Leadership Readiness",
    level: "Advanced",
  },

  {
    title: "Cross-functional Agility",
    level: "Strong",
  },

  {
    title: "Career Positioning",
    level: "Optimized",
  },
];

export default function StrategicCapabilityBoard() {
  return (
    <div
      className="
        rounded-[40px]
        border
        border-zinc-800
        bg-zinc-950/50
        p-8
      "
    >

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
          Capability Board
        </p>

        <h3
          className="
            text-3xl
            lg:text-5xl
            font-black
            leading-tight
          "
        >
          Strategic capability
          intelligence assessment.
        </h3>

      </div>

      <div className="space-y-5">

        {capabilities.map((capability) => (
          <div
            key={capability.title}
            className="
              flex
              items-center
              justify-between
              rounded-2xl
              border
              border-zinc-800
              bg-black/40
              px-6
              py-5
            "
          >

            <p className="font-semibold">
              {capability.title}
            </p>

            <div
              className="
                rounded-full
                border
                border-zinc-700
                px-4
                py-2
                text-sm
                text-zinc-300
              "
            >
              {capability.level}
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}