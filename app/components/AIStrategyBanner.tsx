export default function AIStrategyBanner() {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[40px]
        border
        border-zinc-800
        bg-gradient-to-br
        from-zinc-950
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
          bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_45%)]
        "
      />

      <div
        className="
          relative
          z-10
          max-w-5xl
        "
      >

        <p
          className="
            text-zinc-500
            uppercase
            tracking-[0.3em]
            text-xs
            mb-6
          "
        >
          AI Strategic Layer
        </p>

        <h2
          className="
            text-4xl
            lg:text-7xl
            font-black
            leading-[0.95]
            mb-8
          "
        >
          Build a career
          system designed
          for the AI economy.
        </h2>

        <p
          className="
            text-zinc-400
            text-lg
            leading-relaxed
            max-w-3xl
          "
        >
          Your professional growth should operate like
          a continuously evolving strategic intelligence
          engine powered by AI, execution data, and
          adaptive positioning.
        </p>

      </div>

    </div>
  );
}