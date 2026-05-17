const identity = [
  "AI-native thinker",

  "Execution-focused operator",

  "Adaptive strategist",

  "Systems-oriented leader",

  "Long-term leverage builder",

  "Continuous learner",
];

export default function AIStrategicIdentity() {
  return (
    <div
      className="
        rounded-[72px]
        border
        border-zinc-800
        bg-black
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
          Strategic Identity
        </p>

        <h3
          className="
            text-3xl
            lg:text-6xl
            font-black
            leading-tight
          "
        >
          AI-generated strategic
          professional identity layer.
        </h3>

      </div>

      <div
        className="
          flex
          flex-wrap
          gap-5
        "
      >

        {identity.map((item) => (
          <div
            key={item}
            className="
              rounded-full
              border
              border-zinc-800
              bg-zinc-950/40
              px-7
              py-4
              text-lg
              font-semibold
            "
          >
            {item}
          </div>
        ))}

      </div>

    </div>
  );
}