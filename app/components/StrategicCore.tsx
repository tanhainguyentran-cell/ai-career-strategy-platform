export default function StrategicCore() {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[56px]
        border
        border-zinc-800
        bg-black
        h-[720px]
        flex
        items-center
        justify-center
      "
    >

      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
        "
        style={{
          backgroundImage: `
            radial-gradient(circle, white 1px, transparent 1px)
          `,
          backgroundSize:
            "42px 42px",
        }}
      />

      <div
        className="
          absolute
          w-[620px]
          h-[620px]
          rounded-full
          border
          border-white/[0.06]
        "
      />

      <div
        className="
          absolute
          w-[420px]
          h-[420px]
          rounded-full
          border
          border-white/[0.08]
        "
      />

      <div
        className="
          absolute
          w-[220px]
          h-[220px]
          rounded-full
          border
          border-white/[0.12]
        "
      />

      <div
        className="
          absolute
          w-20
          h-20
          rounded-full
          bg-white
          shadow-[0_0_120px_rgba(255,255,255,0.9)]
        "
      />

      <div
        className="
          absolute
          top-10
          left-10
          text-zinc-500
          uppercase
          tracking-[0.3em]
          text-xs
        "
      >
        Strategic Intelligence Core
      </div>

      <div
        className="
          relative
          z-10
          text-center
          max-w-4xl
          px-8
        "
      >

        <h3
          className="
            text-4xl
            lg:text-7xl
            font-black
            leading-tight
            mb-8
          "
        >
          AI-enhanced strategic evolution
          becomes the foundation of future career systems.
        </h3>

        <p
          className="
            text-zinc-400
            text-xl
            leading-relaxed
          "
        >
          Adaptive intelligence, predictive systems,
          and continuous optimization loops redefine
          professional growth at scale.
        </p>

      </div>

    </div>
  );
}