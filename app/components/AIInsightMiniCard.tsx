type Props = {
  label: string;

  value: string;
};

export default function AIInsightMiniCard({
  label,
  value,
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
        p-6
      "
    >

      <div
        className="
          absolute
          inset-0
          opacity-0
          hover:opacity-100
          transition-opacity
          duration-500
          bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]
          pointer-events-none
        "
      />

      <div className="relative z-10">

        <p
          className="
            text-zinc-500
            text-sm
            uppercase
            tracking-[0.2em]
            mb-4
          "
        >
          {label}
        </p>

        <h3
          className="
            text-3xl
            font-black
          "
        >
          {value}
        </h3>

      </div>

    </div>
  );
}