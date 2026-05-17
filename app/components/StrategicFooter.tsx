export default function StrategicFooter() {
  return (
    <footer
      className="
        relative
        overflow-hidden
        rounded-[36px]
        border
        border-zinc-800
        bg-zinc-900/40
        px-8
        py-12
      "
    >

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_45%)]
          pointer-events-none
        "
      />

      <div
        className="
          relative
          z-10
          flex
          flex-col
          lg:flex-row
          lg:items-center
          lg:justify-between
          gap-10
        "
      >

        <div>

          <h3
            className="
              text-3xl
              font-black
              mb-4
            "
          >
            AI Career Strategy Platform
          </h3>

          <p
            className="
              text-zinc-400
              max-w-2xl
              leading-relaxed
            "
          >
            Transforming career planning into an
            AI-powered strategic execution system
            optimized for modern organizational ecosystems.
          </p>

        </div>

        <div
          className="
            flex
            flex-wrap
            gap-4
          "
        >

          <div
            className="
              px-4
              py-3
              rounded-2xl
              border
              border-zinc-800
              bg-black/40
              text-zinc-400
            "
          >
            AI Intelligence
          </div>

          <div
            className="
              px-4
              py-3
              rounded-2xl
              border
              border-zinc-800
              bg-black/40
              text-zinc-400
            "
          >
            Strategic Positioning
          </div>

          <div
            className="
              px-4
              py-3
              rounded-2xl
              border
              border-zinc-800
              bg-black/40
              text-zinc-400
            "
          >
            SMART Execution
          </div>

        </div>

      </div>

    </footer>
  );
}