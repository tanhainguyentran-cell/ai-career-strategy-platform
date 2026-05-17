export default function AIAscensionLayer() {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[140px]
        border
        border-zinc-800
        bg-gradient-to-br
        from-black
        via-zinc-950
        to-black
        px-8
        py-48
        text-center
      "
    >

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_60%)]
        "
      />

      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          h-[1000px]
          w-[1000px]
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
          h-[720px]
          w-[720px]
          rounded-full
          border
          border-zinc-700
        "
      />

      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          h-[420px]
          w-[420px]
          rounded-full
          border
          border-zinc-600
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
            tracking-[0.6em]
            text-xs
            mb-10
          "
        >
          Ascension Layer
        </p>

        <h2
          className="
            text-5xl
            lg:text-[12rem]
            font-black
            leading-[0.72]
            mb-16
          "
        >
          Evolve
          into
          strategic
          infinity.
        </h2>

        <p
          className="
            max-w-4xl
            mx-auto
            text-xl
            text-zinc-400
            leading-relaxed
            mb-24
          "
        >
          AI-native strategic systems will define
          the future of leadership, adaptability,
          execution, and professional leverage
          across every high-performance environment.
        </p>

        <div
          className="
            flex
            flex-col
            md:flex-row
            items-center
            justify-center
            gap-6
          "
        >

          <button
            className="
              rounded-[36px]
              bg-white
              px-16
              py-7
              text-xl
              font-black
              text-black
              transition-all
              duration-300
              hover:scale-[1.03]
            "
          >
            Enter Strategic Infinity
          </button>

          <button
            className="
              rounded-[36px]
              border
              border-zinc-700
              bg-black/40
              px-16
              py-7
              text-xl
              font-bold
              text-zinc-300
              transition-all
              duration-300
              hover:bg-zinc-900
            "
          >
            Continue AI Expansion
          </button>

        </div>

      </div>

    </div>
  );
}