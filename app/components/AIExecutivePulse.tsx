const metrics = [
  {
    label: "Strategic Alignment",
    value: "97%",
  },

  {
    label: "Leadership Signal",
    value: "92%",
  },

  {
    label: "AI Capability",
    value: "95%",
  },

  {
    label: "Execution Velocity",
    value: "89%",
  },
];

export default function AIExecutivePulse() {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[40px]
        border
        border-zinc-800
        bg-gradient-to-br
        from-black
        via-zinc-950
        to-black
        p-8
      "
    >

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_40%)]
        "
      />

      <div className="relative z-10">

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
            Executive Pulse
          </p>

          <h3
            className="
              text-3xl
              lg:text-5xl
              font-black
              leading-tight
            "
          >
            Real-time executive
            intelligence indicators.
          </h3>

        </div>

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-5
          "
        >

          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="
                rounded-2xl
                border
                border-zinc-800
                bg-black/40
                p-6
              "
            >

              <p
                className="
                  text-zinc-500
                  text-sm
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
          ))}

        </div>

      </div>

    </div>
  );
}