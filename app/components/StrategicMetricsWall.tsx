const metrics = [
  {
    value: "94%",
    label: "Hiring Probability",
  },

  {
    value: "91%",
    label: "Leadership Potential",
  },

  {
    value: "88%",
    label: "Strategic Alignment",
  },

  {
    value: "96%",
    label: "Execution Momentum",
  },

  {
    value: "89%",
    label: "Innovation Readiness",
  },

  {
    value: "93%",
    label: "Adaptive Capability",
  },
];

export default function StrategicMetricsWall() {
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
          Intelligence Metrics
        </p>

        <h3 className="text-4xl font-black">
          Strategic Metrics Wall
        </h3>

      </div>

      <div
        className="
          grid
          grid-cols-2
          lg:grid-cols-3
          gap-6
        "
      >

        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-zinc-800
              bg-zinc-900/40
              p-7
            "
          >

            <div
              className="
                absolute
                inset-0
                bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_60%)]
                pointer-events-none
              "
            />

            <div className="relative z-10">

              <h4
                className="
                  text-5xl
                  font-black
                  mb-4
                "
              >
                {metric.value}
              </h4>

              <p className="text-zinc-400">
                {metric.label}
              </p>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}