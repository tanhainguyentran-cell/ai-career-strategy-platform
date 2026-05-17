const commands = [
  {
    key: "⌘ + K",
    action:
      "Open AI Command Palette",
  },

  {
    key: "⌘ + Enter",
    action:
      "Run Strategic Analysis",
  },

  {
    key: "⌘ + Shift + S",
    action:
      "Save Strategic Snapshot",
  },

  {
    key: "⌘ + Shift + E",
    action:
      "Export Executive Report",
  },
];

export default function AICommandCenter() {
  return (
    <div className="space-y-8">

      <div>

        <p
          className="
            text-zinc-500
            uppercase
            tracking-[0.2em]
            text-xs
            mb-4
          "
        >
          Productivity Layer
        </p>

        <h3 className="text-4xl font-black">
          AI Command Center
        </h3>

      </div>

      <div
        className="
          rounded-3xl
          border
          border-zinc-800
          bg-zinc-900/40
          overflow-hidden
        "
      >

        {commands.map(
          (command, index) => (
            <div
              key={command.key}
              className={`
                flex
                items-center
                justify-between
                px-6
                py-5
                ${
                  index !==
                  commands.length - 1
                    ? "border-b border-zinc-800"
                    : ""
                }
              `}
            >

              <p className="text-zinc-300">
                {command.action}
              </p>

              <div
                className="
                  px-4
                  py-2
                  rounded-xl
                  border
                  border-zinc-700
                  bg-black/40
                  text-zinc-400
                  text-sm
                  font-semibold
                "
              >
                {command.key}
              </div>

            </div>
          )
        )}

      </div>

    </div>
  );
}