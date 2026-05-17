import AIInsightMiniCard from "@/app/components/AIInsightMiniCard";

type Props = {
  company: string;

  mode: string;

  step: string;
};

export default function AIInsightsBar({
  company,
  mode,
  step,
}: Props) {
  return (
    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-3
        gap-4
      "
    >

      <AIInsightMiniCard
        label="Target Company"
        value={
          company ||
          "Not Selected"
        }
      />

      <AIInsightMiniCard
        label="Analysis Mode"
        value={mode}
      />

      <AIInsightMiniCard
        label="Framework Step"
        value={step}
      />

    </div>
  );
}