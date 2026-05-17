import AnalysisScoreCard from "@/app/components/AnalysisScoreCard";

export default function AnalysisScoresGrid() {
  return (
    <div
      className="
        grid
        grid-cols-1
        lg:grid-cols-3
        gap-6
      "
    >

      <AnalysisScoreCard
        score={94}
        label="Hiring Probability"
        description="AI-estimated probability of successfully matching target company hiring expectations."
      />

      <AnalysisScoreCard
        score={88}
        label="Strategic Alignment"
        description="Alignment between your profile, company strategy, and long-term organizational direction."
      />

      <AnalysisScoreCard
        score={91}
        label="Execution Readiness"
        description="Overall readiness level for interviews, positioning, and execution roadmap implementation."
      />

    </div>
  );
}