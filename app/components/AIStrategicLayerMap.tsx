const layers = [
  {
    title: "Intelligence Layer",
    description:
      "Analyzes signals, market trends, and positioning data.",
  },

  {
    title: "Execution Layer",
    description:
      "Transforms strategic plans into measurable actions.",
  },

  {
    title: "Growth Layer",
    description:
      "Compounds capability, adaptability, and leverage.",
  },

  {
    title: "Leadership Layer",
    description:
      "Builds influence and strategic visibility.",
  },

  {
    title: "Optimization Layer",
    description:
      "Continuously improves systems and execution loops.",
  },

  {
    title: "Evolution Layer",
    description:
      "Enables AI-native strategic transformation.",
  },
];

export default function AIStrategicLayerMap() {
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
          Strategic Layer Map
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
          architecture layers.
        </h3>

      </div>

      <div className="space-y-6">

        {layers.map((layer, index) => (
          <div
            key={layer.title}
            className="
              rounded-3xl
              border
              border-zinc-800
              bg-zinc-950/40
              p-8
            "
          >

            <div
              className="
                flex
                flex-col
                lg:flex-row
                lg:items-center
                lg:justify-between
                gap-5
                mb-5
              "
            >

              <h4
                className="
                  text-3xl
                  font-black
                "
              >
                {index + 1}. {layer.title}
              </h4>

            </div>

            <p
              className="
                text-zinc-400
                leading-relaxed
              "
            >
              {layer.description}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}