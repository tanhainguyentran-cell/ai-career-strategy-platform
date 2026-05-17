type Props = {
  title: string;

  value: string;

  description: string;
};

export default function StrategicSignalCard({
  title,
  value,
  description,
}: Props) {
  return (
    <div
      className="
        rounded-[32px]
        border
        border-zinc-800
        bg-zinc-900/40
        p-7
        transition-all
        duration-300
        hover:border-zinc-600
      "
    >
      <p
        className="
          text-xs
          uppercase
          tracking-[0.25em]
          text-zinc-500
          mb-5
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

      <p
        className="
          text-zinc-400
          leading-relaxed
        "
      >
        {description}
      </p>
    </div>
  );
}