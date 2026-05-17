const commands = [
  "Generate strategic hiring roadmap",

  "Analyze AI capability gaps",

  "Predict future role evolution",

  "Optimize leadership positioning",

  "Build execution acceleration system",
];

export default function AICommandDeck() {
  return (
    <div
      className="
        rounded-[40px]
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
          Command Deck
        </p>

        <h3
          className="
            text-3xl
            lg:text-5xl
            font-black
            leading-tight
          "
        >
          AI-powered strategic
          command architecture.
        </h3>

      </div>

      <div className="space-y-5">

        {commands.map((command) => (
          <button
            key={command}
            className="
              w-full
              rounded-2xl
              border
              border-zinc-800
              bg-black/40
              px-6
              py-5
              text-left
              transition-all
              duration-300
              hover:border-zinc-600
              hover:bg-zinc-900
            "
          >

            <div className="flex items-center gap-4">

              <div
                className="
                  h-3
                  w-3
                  rounded-full
                  bg-white
                "
              />

              <p className="font-semibold">
                {command}
              </p>

            </div>

          </button>
        ))}

      </div>

    </div>
  );
}