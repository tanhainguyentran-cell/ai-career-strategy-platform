type Props = {
  company: string;
};

export default function AnalysisHeader({
  company,
}: Props) {
  return (
    <div className="mb-8">

      <p className="text-zinc-500 uppercase tracking-[0.25em] text-xs mb-4">
        AI Strategic Analysis
      </p>

      <h2 className="text-4xl font-bold mb-4 break-words">
        {company || "Target Company"}
      </h2>

      <p className="text-zinc-400 leading-relaxed max-w-3xl">
        Personalized strategic hiring intelligence
        generated based on your profile, target
        company positioning, and career roadmap
        framework.
      </p>

    </div>
  );
}