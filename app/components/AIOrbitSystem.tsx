export default function AIOrbitSystem() {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[56px]
        border
        border-zinc-800
        bg-black
        h-[720px]
        flex
        items-center
        justify-center
      "
    >

      <div
        className="
          absolute
          w-[620px]
          h-[620px]
          rounded-full
          border
          border-white/[0.06]
        "
      />

      <div
        className="
          absolute
          w-[420px]
          h-[420px]
          rounded-full
          border
          border-white/[0.08]
        "
      />

      <div
        className="
          absolute
          w-[220px]
          h-[220px]
          rounded-full
          border
          border-white/[0.1]
        "
      />

      <div
        className="
          absolute
          w-10
          h-10
          rounded-full
          bg-white
          shadow-[0_0_80px_rgba(255,255,255,0.9)]
        "
      />

      <div
        className="
          absolute
          top-[140px]
          left-1/2
          -translate-x-1/2
          w-6
          h-6
          rounded-full
          bg-white
        "
      />

      <div
        className="
          absolute
          bottom-[150px]
          right-[240px]
          w-5
          h-5
          rounded-full
          bg-white
        "
      />

      <div
        className="
          absolute
          bottom-[170px]
          left-[260px]
          w-4
          h-4
          rounded-full
          bg-white
        "
      />

      <div
        className="
          absolute
          top-10
          left-10
          text-zinc-500
          uppercase
          tracking-[0.25em]
          text-xs
        "
      >
        AI Strategic Orbit System
      </div>

    </div>
  );
}