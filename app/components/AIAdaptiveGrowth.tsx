const growth = [
  {
    title: "AI Capability",
    growth: "+32%",
  },

  {
    title: "Strategic Thinking",
    growth: "+24%",
  },

  {
    title: "Execution Efficiency",
    growth: "+18%",
  },

  {
    title: "Leadership Influence",
    growth: "+27%",
  },

  {
    title: "Market Positioning",
    growth: "+35%",
  },

  {
    title: "Adaptive Learning",
    growth: "+41%",
  },
];

export default function AIAdaptiveGrowth() {
  return (
    <div
      className="
        rounded-[72px]
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
            tracking-[0.5em]
            text-xs
            mb-4
          "
        >
          Adaptive Growth Engine
        </p>

        <h3
          className="
            text-3xl
            lg:text-6xl
            font-black
            leading-tight
          "
        >
          AI-powered adaptive
          strategic growth system.
        </h3>

      </div>

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-6
        "
      >

        {growth.map((item) => (
          <div
            key={item.title}
            className="
              rounded-3xl
              border
              border-zinc-800
              bg-black/40
              p-8
            "
          >

            <p
              className="
                text-zinc-500
                text-sm
                mb-5
              "
            >
              {item.title}
            </p>

            <h4
              className="
                text-5xl
                font-black
              "
            >
              {item.growth}
            </h4>

          </div>
        ))}

      </div>

    </div>
  );
}