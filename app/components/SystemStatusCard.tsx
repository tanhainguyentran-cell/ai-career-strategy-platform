type Props = {
  title: string;

  status: string;

  description: string;
};

export default function SystemStatusCard({
  title,
  status,
  description,
}: Props) {
  const active =
    status === "Operational";

  return (
    <div
      className="
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900/40
        p-6
      "
    >

      <div className="flex items-center justify-between mb-6">

        <h3 className="text-xl font-bold">
          {title}
        </h3>

        <div className="flex items-center gap-2">

          <div
            className={`
              w-2
              h-2
              rounded-full
              animate-pulse
              ${
                active
                  ? "bg-green-400"
                  : "bg-yellow-400"
              }
            `}
          />

          <span
            className={`
              text-sm
              ${
                active
                  ? "text-green-400"
                  : "text-yellow-400"
              }
            `}
          >
            {status}
          </span>

        </div>

      </div>

      <p className="text-zinc-400 leading-relaxed">
        {description}
      </p>

    </div>
  );
}