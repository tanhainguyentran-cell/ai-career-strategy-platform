export default function StrategicValueGraph() {
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
          Value Intelligence
        </p>

        <h3 className="text-4xl font-black">
          Strategic Value Growth Curve
        </h3>

      </div>

      <div
        className="
          relative
          overflow-hidden
          rounded-[36px]
          border
          border-zinc-800
          bg-zinc-900/40
          h-[420px]
          p-8
        "
      >

        <div
          className="
            absolute
            inset-0
            opacity-[0.06]
          "
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
            `,
            backgroundSize:
              "60px 60px",
          }}
        />

        <svg
          className="relative z-10 w-full h-full"
          viewBox="0 0 1000 400"
          preserveAspectRatio="none"
        >

          <path
            d="
              M 0 340
              C 180 320,
                280 280,
                380 240
              S 620 120,
                1000 20
            "
            fill="none"
            stroke="white"
            strokeWidth="6"
            strokeLinecap="round"
          />

          <circle
            cx="380"
            cy="240"
            r="10"
            fill="white"
          />

          <circle
            cx="700"
            cy="120"
            r="12"
            fill="white"
          />

          <circle
            cx="1000"
            cy="20"
            r="14"
            fill="white"
          />

        </svg>

        <div
          className="
            absolute
            bottom-6
            left-8
            text-zinc-500
            text-sm
          "
        >
          Time →
        </div>

        <div
          className="
            absolute
            top-6
            left-8
            text-zinc-500
            text-sm
          "
        >
          Strategic Value ↑
        </div>

      </div>

    </div>
  );
}