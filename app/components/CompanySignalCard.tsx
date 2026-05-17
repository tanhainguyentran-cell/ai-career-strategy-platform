type Props = {
  title: string;

  value: string;

  description: string;
};

export default function CompanySignalCard({
  title,
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
          bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_60%)]
          pointer-events-none
        "
      />

      <div className="relative z-10">

        <div className="mb-6">

          <p
            className="
              text-zinc-500
              uppercase
              tracking-[0.2em]
              text-xs
              mb-3
            "
          >
            {title}
          </p>

          <h3
            className="
              text-5xl
              font-black
            "
          >
            {value}
          </h3>

        </div>

        <p className="text-zinc-400 leading-relaxed">
          {description}
        </p>

      </div>

    </div>
  );
}