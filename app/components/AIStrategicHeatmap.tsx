const heatmap = [
  "AI",
  "Leadership",
  "Execution",
  "Growth",
  "Strategy",
  "Systems",
  "Adaptability",
  "Positioning",
  "Learning",
  "Leverage",
  "Networking",
  "Visibility",
];

export default function AIStrategicHeatmap() {
  return (
    <div
      className="
        rounded-[64px]
        border
        border-zinc-800
        bg-black
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
          Strategic Heatmap
        </p>

        <h3
          className="
            text-3xl
            lg:text-6xl
            font-black
            leading-tight
          "
        >
          AI-powered strategic
          focus intensity map.
        </h3>

      </div>

      <div
        className="
          grid
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-5
        "
      >

        {heatmap.map((item, index) => (
          <div
            key={item}
            className={`
              rounded-3xl
              border
              border-zinc-800
              p-8
              text-center
              font-black
              transition-all
              duration-300
              ${
                index % 3 === 0
                  ? "bg-white text-black"
                  : index % 2 === 0
                  ? "bg-zinc-900 text-zinc-200"
                  : "bg-black/40 text-zinc-400"
              }
            `}
          >
            {item}
          </div>
        ))}

      </div>

    </div>
  );
}