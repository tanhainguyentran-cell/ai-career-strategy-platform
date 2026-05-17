type Props = {
  title: string;

  value: string;

  insight: string;
};

export default function AIExecutiveSummaryCard({
  title,
  value,
  insight,
}: Props) {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900/40
        p-7
      "
    >

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_60%)]
          pointer-events-none
        "
      />

      <div className="relative z-10">

        <p
          className="
            text-zinc-500
            uppercase
            tracking-[0.2em]
            text-xs
            mb-4
          "
        >
          {title}
        </p>

        <h3
          className="
            text-5xl
            font-black
            mb-5
          "
        >
          {value}
        </h3>

        <p className="text-zinc-400 leading-relaxed">
          {insight}
        </p>

      </div>

    </div>
  );
}