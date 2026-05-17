const executiveMetrics = [
  {
    label: "Hiring Probability",
    value: "94%",
  },

  {
    label: "Leadership Potential",
    value: "91%",
  },

  {
    label: "Execution Readiness",
    value: "89%",
  },

  {
    label: "Strategic Adaptability",
    value: "93%",
  },
];

export default function AIExecutiveDashboard() {
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
          Executive Intelligence
        </p>

        <h3 className="text-4xl font-black">
          AI Executive Dashboard
        </h3>

      </div>

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-4
          gap-6
        "
      >

        {executiveMetrics.map((metric) => (
          <div
            key={metric.label}
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
                bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_60%)]
                pointer-events-none
              "
            />

            <div className="relative z-10">

              <p
                className="
                  text-zinc-500
                  uppercase
                  tracking-[0.2em]
                  text-xs
                  mb-4
                "
              >
                {metric.label}
              </p>

              <h4
                className="
                  text-5xl
                  font-black
                "
              >
                {metric.value}
              </h4>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}