const messages = [
  "Scanning macro environment...",
  "Analyzing corporate structure...",
  "Decoding hiring signals...",
  "Generating strategic roadmap...",
  "Building AI recommendations...",
];

export default function TypingLoader() {
  return (
    <div
      className="
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900/50
        backdrop-blur-xl
        p-8
      "
    >

      <div className="flex items-center gap-3 mb-6">

        <div className="flex gap-2">

          <div
            className="
              w-3
              h-3
              rounded-full
              bg-white
              animate-bounce
            "
          />

          <div
            className="
              w-3
              h-3
              rounded-full
              bg-white
              animate-bounce
              [animation-delay:0.15s]
            "
          />

          <div
            className="
              w-3
              h-3
              rounded-full
              bg-white
              animate-bounce
              [animation-delay:0.3s]
            "
          />

        </div>

        <p className="text-zinc-400">
          AI Processing
        </p>

      </div>

      <div className="space-y-4">

        {messages.map((message) => (
          <div
            key={message}
            className="
              flex
              items-center
              gap-3
              text-zinc-500
            "
          >

            <div
              className="
                w-2
                h-2
                rounded-full
                bg-zinc-600
              "
            />

            <p>{message}</p>

          </div>
        ))}

      </div>

    </div>
  );
}