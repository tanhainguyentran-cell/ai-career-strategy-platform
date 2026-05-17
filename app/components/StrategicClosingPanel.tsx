export default function StrategicClosingPanel() {
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
          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_45%)]
          pointer-events-none
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
            tracking-[0.25em]
            text-xs
            mb-6
          "
        >
          Final Strategic Perspective
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
          The future belongs to professionals
          who continuously redesign themselves
          faster than the market evolves.
        </h3>

        <p
          className="
            text-zinc-400
            text-xl
            leading-relaxed
            max-w-4xl
          "
        >
          Strategic adaptability, systems thinking,
          measurable execution, and AI-enhanced
          intelligence will become the defining
          competitive advantages of the next generation workforce.
        </p>

      </div>

    </div>
  );
}