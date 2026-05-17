type Props = {
  label: string;

  value: string;

  description: string;
};

export default function MetricCard({
  label,
  value,
  description,
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
          bg-gradient-to-br
          from-white/[0.03]
          to-transparent
          pointer-events-none
        "
      />

      <div className="relative z-10">

        <p className="text-zinc-500 text-sm mb-4">
          {label}
        </p>

        <h3 className="text-4xl font-black mb-4">
          {value}
        </h3>

        <p className="text-zinc-400 leading-relaxed">
          {description}
        </p>

      </div>

    </div>
  );
}