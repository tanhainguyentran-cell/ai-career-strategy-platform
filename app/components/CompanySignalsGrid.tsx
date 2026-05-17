import CompanySignalCard from "@/app/components/CompanySignalCard";

export default function CompanySignalsGrid() {
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
          Company Intelligence
        </p>

        <h3 className="text-4xl font-black">
          Organizational Signal Analysis
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

        <CompanySignalCard
          title="Leadership Adaptability"
          value="92%"
          description="AI-estimated organizational adaptability toward future market and industry transformation."
        />

        <CompanySignalCard
          title="Innovation Capacity"
          value="88%"
          description="Assessment of innovation momentum, experimentation culture, and strategic reinvention capability."
        />

        <CompanySignalCard
          title="Talent Density"
          value="91%"
          description="Estimated concentration of high-performing talent and strategic execution capability."
        />

      </div>

    </div>
  );
}