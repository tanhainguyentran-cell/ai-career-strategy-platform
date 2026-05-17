export default function NeuralBackground() {
  return (
    <div
      className="
        absolute
        inset-0
        overflow-hidden
        pointer-events-none
      "
    >

      <div
        className="
          absolute
          top-[10%]
          left-[15%]
          w-[300px]
          h-[300px]
          rounded-full
          bg-white/[0.03]
          blur-3xl
          animate-pulse
        "
      />

      <div
        className="
          absolute
          bottom-[10%]
          right-[10%]
          w-[240px]
          h-[240px]
          rounded-full
          bg-white/[0.04]
          blur-3xl
          animate-pulse
        "
        style={{
          animationDelay: "1s",
        }}
      />

      <div
        className="
          absolute
          top-[50%]
          left-[45%]
          w-[180px]
          h-[180px]
          rounded-full
          bg-white/[0.03]
          blur-3xl
          animate-pulse
        "
        style={{
          animationDelay: "2s",
        }}
      />

    </div>
  );
}