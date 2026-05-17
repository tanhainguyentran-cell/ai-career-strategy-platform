type Props = {
  label: string;
  active?: boolean;
};

export default function StatusPill({
  label,
  active = false,
}: Props) {
  return (
    <div
      className={`
        inline-flex
        items-center
        gap-2
        px-4
        py-2
        rounded-full
        border
        text-sm
        transition-all
        ${
          active
            ? `
              bg-white
              text-black
              border-white
            `
            : `
              bg-zinc-900/70
              text-zinc-400
              border-zinc-800
            `
        }
      `}
    >

      <div
        className={`
          w-2
          h-2
          rounded-full
          ${
            active
              ? "bg-black"
              : "bg-zinc-500"
          }
        `}
      />

      <span>{label}</span>

    </div>
  );
}