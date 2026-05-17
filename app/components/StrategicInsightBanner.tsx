export default function StrategicInsightBanner() {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[36px]
        border
        border-zinc-800
        bg-gradient-to-br
        from-zinc-900
        via-black
        to-zinc-900
        p-10
      "
    >

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_35%)]
          pointer-events-none
        "
      />

      <div className="relative z-10 max-w-4xl">

        <p
          className="
            text-zinc-500
            uppercase
            tracking-[0.25em]
            text-xs
            mb-5
          "
        >
          AI Strategic Insight
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
          The future of hiring belongs to candidates
          who can strategically position themselves
          inside evolving organizational ecosystems.
        </h3>

        <p
          className="
            text-zinc-400
            text-lg
            leading-relaxed
            max-w-3xl
          "
        >
          Modern recruitment increasingly prioritizes
          adaptability, strategic thinking, leadership
          potential, and measurable execution capability
          over traditional qualification signals alone.
        </p>

      </div>

    </div>
  );
}