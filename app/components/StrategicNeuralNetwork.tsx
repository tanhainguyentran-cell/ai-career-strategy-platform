export default function StrategicNeuralNetwork() {
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
          Neural Intelligence
        </p>

        <h3 className="text-4xl font-black">
          Strategic Neural Mapping
        </h3>

      </div>

      <div
        className="
          relative
          overflow-hidden
          rounded-[40px]
          border
          border-zinc-800
          bg-zinc-900/40
          h-[520px]
        "
      >

        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1000 520"
          preserveAspectRatio="none"
        >

          <line
            x1="180"
            y1="100"
            x2="500"
            y2="260"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="2"
          />

          <line
            x1="180"
            y1="420"
            x2="500"
            y2="260"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="2"
          />

          <line
            x1="500"
            y1="260"
            x2="820"
            y2="120"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="2"
          />

          <line
            x1="500"
            y1="260"
            x2="820"
            y2="400"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="2"
          />

          <circle
            cx="180"
            cy="100"
            r="20"
            fill="white"
          />

          <circle
            cx="180"
            cy="420"
            r="20"
            fill="white"
          />

          <circle
            cx="500"
            cy="260"
            r="28"
            fill="white"
          />

          <circle
            cx="820"
            cy="120"
            r="22"
            fill="white"
          />

          <circle
            cx="820"
            cy="400"
            r="22"
            fill="white"
          />

        </svg>

        <div
          className="
            absolute
            top-[70px]
            left-[120px]
            text-zinc-400
          "
        >
          Market Signals
        </div>

        <div
          className="
            absolute
            bottom-[70px]
            left-[120px]
            text-zinc-400
          "
        >
          Candidate Intelligence
        </div>

        <div
          className="
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            text-black
            font-black
          "
        >
          AI Core
        </div>

        <div
          className="
            absolute
            top-[90px]
            right-[110px]
            text-zinc-400
          "
        >
          Strategic Output
        </div>

        <div
          className="
            absolute
            bottom-[90px]
            right-[110px]
            text-zinc-400
          "
        >
          Execution Roadmap
        </div>

      </div>

    </div>
  );
}