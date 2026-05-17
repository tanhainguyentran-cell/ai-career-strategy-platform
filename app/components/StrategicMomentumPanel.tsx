const momentum = [
  {
    label: "Leadership Momentum",
    value: "High",
  },

  {
    label: "Strategic Adaptability",
    value: "Excellent",
  },

  {
    label: "Execution Potential",
    value: "Strong",
  },

  {
    label: "Innovation Readiness",
    value: "Advanced",
  },
];

export default function StrategicMomentumPanel() {
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
          Momentum Intelligence
        </p>

        <h3 className="text-4xl font-black">
          Strategic Momentum Assessment
        </h3>

      </div>

      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-6
        "
      >

        {momentum.map((item) => (
          <div
            key={item.label}
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
                bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_60%)]
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
                {item.label}
              </p>

              <h4
                className="
                  text-4xl
                  font-black
                "
              >
                {item.value}
              </h4>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}