type Props = {
  onCopy: () => void;

  onAnalyze: () => void;

  disabled?: boolean;
};

export default function AISnapshotActions({
  onCopy,
  onAnalyze,
  disabled = false,
}: Props) {
  return (
    <div
      className="
        flex
        flex-col
        md:flex-row
        gap-4
        rounded-[32px]
        border
        border-zinc-800
        bg-zinc-900/40
        p-6
      "
    >
      <button
        onClick={onAnalyze}
        disabled={disabled}
        className="
          flex-1
          rounded-2xl
          bg-white
          px-6
          py-4
          font-black
          text-black
          transition-all
          duration-300
          hover:scale-[1.02]
          disabled:opacity-40
        "
      >
        Refresh AI Analysis
      </button>

      <button
        onClick={onCopy}
        className="
          flex-1
          rounded-2xl
          border
          border-zinc-700
          bg-black/40
          px-6
          py-4
          font-bold
          text-zinc-300
          transition-all
          duration-300
          hover:bg-zinc-900
        "
      >
        Copy Strategic Snapshot
      </button>
    </div>
  );
}