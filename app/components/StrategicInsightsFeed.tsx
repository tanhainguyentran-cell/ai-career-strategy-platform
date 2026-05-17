"use client";

const insights = [
  {
    title:
      "AI Hiring Trend Shift",

    content:
      "Companies are increasingly prioritizing AI-native productivity skills over traditional execution workflows.",
  },

  {
    title:
      "Strategic Interview Insight",

    content:
      "Behavioral storytelling quality strongly influences perceived leadership potential during interviews.",
  },

  {
    title:
      "Execution Optimization",

    content:
      "Candidates with measurable project outputs outperform certificate-focused applicants in AI-era hiring pipelines.",
  },

  {
    title:
      "Networking Intelligence",

    content:
      "Warm referrals dramatically increase interview probability for competitive strategic roles.",
  },

  {
    title:
      "AI Leverage Opportunity",

    content:
      "Demonstrating AI-assisted workflow optimization creates strong differentiation in modern hiring environments.",
  },
];

export default function StrategicInsightsFeed() {
  return (
    <div
      className="
        mt-10
        rounded-[32px]
        border
        border-zinc-800
        bg-zinc-950/40
        p-8
      "
    >

      <div className="mb-8">

        <p
          className="
            text-xs
            uppercase
            tracking-[0.3em]
            text-zinc-500
            mb-3
          "
        >
          AI Strategic Feed
        </p>

        <h2
          className="
            text-4xl
            font-black
            mb-4
          "
        >
          Strategic Insights
        </h2>

        <p className="text-zinc-400">
          AI-generated strategic intelligence
          personalized for career growth.
        </p>

      </div>

      <div className="space-y-5">

        {insights.map((insight) => (
          <div
            key={insight.title}
            className="
              rounded-3xl
              border
              border-zinc-800
              bg-black
              p-6
            "
          >

            <h3
              className="
                text-2xl
                font-black
                mb-3
              "
            >
              {insight.title}
            </h3>

            <p
              className="
                leading-relaxed
                text-zinc-400
              "
            >
              {insight.content}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}