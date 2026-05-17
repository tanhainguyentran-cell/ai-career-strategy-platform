export default function AIConstellation() {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[52px]
        border
        border-zinc-800
        bg-zinc-950/70
        h-[640px]
      "
    >

      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1400 640"
        preserveAspectRatio="none"
      >

        <line
          x1="220"
          y1="180"
          x2="520"
          y2="260"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="2"
        />

        <line
          x1="520"
          y1="260"
          x2="860"
          y2="160"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="2"
        />

        <line
          x1="860"
          y1="160"
          x2="1120"
          y2="320"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="2"
        />

        <line
          x1="520"
          y1="260"
          x2="760"
          y2="500"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="2"
        />

        <circle
          cx="220"
          cy="180"
          r="12"
          fill="white"
        />

        <circle
          cx="520"
          cy="260"
          r="18"
          fill="white"
        />

        <circle
          cx="860"
          cy="160"
          r="14"
          fill="white"
        />

        <circle
          cx="1120"
          cy="320"
          r="16"
          fill="white"
        />

        <circle
          cx="760"
          cy="500"
          r="14"
          fill="white"
        />

      </svg>

      <div
        className="
          absolute
          top-10
          left-10
          text-zinc-500
          uppercase
          tracking-[0.25em]
          text-xs
        "
      >
        Strategic Constellation Network
      </div>

      <div
        className="
          absolute
          top-[140px]
          left-[170px]
          text-zinc-400
        "
      >
        Market Intelligence
      </div>

      <div
        className="
          absolute
          top-[230px]
          left-[470px]
          text-zinc-400
        "
      >
        AI Core
      </div>

      <div
        className="
          top-[120px]
          left-[810px]
          absolute
          text-zinc-400
        "
      >
        Leadership Projection
      </div>

      <div
        className="
          top-[300px]
          right-[120px]
          absolute
          text-zinc-400
        "
      >
        Strategic Output
      </div>

      <div
        className="
          bottom-[100px]
          left-[690px]
          absolute
          text-zinc-400
        "
      >
        Execution Intelligence
      </div>

    </div>
  );
}