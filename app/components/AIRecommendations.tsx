import AIRecommendationCard from "@/app/components/AIRecommendationCard";

export default function AIRecommendations() {
  const recommendations = [
    {
      title:
        "Strengthen Strategic Thinking",

      description:
        "Focus on business case analysis, structured problem solving, and market reasoning to improve alignment with strategic hiring expectations.",
    },

    {
      title:
        "Increase Industry Visibility",

      description:
        "Build stronger positioning through LinkedIn thought leadership, portfolio projects, and targeted networking activities.",
    },

    {
      title:
        "Optimize Interview Readiness",

      description:
        "Prepare scenario-based behavioral stories and measurable achievement narratives aligned with company culture.",
    },
  ];

  return (
    <div className="space-y-6">

      <div>

        <p className="text-zinc-500 uppercase tracking-[0.25em] text-xs mb-4">
          AI Insights
        </p>

        <h3 className="text-3xl font-bold">
          Strategic Recommendations
        </h3>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

        {recommendations.map((item) => (
          <AIRecommendationCard
            key={item.title}
            title={item.title}
            description={
              item.description
            }
          />
        ))}

      </div>

    </div>
  );
}