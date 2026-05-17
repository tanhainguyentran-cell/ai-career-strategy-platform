export default function AIEnergyField() {
  return (
    <div
      className="
        fixed
        inset-0
        overflow-hidden
        pointer-events-none
        z-[1]
      "
    >

      <div
        className="
          absolute
          top-[18%]
          left-[22%]
          w-[520px]
          h-[520px]
          rounded-full
          bg-white/[0.015]
          blur-[160px]
        "
      />

      <div
        className="
          absolute
          bottom-[10%]
          right-[16%]
          w-[620px]
          h-[620px]
          rounded-full
          bg-white/[0.02]
          blur-[180px]
        "
      />

      <div
        className="
          absolute
          top-[48%]
          left-[52%]
          -translate-x-1/2
          -translate-y-1/2
          w-[340px]
          h-[340px]
          rounded-full
          border
          border-white/[0.04]
        "
      />

    </div>
  );
}