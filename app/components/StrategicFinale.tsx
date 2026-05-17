export default function StrategicFinale() {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[64px]
        border
        border-zinc-800
        bg-gradient-to-br
        from-black
        via-zinc-950
        to-black
        px-8
        py-36
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
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[820px]
          h-[820px]
          rounded-full
          border
          border-white/[0.04]
        "
      />

      <div
        className="
          relative
          z-10
          max-w-6xl
          mx-auto
          text-center
        "
      >

        <p
          className="
            text-zinc-500
            uppercase
            tracking-[0.35em]
            text-xs
            mb-8
          "
        >
          Strategic Finale
        </p>

        <h3
          className="
            text-4xl
            lg:text-9xl
            font-black
            leading-[0.95]
            mb-12
          "
        >
          The future of careers
          belongs to intelligent,
          adaptive, AI-powered humans.
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
          Strategic intelligence systems will become
          the operating layer behind professional evolution,
          continuously optimizing positioning, leadership,
          execution, and long-term human potential.
        </p>

      </div>

    </div>
  );
}