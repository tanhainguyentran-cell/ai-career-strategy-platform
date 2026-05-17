"use client";

type Props = {
  onAnalyze: () => void;

  onCopy: () => void;

  disabled?: boolean;
};

export default function FloatingDock({
  onAnalyze,
  onCopy,
  disabled = false,
}: Props) {
  return (
    <div
      className="
        fixed
        left-1/2
        bottom-6
        -translate-x-1/2
        z-50
      "
    >

      <div
        className="
          flex
          items-center
          gap-3
          px-4
          py-3
          rounded-[28px]
          border
          border-zinc-800
          bg-black/80
          backdrop-blur-2xl
          shadow-2xl
        "
      >

        <button
          onClick={onAnalyze}
          disabled={disabled}
          className="
            px-5
            py-3
            rounded-2xl
            bg-white
            text-black
            font-semibold
            hover:scale-105
            transition-all
            duration-300
            disabled:opacity-40
          "
        >
          Run Analysis
        </button>

        <button
          onClick={onCopy}
          className="
            px-5
            py-3
            rounded-2xl
            border
            border-zinc-700
            hover:bg-zinc-900
            transition-all
            duration-300
          "
        >
          Copy Result
        </button>

      </div>

    </div>
  );
}