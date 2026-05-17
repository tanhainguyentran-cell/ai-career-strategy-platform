import AIExecutiveSummaryCard from "@/app/components/AIExecutiveSummaryCard";

export default function AIExecutiveSummaryGrid() {
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
          Executive Summary Metrics
        </p>

        <h3 className="text-4xl font-black">
          Strategic Executive Snapshot
        </h3>

      </div>

      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-3
          gap-6
        "
      >

        <AIExecutiveSummaryCard
          title="Hiring Probability"
          value="94%"
          insight="AI indicates strong compatibility with adaptive and innovation-driven organizations."
        />

        <AIExecutiveSummaryCard
          title="Strategic Readiness"
          value="91%"
          insight="Current strategic positioning demonstrates high long-term executive growth potential."
        />

        <AIExecutiveSummaryCard
          title="Leadership Alignment"
          value="89%"
          insight="Leadership communication and execution capability exceed estimated market averages."
        />

      </div>

    </div>
  );
}