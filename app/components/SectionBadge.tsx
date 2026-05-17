type Props = {
  text: string;
};

export default function SectionBadge({
  text,
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
        bg-zinc-900/50
        backdrop-blur-xl
      "
    >

      <div
        className="
          w-2
          h-2
          rounded-full
          bg-white
          animate-pulse
        "
      />

      <p
        className="
          text-xs
          uppercase
          tracking-[0.2em]
          text-zinc-400
        "
      >
        {text}
      </p>

    </div>
  );
}