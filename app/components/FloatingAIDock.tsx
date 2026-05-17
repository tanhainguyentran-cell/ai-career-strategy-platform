"use client";

type Props = {
  onOpenCommands: () => void;
};

export default function FloatingAIDock({
  onOpenCommands,
}: Props) {
  return (
    <div
      className="
        fixed
        bottom-6
        left-1/2
        z-[9999]
        flex
        -translate-x-1/2
        items-center
        gap-3
        rounded-[28px]
        border
        border-zinc-800
        bg-zinc-950/90
        px-4
        py-3
        backdrop-blur-2xl
        shadow-2xl
      "
    >

      <button
        onClick={onOpenCommands}
        className="
          rounded-2xl
          bg-white
          px-5
          py-3
          text-sm
          font-black
          text-black
          transition-all
          hover:scale-105
        "
      >
        AI Command Center
      </button>

      <div
        className="
          h-8
          w-px
          bg-zinc-800
        "
      />

      <div
        className="
          flex
          items-center
          gap-2
          text-xs
          uppercase
          tracking-[0.25em]
          text-zinc-500
        "
      >
        AI Workspace Active
      </div>

    </div>
  );
}