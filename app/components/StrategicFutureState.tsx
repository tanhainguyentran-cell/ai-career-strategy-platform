export default function StrategicFutureState() {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[42px]
        border
        border-zinc-800
        bg-gradient-to-br
        from-zinc-900
        via-black
        to-zinc-900
        px-8
        py-16
      "
    >

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_35%)]
          pointer-events-none
        "
      />

      <div className="relative z-10 max-w-5xl">

        <p
          className="
            text-zinc-500
            uppercase
            tracking-[0.25em]
            text-xs
            mb-6
          "
        >
          Future State Projection
        </p>

        <h3
          className="
            text-4xl
            lg:text-6xl
            font-black
            leading-tight
            mb-8
          "
        >
          The platform evolves beyond career planning
          into a continuously adaptive strategic operating
          system for long-term professional growth.
        </h3>

        <p
          className="
            text-zinc-400
            text-lg
            leading-relaxed
            max-w-4xl
          "
        >
          Future iterations will integrate predictive labor
          intelligence, AI-driven executive coaching,
          adaptive learning ecosystems, strategic network
          analysis, and autonomous execution optimization systems.
        </p>

      </div>

    </div>
  );
}