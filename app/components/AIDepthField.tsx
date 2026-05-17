export default function AIDepthField() {
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
          inset-0
          bg-gradient-to-b
          from-transparent
          via-white/[0.01]
          to-transparent
        "
      />

      <div
        className="
          absolute
          top-[22%]
          left-[14%]
          w-[1px]
          h-[320px]
          bg-gradient-to-b
          from-transparent
          via-white/[0.12]
          to-transparent
        "
      />

      <div
        className="
          absolute
          top-[12%]
          right-[18%]
          w-[1px]
          h-[420px]
          bg-gradient-to-b
          from-transparent
          via-white/[0.08]
          to-transparent
        "
      />

      <div
        className="
          absolute
          bottom-[8%]
          left-[44%]
          w-[1px]
          h-[260px]
          bg-gradient-to-b
          from-transparent
          via-white/[0.08]
          to-transparent
        "
      />

    </div>
  );
}