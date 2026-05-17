export default function AITransformationBanner() {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[44px]
        border
        border-zinc-800
        bg-gradient-to-br
        from-black
        via-zinc-900
        to-black
        px-8
        py-20
      "
    >

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]
          pointer-events-none
        "
      />

      <div className="relative z-10 max-w-6xl">

        <p
          className="
            text-zinc-500
            uppercase
            tracking-[0.25em]
            text-xs
            mb-6
          "
        >
          AI Transformation Layer
        </p>

        <h3
          className="
            text-4xl
            lg:text-7xl
            font-black
            leading-tight
            mb-10
          "
        >
          AI is transforming career development
          from static planning into a continuously
          adaptive strategic intelligence system.
        </h3>

        <p
          className="
            text-zinc-400
            text-xl
            leading-relaxed
            max-w-5xl
          "
        >
          The future workforce will rely on predictive
          intelligence, execution optimization,
          strategic adaptability, and AI-assisted
          decision systems to compete within increasingly
          complex organizational ecosystems.
        </p>

      </div>

    </div>
  );
}