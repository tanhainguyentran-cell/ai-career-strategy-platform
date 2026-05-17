type Props = {
  onCopy: () => void;
};

export default function ResultActionBar({
  onCopy,
}: Props) {
  return (
    <div
      className="
        flex
        flex-wrap
        items-center
        justify-between
        gap-4
        mb-8
        p-5
        rounded-2xl
        border
        border-zinc-800
        bg-zinc-900/60
      "
    >

      <div>

        <p className="text-zinc-500 text-sm mb-1">
          AI Analysis Result
        </p>

        <h3 className="text-xl font-bold">
          Strategic Intelligence Generated
        </h3>

      </div>

      <button
        onClick={onCopy}
        className="
          px-5
          py-3
          rounded-xl
          bg-white
          text-black
          font-semibold
          hover:scale-[1.02]
          transition-all
          duration-300
        "
      >
        Copy Result
      </button>

    </div>
  );
}