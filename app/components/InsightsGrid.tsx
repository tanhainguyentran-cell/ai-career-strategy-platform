import InsightCard from "@/app/components/InsightCard";

type Props = {
  company: string;
  step: string;
  mode: string;
};

export default function InsightsGrid({
  company,
  step,
  mode,
}: Props) {
  const insights = [
    {
      title: "Target Company",
      value:
        company || "Not Selected",
    },

    {
      title: "Current Framework",
      value: step,
    },

    {
      title: "Analysis Mode",
      value: mode,
    },

    {
      title: "AI Status",
      value: "Strategic Intelligence Ready",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-10">

      {insights.map((item) => (
        <InsightCard
          key={item.title}
          title={item.title}
          value={item.value}
        />
      ))}

    </div>
  );
}