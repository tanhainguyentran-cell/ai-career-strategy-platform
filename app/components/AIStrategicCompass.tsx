const directions = [
  {
    title: "North",
    focus: "Leadership Expansion",
  },

  {
    title: "East",
    focus: "AI Capability Growth",
  },

  {
    title: "South",
    focus: "Execution Stability",
  },

  {
    title: "West",
    focus: "Strategic Positioning",
  },
];

export default function AIStrategicCompass() {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[80px]
        border
        border-zinc-800
        bg-gradient-to-br
        from-black
        via-zinc-950
        to-black
        p-10
      "
    >

      <div className="mb-16">

        <p
          className="
            text-zinc-500
            uppercase
            tracking-[0.55em]
            text-xs
            mb-4
          "
        >
          Strategic Compass
        </p>

        <h3
          className="
            text-3xl
            lg:text-6xl
            font-black
            leading-tight
          "
        >
          AI-guided strategic
          directional intelligence.
        </h3>

      </div>

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-6
        "
      >

        {directions.map((direction) => (
          <div
            key={direction.title}
            className="
              rounded-3xl
              border
              border-zinc-800
              bg-black/40
              p-8
              min-h-[220px]
              flex
              flex-col
              justify-between
            "
          >

            <p
              className="
                text-zinc-500
                text-sm
              "
            >
              {direction.title}
            </p>

            <h4
              className="
                text-4xl
                font-black
                leading-tight
              "
            >
              {direction.focus}
            </h4>

          </div>
        ))}

      </div>

    </div>
  );
}