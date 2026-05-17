const nodes = [
  "AI",
  "Leadership",
  "Execution",
  "Strategy",
  "Learning",
  "Growth",
  "Positioning",
  "Systems",
  "Adaptability",
];

export default function AIStrategicNetwork() {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[64px]
        border
        border-zinc-800
        bg-gradient-to-br
        from-black
        via-zinc-950
        to-black
        p-10
      "
    >

      <div className="mb-14">

        <p
          className="
            text-zinc-500
            uppercase
            tracking-[0.45em]
            text-xs
            mb-4
          "
        >
          Strategic Network
        </p>

        <h3
          className="
            text-3xl
            lg:text-6xl
            font-black
            leading-tight
          "
        >
          AI-native strategic
          relationship architecture.
        </h3>

      </div>

      <div
        className="
          grid
          grid-cols-2
          md:grid-cols-3
          gap-6
        "
      >

        {nodes.map((node) => (
          <div
            key={node}
            className="
              relative
              rounded-full
              border
              border-zinc-800
              bg-black/40
              aspect-square
              flex
              items-center
              justify-center
            "
          >

            <div
              className="
                absolute
                inset-0
                bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]
              "
            />

            <p
              className="
                relative
                z-10
                text-xl
                font-black
              "
            >
              {node}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}