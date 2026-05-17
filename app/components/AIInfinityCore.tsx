export default function AIInfinityCore() {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[72px]
        border
        border-zinc-800
        bg-gradient-to-br
        from-black
        via-zinc-950
        to-black
        px-8
        py-32
        text-center
      "
    >

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]
        "
      />

      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          h-[520px]
          w-[520px]
          rounded-full
          border
          border-zinc-800
        "
      />

      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          h-[320px]
          w-[320px]
          rounded-full
          border
          border-zinc-700
        "
      />

      <div
        className="
          relative
          z-10
          max-w-6xl
          mx-auto
        "
      >

        <p
          className="
            text-zinc-500
            uppercase
            tracking-[0.4em]
            text-xs
            mb-8
          "
        >
          Infinity Core
        </p>

        <h2
          className="
            text-5xl
            lg:text-9xl
            font-black
            leading-[0.88]
            mb-12
          "
        >
          Build.
          Adapt.
          Compound.
          Evolve.
        </h2>

        <p
          className="
            max-w-4xl
            mx-auto
            text-lg
            text-zinc-400
            leading-relaxed
            mb-16
          "
        >
          AI-native professionals will dominate
          future strategic environments through
          adaptive systems, intelligent execution,
          and continuously compounding leverage.
        </p>

        <button
          className="
            rounded-3xl
            bg-white
            px-12
            py-6
            font-black
            text-black
            text-lg
            transition-all
            duration-300
            hover:scale-[1.03]
          "
        >
          Enter Infinite Expansion
        </button>

      </div>

    </div>
  );
}