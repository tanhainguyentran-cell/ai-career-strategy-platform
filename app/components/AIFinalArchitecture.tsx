const architecture = [
  "Adaptive Intelligence",

  "Execution Infrastructure",

  "Strategic Leverage",

  "AI-native Positioning",

  "Continuous Evolution",

  "Compounding Systems",
];

export default function AIFinalArchitecture() {
  return (
    <div
      className="
        rounded-[56px]
        border
        border-zinc-800
        bg-black
        p-8
      "
    >

      <div className="mb-12">

        <p
          className="
            text-zinc-500
            uppercase
            tracking-[0.35em]
            text-xs
            mb-5
          "
        >
          Final Architecture
        </p>

        <h3
          className="
            text-4xl
            lg:text-6xl
            font-black
            leading-tight
          "
        >
          The architecture
          of future strategic
          professionals.
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

        {architecture.map((item) => (
          <div
            key={item}
            className="
              rounded-3xl
              border
              border-zinc-800
              bg-zinc-950/40
              px-6
              py-10
              flex
              items-center
              justify-center
              text-center
            "
          >

            <p
              className="
                text-xl
                font-black
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