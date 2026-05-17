export default function StrategicSingularity() {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[52px]
        border
        border-zinc-800
        bg-gradient-to-br
        from-black
        via-zinc-950
        to-black
        px-8
        py-28
      "
    >

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_40%)]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[420px]
          h-[420px]
          rounded-full
          border
          border-white/10
        "
      />

      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[240px]
          h-[240px]
          rounded-full
          border
          border-white/20
        "
      />

      <div
        className="
          relative
          z-10
          max-w-5xl
          mx-auto
          text-center
        "
      >

        <p
          className="
            text-zinc-500
            uppercase
            tracking-[0.3em]
            text-xs
            mb-8
          "
        >
          Strategic Singularity
        </p>

        <h3
          className="
            text-4xl
            lg:text-8xl
            font-black
            leading-tight
            mb-10
          "
        >
          The convergence of intelligence,
          adaptability, execution, and AI
          will redefine professional evolution.
        </h3>

        <p
          className="
            text-zinc-400
            text-xl
            leading-relaxed
            max-w-4xl
            mx-auto
          "
        >
          Future career systems will continuously
          optimize human potential through strategic
          intelligence loops, adaptive learning,
          predictive positioning, and autonomous execution support.
        </p>

      </div>

    </div>
  );
}