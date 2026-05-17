export default function AIQuantumLayer() {
  return (
    <div
      className="
        fixed
        inset-0
        pointer-events-none
        z-[1]
        overflow-hidden
      "
    >

      <div
        className="
          absolute
          top-[14%]
          left-[18%]
          w-[2px]
          h-[240px]
          bg-gradient-to-b
          from-transparent
          via-white/20
          to-transparent
          rotate-12
        "
      />

      <div
        className="
          absolute
          bottom-[10%]
          right-[22%]
          w-[2px]
          h-[320px]
          bg-gradient-to-b
          from-transparent
          via-white/15
          to-transparent
          -rotate-12
        "
      />

      <div
        className="
          absolute
          top-[48%]
          left-[52%]
          w-[260px]
          h-[260px]
          rounded-full
          border
          border-white/[0.05]
        "
      />

      <div
        className="
          absolute
          top-[50%]
          left-[50%]
          -translate-x-1/2
          -translate-y-1/2
          w-[140px]
          h-[140px]
          rounded-full
          border
          border-white/[0.08]
        "
      />

    </div>
  );
}