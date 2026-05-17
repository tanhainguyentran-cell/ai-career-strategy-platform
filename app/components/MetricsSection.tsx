import MetricCard from "@/app/components/MetricCard";

export default function MetricsSection() {
  const metrics = [
    {
      label: "AI Accuracy",
      value: "94%",
      description:
        "Strategic recommendation relevance based on hiring optimization framework.",
    },

    {
      label: "Career Match",
      value: "87%",
      description:
        "Estimated alignment between your profile and target company expectations.",
    },

    {
      label: "Execution Readiness",
      value: "91%",
      description:
        "Roadmap completeness across skills, interview prep, and hiring strategy.",
    },

    {
      label: "Competitive Edge",
      value: "+32%",
      description:
        "Potential increase in differentiation against average candidates.",
    },
  ];

  return (
    <div className="space-y-6">

      <div>

        <p className="text-zinc-500 uppercase tracking-[0.25em] text-xs mb-4">
          Performance Metrics
        </p>

        <h3 className="text-3xl font-bold">
          AI Strategic Metrics
        </h3>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

        {metrics.map((metric) => (
          <MetricCard
            key={metric.label}
            label={metric.label}
            value={metric.value}
            description={
              metric.description
            }
          />
        ))}

      </div>

    </div>
  );
}