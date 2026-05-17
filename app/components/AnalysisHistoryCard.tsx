type Props = {
  company: string;

  mode: string;

  date: string;

  onClick?: () => void;
};

export default function AnalysisHistoryCard({
  company,
  mode,
  date,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className="
        w-full
        text-left
        p-5
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900/40
        hover:bg-zinc-900
        hover:border-zinc-700
        transition-all
        duration-300
      "
    >

      <div className="flex items-start justify-between gap-4">

        <div>

          <p className="text-zinc-500 text-sm mb-3">
            {date}
          </p>

          <h3 className="text-xl font-bold mb-3">
            {company}
          </h3>

          <p className="text-zinc-400">
            {mode}
          </p>

        </div>

        <div
          className="
            w-3
            h-3
            rounded-full
            bg-white/70
            mt-2
          "
        />

      </div>

    </button>
  );
}