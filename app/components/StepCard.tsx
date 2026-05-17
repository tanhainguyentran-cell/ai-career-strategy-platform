type Props = {
  title: string;
  description: string;
  active?: boolean;
  onClick?: () => void;
};

export default function StepCard({
  title,
  description,
  active,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full
        text-left
        rounded-3xl
        p-5
        border
        backdrop-blur
        transition-all
        duration-300
        hover:scale-[1.02]
        ${
          active
            ? `
              bg-white
              text-black
              border-white
              shadow-2xl
            `
            : `
              bg-zinc-900/60
              text-white
              border-zinc-800
              hover:bg-zinc-900
            `
        }
      `}
    >

      <div className="flex items-start justify-between gap-4">

        <div>

          <h3 className="text-lg font-bold mb-2">
            {title}
          </h3>

          <p
            className={`
              text-sm
              leading-relaxed
              ${
                active
                  ? "text-black/70"
                  : "text-zinc-400"
              }
            `}
          >
            {description}
          </p>

        </div>

        <div
          className={`
            w-3
            h-3
            rounded-full
            mt-2
            ${
              active
                ? "bg-black"
                : "bg-zinc-600"
            }
          `}
        />

      </div>

    </button>
  );
}