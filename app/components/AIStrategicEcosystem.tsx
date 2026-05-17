const ecosystem = [
  {
    title: "AI Intelligence",
    description:
      "Continuously analyzes market, career, and leadership signals.",
  },

  {
    title: "Execution Infrastructure",
    description:
      "Transforms plans into measurable strategic outputs.",
  },

  {
    title: "Strategic Positioning",
    description:
      "Builds differentiated long-term professional leverage.",
  },

  {
    title: "Adaptive Learning",
    description:
      "Compounds AI-native learning and capability growth.",
  },

  {
    title: "Leadership Evolution",
    description:
      "Expands influence and cross-functional adaptability.",
  },

  {
    title: "Compounding Systems",
    description:
      "Creates reinforcing loops of growth and strategic advantage.",
  },
];

export default function AIStrategicEcosystem() {
  return (
    <div
      className="
        rounded-[80px]
        border
        border-zinc-800
        bg-black
        p-10
      "
    >

      <div className="mb-16">

        <p
          className="
            text-zinc-500
            uppercase
            tracking-[0.55em]
            text-xs
            mb-4
          "
        >
          Strategic Ecosystem
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
          ecosystem architecture.
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

        {ecosystem.map((item) => (
          <div
            key={item.title}
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
                text-3xl
                font-black
                mb-5
              "
            >
              {item.title}
            </h4>

            <p
              className="
                text-zinc-400
                leading-relaxed
              "
            >
              {item.description}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}