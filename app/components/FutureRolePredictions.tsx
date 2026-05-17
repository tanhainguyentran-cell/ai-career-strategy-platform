const roles = [
  {
    title:
      "Strategic Operations Lead",
    probability: "94%",
  },

  {
    title:
      "AI Transformation Manager",
    probability: "88%",
  },

  {
    title:
      "Business Intelligence Strategist",
    probability: "91%",
  },

  {
    title:
      "Innovation Program Lead",
    probability: "84%",
  },
];

export default function FutureRolePredictions() {
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
          AI Career Forecasting
        </p>

        <h3 className="text-4xl font-black">
          Future Role Predictions
        </h3>

      </div>

      <div className="space-y-5">

        {roles.map((role) => (
          <div
            key={role.title}
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
                bg-[radial-gradient(circle_at_left,rgba(255,255,255,0.05),transparent_60%)]
                pointer-events-none
              "
            />

            <div
              className="
                relative
                z-10
                flex
                items-center
                justify-between
              "
            >

              <div>

                <h4
                  className="
                    text-2xl
                    font-bold
                    mb-2
                  "
                >
                  {role.title}
                </h4>

                <p className="text-zinc-500">
                  AI compatibility estimate
                </p>

              </div>

              <div
                className="
                  text-4xl
                  font-black
                "
              >
                {role.probability}
              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}