const history = [
  {
    company: "Google",
    date: "2026 Strategic Analysis",
  },

  {
    company: "Microsoft",
    date: "AI Leadership Review",
  },

  {
    company: "OpenAI",
    date: "Execution Capability Scan",
  },

  {
    company: "Amazon",
    date: "Strategic Hiring Intelligence",
  },
];

export default function AIAnalysisHistory() {
  return (
    <div
      className="
        rounded-[40px]
        border
        border-zinc-800
        bg-zinc-950/50
        p-8
      "
    >

      <div className="mb-10">

        <p
          className="
            text-zinc-500
            uppercase
            tracking-[0.3em]
            text-xs
            mb-4
          "
        >
          Analysis History
        </p>

        <h3
          className="
            text-3xl
            lg:text-5xl
            font-black
            leading-tight
          "
        >
          Saved strategic
          intelligence reports.
        </h3>

      </div>

      <div className="space-y-5">

        {history.map((item) => (
          <div
            key={item.company}
            className="
              flex
              flex-col
              lg:flex-row
              lg:items-center
              lg:justify-between
              gap-5
              rounded-2xl
              border
              border-zinc-800
              bg-black/40
              px-6
              py-5
            "
          >

            <div>

              <h4
                className="
                  text-2xl
                  font-black
                  mb-2
                "
              >
                {item.company}
              </h4>

              <p className="text-zinc-500">
                {item.date}
              </p>

            </div>

            <button
              className="
                rounded-2xl
                border
                border-zinc-700
                px-5
                py-3
                text-sm
                font-semibold
                text-zinc-300
                transition-all
                duration-300
                hover:bg-zinc-900
              "
            >
              Open Analysis
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}