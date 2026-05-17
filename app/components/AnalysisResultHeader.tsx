import AnalysisModeBadge from "@/app/components/AnalysisModeBadge";

type Props = {
  company: string;
  mode: string;
};

export default function AnalysisResultHeader({
  company,
  mode,
}: Props) {
  return (
    <div className="space-y-6 mb-10">

      <div className="flex flex-wrap items-center gap-4">

        <AnalysisModeBadge
          mode={mode}
        />

        <div
          className="
            h-1
            w-1
            rounded-full
            bg-zinc-700
          "
        />

        <p className="text-zinc-500 text-sm">
          AI Generated Strategic Intelligence
        </p>

      </div>

      <div>

        <p className="text-zinc-500 uppercase tracking-[0.25em] text-xs mb-4">
          Analysis Result
        </p>

        <h2 className="text-5xl font-bold break-words mb-6">
          {company}
        </h2>

        <p className="text-zinc-400 leading-relaxed max-w-3xl text-lg">
          Personalized AI-generated hiring strategy,
          competitive positioning insights, and career
          optimization roadmap tailored to your target
          company and selected analysis mode.
        </p>

      </div>

    </div>
  );
}