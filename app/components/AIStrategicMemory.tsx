const memories = [
  {
    title:
      "AI leadership learning pattern detected",
    time: "Today",
  },

  {
    title:
      "Execution consistency improved significantly",
    time: "Yesterday",
  },

  {
    title:
      "Strategic positioning expanded",
    time: "2 days ago",
  },

  {
    title:
      "Adaptive learning loop optimized",
    time: "This week",
  },
];

export default function AIStrategicMemory() {
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
          Strategic Memory
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
          memory intelligence layer.
        </h3>

      </div>

      <div className="space-y-6">

        {memories.map((memory) => (
          <div
            key={memory.title}
            className="
              rounded-3xl
              border
              border-zinc-800
              bg-zinc-950/40
              p-7
            "
          >

            <h4
              className="
                text-2xl
                font-black
                mb-4
              "
            >
              {memory.title}
            </h4>

            <p className="text-zinc-500">
              {memory.time}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}