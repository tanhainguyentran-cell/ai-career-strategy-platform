type Props = {
  children: React.ReactNode;
};

export default function Badge({
  children,
}: Props) {
  return (
    <div
      className="
        inline-flex
        items-center
        gap-2
        px-4
        py-2
        rounded-full
        border
        border-zinc-800
        bg-zinc-900/70
        backdrop-blur
        text-sm
        text-zinc-300
      "
    >

      <div className="w-2 h-2 rounded-full bg-white" />

      <span>{children}</span>

    </div>
  );
}