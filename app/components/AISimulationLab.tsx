const simulations = [
  {
    title:
      "AI-native leadership trajectory",
    probability: "92%",
  },

  {
    title:
      "Strategic execution optimization",
    probability: "88%",
  },

  {
    title:
      "Cross-functional leverage expansion",
    probability: "84%",
  },

  {
    title:
      "Long-term positioning dominance",
    probability: "90%",
  },
];

export default function AISimulationLab() {
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
          Simulation Lab
        </p>

        <h3
          className="
            text-3xl
            lg:text-6xl
            font-black
            leading-tight
          "
        >
          AI-powered strategic
          scenario simulation engine.
        </h3>

      </div>

      <div className="space-y-6">

        {simulations.map((simulation) => (
          <div
            key={simulation.title}
            className="
              rounded-3xl
              border
              border-zinc-800
              bg-black/40
              p-7
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
              "
            >

              <h4
                className="
                  text-2xl
                  font-black
                "
              >
                {simulation.title}
              </h4>

              <div
                className="
                  rounded-full
                  border
                  border-zinc-700
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-zinc-300
                "
              >
                Success Probability:{" "}
                {simulation.probability}
              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}