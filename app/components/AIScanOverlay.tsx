export default function AIScanOverlay() {
  return (
    <div
      className="
        fixed
        inset-0
        pointer-events-none
        z-[2]
        overflow-hidden
      "
    >
      <div
        className="
          absolute
          top-0
          left-0
          w-full
          h-[180px]
          bg-gradient-to-b
          from-white/[0.03]
          to-transparent
          animate-pulse
        "
      />
    </div>
  );
}