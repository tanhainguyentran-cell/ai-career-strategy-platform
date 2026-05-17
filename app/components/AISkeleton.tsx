"use client";

export default function AISkeleton() {
  return (
    <div
      className="
        mt-8
        animate-pulse
        space-y-5
      "
    >

      <div
        className="
          h-8
          w-1/3
          rounded-xl
          bg-zinc-800
        "
      />

      <div
        className="
          h-5
          w-full
          rounded-xl
          bg-zinc-900
        "
      />

      <div
        className="
          h-5
          w-5/6
          rounded-xl
          bg-zinc-900
        "
      />

      <div
        className="
          h-5
          w-4/6
          rounded-xl
          bg-zinc-900
        "
      />

      <div
        className="
          h-40
          rounded-3xl
          bg-zinc-950
          border
          border-zinc-800
        "
      />

    </div>
  );
}