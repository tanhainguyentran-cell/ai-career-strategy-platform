export default function StrategicUniverse() {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[48px]
        border
        border-zinc-800
        bg-black
        h-[620px]
      "
    >

      <div
        className="
          absolute
          inset-0
          opacity-[0.05]
        "
        style={{
          backgroundImage: `
            radial-gradient(circle, white 1px, transparent 1px)
          `,
          backgroundSize:
            "40px 40px",
        }}
      />

      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[320px]
          h-[320px]
          rounded-full
          border
          border-white/20
        "
      />

      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[520px]
          h-[520px]
          rounded-full
          border
          border-white/10
        "
      />

      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-10
          h-10
          rounded-full
          bg-white
          shadow-[0_0_60px_rgba(255,255,255,0.8)]
        "
      />

      <div
        className="
          absolute
          top-[20%]
          left-[32%]
          w-6
          h-6
          rounded-full
          bg-white
        "
      />

      <div
        className="
          absolute
          bottom-[18%]
          right-[28%]
          w-8
          h-8
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
        Strategic Intelligence Universe
      </div>

    </div>
  );
}