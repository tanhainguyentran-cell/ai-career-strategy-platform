const kpis = [
  {
    label: "AI Skill Growth",
    value: "+24%",
  },

  {
    label: "Execution Efficiency",
    value: "+18%",
  },

  {
    label: "Leadership Expansion",
    value: "+12%",
  },

  {
    label: "Strategic Visibility",
    value: "+31%",
  },
];

export default function AIKPIDashboard() {
  return (
    <div
      className="
        rounded-[48px]
        border
        border-zinc-800
        bg-black
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
          KPI Dashboard
        </p>

        <h3
          className="
            text-3xl
            lg:text-6xl
            font-black
            leading-tight
          "
        >
          Strategic performance
          intelligence metrics.
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

        {kpis.map((kpi) => (
          <div
            key={kpi.label}
            className="
              rounded-3xl
              border
              border-zinc-800
              bg-zinc-950/40
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
              {kpi.label}
            </p>

            <h4
              className="
                text-6xl
                font-black
              "
            >
              {kpi.value}
            </h4>

          </div>
        ))}

      </div>

    </div>
  );
}