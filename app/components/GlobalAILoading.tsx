"use client";

type Props = {
  visible: boolean;
};

export default function GlobalAILoading({
  visible,
}: Props) {
  if (!visible) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        bg-black/70
        backdrop-blur-xl
      "
    >

      <div
        className="
          rounded-[32px]
          border
          border-zinc-800
          bg-zinc-950
          px-10
          py-8
          text-center
        "
      >

        <div
          className="
            mx-auto
            mb-6
            h-14
            w-14
            animate-spin
            rounded-full
            border-4
            border-zinc-700
            border-t-white
          "
        />

        <h2
          className="
            text-2xl
            font-black
            mb-3
          "
        >
          AI Strategic Engine
        </h2>

        <p className="text-zinc-400">
          Processing strategic intelligence...
        </p>

      </div>

    </div>
  );
}