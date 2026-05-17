export default function ShimmerLine() {
  return (
    <div
      className="
        relative
        h-[1px]
        w-full
        overflow-hidden
        bg-zinc-900
      "
    >

      <div
        className="
          absolute
          top-0
          left-[-40%]
          h-full
          w-[40%]
          bg-gradient-to-r
          from-transparent
          via-white/40
          to-transparent
          animate-[shimmer_3s_linear_infinite]
        "
      />

    </div>
  );
}