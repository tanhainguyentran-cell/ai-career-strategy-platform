export default function ExecutiveSummaryPanel() {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[40px]
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

      <div className="relative z-10 max-w-5xl">

        <p
          className="
            text-zinc-500
            uppercase
            tracking-[0.25em]
            text-xs
            mb-5
          "
        >
          Executive Summary
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
          AI analysis indicates strong long-term
          alignment potential with high-adaptability
          organizations emphasizing innovation,
          leadership, and execution capability.
        </h3>

        <p
          className="
            text-zinc-400
            text-lg
            leading-relaxed
            max-w-4xl
          "
        >
          Current strategic assessment suggests that
          strengthening executive communication,
          quantified portfolio positioning, and
          measurable leadership narratives will
          significantly increase hiring probability
          within high-performance organizational ecosystems.
        </p>

      </div>

    </div>
  );
}