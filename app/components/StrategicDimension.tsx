export default function StrategicDimension() {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[60px]
        border
        border-zinc-800
        bg-gradient-to-br
        from-black
        via-zinc-950
        to-black
        px-8
        py-32
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
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize:
            "80px 80px",
        }}
      />

      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[720px]
          h-[720px]
          rounded-full
          border
          border-white/[0.04]
        "
      />

      <div
        className="
          relative
          z-10
          max-w-6xl
          mx-auto
          text-center
        "
      >

        <p
          className="
            text-zinc-500
            uppercase
            tracking-[0.3em]
            text-xs
            mb-8
          "
        >
          Strategic Dimension
        </p>

        <h3
          className="
            text-4xl
            lg:text-8xl
            font-black
            leading-tight
            mb-12
          "
        >
          Intelligence, execution,
          adaptability, and AI form
          the next dimension of career evolution.
        </h3>

        <p
          className="
            text-zinc-400
            text-xl
            leading-relaxed
            max-w-4xl
            mx-auto
          "
        >
          Strategic systems will continuously evolve
          beyond static planning into living adaptive
          ecosystems capable of optimizing human potential in real time.
        </p>

      </div>

    </div>
  );
}