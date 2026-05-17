export default function AIRealityLayer() {
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
          top-[10%]
          left-[12%]
          w-[320px]
          h-[320px]
          rounded-full
          bg-white/[0.03]
          blur-[120px]
          animate-pulse
        "
      />

      <div
        className="
          absolute
          bottom-[8%]
          right-[10%]
          w-[420px]
          h-[420px]
          rounded-full
          bg-white/[0.025]
          blur-[140px]
          animate-pulse
        "
        style={{
          animationDelay: "2s",
        }}
      />

      <div
        className="
          absolute
          top-[45%]
          left-[48%]
          w-[260px]
          h-[260px]
          rounded-full
          bg-white/[0.02]
          blur-[100px]
          animate-pulse
        "
        style={{
          animationDelay: "4s",
        }}
      />

    </div>
  );
}