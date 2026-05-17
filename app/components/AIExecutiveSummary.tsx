const summaries = [
  {
    title: "Strategic Positioning",
    description:
      "Your profile demonstrates strong alignment with future-oriented AI-driven market dynamics.",
  },

  {
    title: "Execution Readiness",
    description:
      "Current systems indicate high operational consistency and adaptive execution capability.",
  },

  {
    title: "Leadership Potential",
    description:
      "AI analysis predicts strong leverage potential across cross-functional leadership environments.",
  },
];

export default function AIExecutiveSummary() {
  return (
    <div
      className="
        rounded-[48px]
        border
        border-zinc-800
        bg-gradient-to-br
        from-zinc-950
        via-black
        to-zinc-950
        p-8
      "
    >

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
          Executive Summary
        </p>

        <h3
          className="
            text-3xl
            lg:text-5xl
            font-black
            leading-tight
          "
        >
          AI-generated strategic
          executive overview.
        </h3>

      </div>

      <div className="space-y-6">

        {summaries.map((summary) => (
          <div
            key={summary.title}
            className="
              rounded-2xl
              border
              border-zinc-800
              bg-black/40
              p-6
            "
          >

            <h4
              className="
                text-2xl
                font-black
                mb-4
              "
            >
              {summary.title}
            </h4>

            <p
              className="
                text-zinc-400
                leading-relaxed
              "
            >
              {summary.description}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}