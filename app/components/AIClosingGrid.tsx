const closing = [
  "Strategic Intelligence",
  "AI Adaptability",
  "Execution Systems",
  "Leadership Scaling",
  "Long-term Leverage",
  "Market Positioning",
  "Career Evolution",
  "Compounding Growth",
];

export default function AIClosingGrid() {
  return (
    <div
      className="
        rounded-[48px]
        border
        border-zinc-800
        bg-zinc-950/60
        p-8
      "
    >

      <div className="mb-10">

        <p
          className="
            text-zinc-500
            uppercase
            tracking-[0.25em]
            text-xs
            mb-4
          "
        >
          Closing Intelligence Layer
        </p>

        <h3
          className="
            text-3xl
            lg:text-5xl
            font-black
            leading-tight
          "
        >
          Strategic principles
          for the AI economy.
        </h3>

      </div>

      <div
        className="
          grid
          grid-cols-2
          md:grid-cols-4
          gap-5
        "
      >

        {closing.map((item) => (
          <div
            key={item}
            className="
              rounded-2xl
              border
              border-zinc-800
              bg-black/40
              px-5
              py-8
              flex
              items-center
              justify-center
              text-center
            "
          >

            <p
              className="
                font-semibold
                text-zinc-300
              "
            >
              {item}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}