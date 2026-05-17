type Props = {
  company: string;

  setCompany: (
    value: string
  ) => void;

  onAnalyze: () => void;

  isAnalyzing: boolean;
};

export default function CompanyInputHero({
  company,
  setCompany,
  onAnalyze,
  isAnalyzing,
}: Props) {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[36px]
        border
        border-zinc-800
        bg-zinc-900/40
        p-8
      "
    >

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.06),transparent_40%)]
          pointer-events-none
        "
      />

      <div className="relative z-10">

        <div className="mb-8">

          <p className="text-zinc-500 text-sm mb-3">
            Target Company
          </p>

          <h3 className="text-3xl font-black">
            Start Strategic Analysis
          </h3>

        </div>

        <div className="flex flex-col lg:flex-row gap-4">

          <input
            value={company}
            onChange={(e) =>
              setCompany(
                e.target.value
              )
            }
            placeholder="Enter target company..."
            className="
              flex-1
              h-16
              px-6
              rounded-2xl
              border
              border-zinc-800
              bg-black/50
              outline-none
              focus:border-zinc-600
              transition-all
              text-lg
            "
          />

          <button
            onClick={onAnalyze}
            disabled={isAnalyzing}
            className="
              h-16
              px-8
              rounded-2xl
              bg-white
              text-black
              font-bold
              hover:scale-[1.02]
              transition-all
              duration-300
              disabled:opacity-40
            "
          >
            {isAnalyzing
              ? "Analyzing..."
              : "Run AI Analysis"}
          </button>

        </div>

      </div>

    </div>
  );
}