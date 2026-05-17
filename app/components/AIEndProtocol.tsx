export default function AIEndProtocol() {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[64px]
        border
        border-zinc-800
        bg-black
        px-8
        py-28
        text-center
      "
    >

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.07),transparent_60%)]
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
          End Protocol
        </p>

        <h2
          className="
            text-5xl
            lg:text-8xl
            font-black
            leading-[0.9]
            mb-12
          "
        >
          Strategy is now
          an adaptive
          intelligence system.
        </h2>

        <p
          className="
            max-w-4xl
            mx-auto
            text-lg
            text-zinc-400
            leading-relaxed
            mb-14
          "
        >
          The next generation of professionals
          will not compete through isolated skills alone.
          They will operate through interconnected
          AI-powered systems capable of continuous
          adaptation, execution, and strategic evolution.
        </p>

        <div
          className="
            flex
            flex-col
            md:flex-row
            items-center
            justify-center
            gap-5
          "
        >

          <button
            className="
              rounded-2xl
              bg-white
              px-10
              py-5
              font-black
              text-black
              transition-all
              duration-300
              hover:scale-[1.03]
            "
          >
            Activate Next Evolution
          </button>

          <button
            className="
              rounded-2xl
              border
              border-zinc-700
              bg-black/40
              px-10
              py-5
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