const companies = [
  {
    name: "OpenAI",
    signal: "High AI Innovation",
    score: "97",
  },

  {
    name: "Google",
    signal: "Strong Leadership Ecosystem",
    score: "93",
  },

  {
    name: "Microsoft",
    signal: "Enterprise AI Expansion",
    score: "95",
  },

  {
    name: "Amazon",
    signal: "Execution-driven Culture",
    score: "89",
  },
];

export default function AICompanyIntelligence() {
  return (
    <div
      className="
        rounded-[40px]
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
            tracking-[0.3em]
            text-xs
            mb-4
          "
        >
          Company Intelligence
        </p>

        <h3
          className="
            text-3xl
            lg:text-5xl
            font-black
            leading-tight
          "
        >
          AI-powered company
          strategic intelligence dashboard.
        </h3>

      </div>

      <div className="space-y-5">

        {companies.map((company) => (
          <div
            key={company.name}
            className="
              flex
              flex-col
              lg:flex-row
              lg:items-center
              lg:justify-between
              gap-5
              rounded-3xl
              border
              border-zinc-800
              bg-zinc-950/40
              p-6
            "
          >

            <div>

              <h4
                className="
                  text-2xl
                  font-black
                  mb-3
                "
              >
                {company.name}
              </h4>

              <p className="text-zinc-500">
                {company.signal}
              </p>

            </div>

            <div
              className="
                flex
                items-center
                justify-center
                h-20
                w-20
                rounded-full
                border
                border-zinc-700
                text-2xl
                font-black
              "
            >
              {company.score}
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}