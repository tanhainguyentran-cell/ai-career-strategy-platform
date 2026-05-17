type Props = {
  text: string;

  active?: boolean;
};

export default function AIStatusPill({
  text,
  active = true,
}: Props) {
  return (
    <div
      className="
        inline-flex
        items-center
        gap-3
        px-4
        py-2
        rounded-full
        border
        border-zinc-800
        bg-black/60
        backdrop-blur-xl
      "
    >

      <div className="relative">

        <div
          className={`
            w-2
            h-2
            rounded-full
            ${
              active
                ? "bg-green-400"
                : "bg-yellow-400"
            }
          `}
        />

        <div
          className={`
            absolute
            inset-0
            rounded-full
            animate-ping
            opacity-60
            ${
              active
                ? "bg-green-400"
                : "bg-yellow-400"
            }
          `}
        />

      </div>

      <p
        className="
          text-xs
          uppercase
          tracking-[0.2em]
          text-zinc-300
        "
      >
        {text}
      </p>

    </div>
  );
}