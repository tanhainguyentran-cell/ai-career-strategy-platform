const modules = [
  {
    title: "Execution Engine",
    description:
      "Transforms strategic intent into measurable outputs.",
  },

  {
    title: "AI Intelligence Layer",
    description:
      "Continuously analyzes strategic career signals.",
  },

  {
    title: "Leadership System",
    description:
      "Builds long-term influence and adaptability.",
  },

  {
    title: "Strategic Learning Loop",
    description:
      "Compounds knowledge and execution capability.",
  },

  {
    title: "Positioning Architecture",
    description:
      "Optimizes long-term market differentiation.",
  },

  {
    title: "Adaptive Growth Engine",
    description:
      "Enables continuous AI-native evolution.",
  },
];

export default function AIStrategicOS() {
  return (
    <div
      className="
        rounded-[56px]
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
            tracking-[0.4em]
            text-xs
            mb-4
          "
        >
          Strategic Operating System
        </p>

        <h3
          className="
            text-3xl
            lg:text-6xl
            font-black
            leading-tight
          "
        >
          AI-native strategic
          operating architecture.
        </h3>

      </div>

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-6
        "
      >

        {modules.map((module) => (
          <div
            key={module.title}
            className="
              rounded-3xl
              border
              border-zinc-800
              bg-zinc-950/40
              p-8
            "
          >

            <h4
              className="
                text-2xl
                font-black
                mb-5
              "
            >
              {module.title}
            </h4>

            <p
              className="
                text-zinc-400
                leading-relaxed
              "
            >
              {module.description}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}