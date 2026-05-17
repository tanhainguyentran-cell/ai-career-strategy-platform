export default function AIPositioningMap() {
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
          Positioning Intelligence
        </p>

        <h3 className="text-4xl font-black">
          Strategic Positioning Map
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
          h-[520px]
        "
      >

        <div
          className="
            absolute
            inset-0
            opacity-[0.08]
            pointer-events-none
          "
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)
            `,
            backgroundSize:
              "80px 80px",
          }}
        />

        <div
          className="
            absolute
            left-1/2
            top-0
            bottom-0
            w-px
            bg-zinc-700
          "
        />

        <div
          className="
            absolute
            top-1/2
            left-0
            right-0
            h-px
            bg-zinc-700
          "
        />

        <div
          className="
            absolute
            top-[20%]
            left-[65%]
            px-5
            py-4
            rounded-2xl
            border
            border-white/20
            bg-white/10
            backdrop-blur-xl
          "
        >
          You
        </div>

        <div
          className="
            absolute
            top-[55%]
            left-[30%]
            px-5
            py-4
            rounded-2xl
            border
            border-zinc-700
            bg-zinc-900
          "
        >
          Average Candidate
        </div>

        <div
          className="
            absolute
            bottom-5
            left-5
            text-zinc-500
            text-sm
          "
        >
          Execution Capability →
        </div>

        <div
          className="
            absolute
            top-5
            left-5
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