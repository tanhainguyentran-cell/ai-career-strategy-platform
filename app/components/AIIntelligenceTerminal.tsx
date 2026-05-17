const logs = [
  "Analyzing market positioning...",
  "Scanning hiring signal patterns...",
  "Evaluating execution capability...",
  "Building AI career strategy...",
  "Optimizing professional leverage...",
];

export default function AIIntelligenceTerminal() {
  return (
    <div
      className="
        rounded-[40px]
        border
        border-zinc-800
        bg-black
        overflow-hidden
      "
    >

      <div
        className="
          flex
          items-center
          gap-3
          border-b
          border-zinc-800
          px-6
          py-4
        "
      >

        <div className="h-3 w-3 rounded-full bg-zinc-500" />

        <div className="h-3 w-3 rounded-full bg-zinc-600" />

        <div className="h-3 w-3 rounded-full bg-zinc-700" />

        <p
          className="
            ml-4
            text-sm
            text-zinc-500
          "
        >
          AI Intelligence Terminal
        </p>

      </div>

      <div className="space-y-5 p-8">

        {logs.map((log, index) => (
          <div
            key={index}
            className="
              flex
              items-center
              gap-4
              text-zinc-300
            "
          >

            <span className="text-zinc-500">
              $
            </span>

            <p className="font-mono">
              {log}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}