export default function StrategicVisionBanner() {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[40px]
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
          bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_35%)]
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
          Strategic Vision
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
          The next generation of professionals
          will compete through strategic intelligence,
          execution systems, and adaptive positioning —
          not resumes alone.
        </h3>

        <p
          className="
            text-zinc-400
            text-lg
            leading-relaxed
            max-w-3xl
          "
        >
          AI-driven strategic planning is transforming
          career development into a dynamic ecosystem
          where candidates continuously optimize skills,
          positioning, communication, and measurable value creation.
        </p>

      </div>

    </div>
  );
}