export default function HeroGlow() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      <div
        className="
          absolute
          top-[-120px]
          left-1/2
          -translate-x-1/2
          w-[900px]
          h-[500px]
          bg-white/10
          blur-[140px]
          rounded-full
        "
      />

      <div
        className="
          absolute
          bottom-[-180px]
          right-[5%]
          w-[500px]
          h-[500px]
          rounded-full
          bg-white/[0.05]
          blur-[160px]
        "
      />

    </div>
  );
}