type Props = {
  value: number;
};

export default function AIConfidenceBar({
  value,
}: Props) {
  return (
    <div className="space-y-4">

      <div className="flex items-center justify-between">

        <p
          className="
            text-zinc-400
            uppercase
            tracking-[0.2em]
            text-xs
          "
        >
          AI Confidence Score
        </p>

        <p className="text-zinc-500">
          {value}%
        </p>

      </div>

      <div
        className="
          h-3
          rounded-full
          overflow-hidden
          bg-zinc-900
        "
      >

        <div
          className="
            h-full
            rounded-full
            bg-gradient-to-r
            from-white
            to-zinc-500
            transition-all
            duration-1000
          "
          style={{
            width: `${value}%`,
          }}
        />

      </div>

    </div>
  );
}