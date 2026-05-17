export default function AIInfinityLoop() {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[44px]
        border
        border-zinc-800
        bg-zinc-900/40
        h-[520px]
        flex
        items-center
        justify-center
      "
    >

      <svg
        width="720"
        height="320"
        viewBox="0 0 720 320"
        className="relative z-10"
      >

        <path
          d="
            M180 160
            C180 40,
            360 40,
            360 160
            C360 280,
            540 280,
            540 160
            C540 40,
            360 40,
            360 160
            C360 280,
            180 280,
            180 160
          "
          fill="none"
          stroke="white"
          strokeWidth="10"
          strokeLinecap="round"
        />

        <circle
          cx="180"
          cy="160"
          r="16"
          fill="white"
        />

        <circle
          cx="540"
          cy="160"
          r="16"
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
          tracking-[0.2em]
          text-xs
        "
      >
        Continuous Strategic Evolution
      </div>

    </div>
  );
}