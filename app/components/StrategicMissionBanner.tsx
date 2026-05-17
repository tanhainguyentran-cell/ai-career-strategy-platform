export default function StrategicMissionBanner() {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[42px]
        border
        border-zinc-800
        bg-gradient-to-br
        from-black
        via-zinc-900
        to-black
        px-8
        py-16
      "
    >

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_35%)]
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
          Strategic Mission
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
          Transform individuals into strategically
          adaptive professionals capable of creating
          measurable long-term organizational impact.
        </h3>

        <p
          className="
            text-zinc-400
            text-lg
            leading-relaxed
            max-w-4xl
          "
        >
          The platform continuously integrates AI-driven
          intelligence, execution systems, strategic
          positioning, and adaptive learning frameworks
          to optimize career trajectory and leadership potential.
        </p>

      </div>

    </div>
  );
}