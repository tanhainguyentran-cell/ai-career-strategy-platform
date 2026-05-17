"use client";

import AnalysisHistoryCard from "@/app/components/AnalysisHistoryCard";

const history = [
  {
    company: "Google",
    mode: "Strategic Analysis",
    date: "Today",
  },

  {
    company: "Microsoft",
    mode: "Interview Preparation",
    date: "Yesterday",
  },

  {
    company: "OpenAI",
    mode: "SMART Roadmap",
    date: "2 days ago",
  },
];

export default function AnalysisHistory() {
  return (
    <div className="space-y-6">

      <div>

        <p className="text-zinc-500 uppercase tracking-[0.25em] text-xs mb-4">
          Recent Activity
        </p>

        <h3 className="text-3xl font-bold">
          Analysis History
        </h3>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

        {history.map((item) => (
          <AnalysisHistoryCard
            key={`${item.company}-${item.date}`}
            company={item.company}
            mode={item.mode}
            date={item.date}
          />
        ))}

      </div>

    </div>
  );
}