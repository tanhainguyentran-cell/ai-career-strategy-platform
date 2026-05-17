export default function StrategicContinuum() {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[56px]
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
          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_42%)]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[720px]
          h-[720px]
          rounded-full
          border
          border-white/[0.04]
        "
      />

      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[420px]
          h-[420px]
          rounded-full
          border
          border-white/[0.08]
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
          Strategic Continuum
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
          Career evolution becomes a continuous
          intelligence-driven optimization process.
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
          The boundary between strategic planning,
          adaptive learning, leadership growth,
          and AI-assisted execution will continue
          to dissolve into a unified operating system.
        </p>

      </div>

    </div>
  );
}