const logs = [
  "[OK] Strategic environment analysis completed",

  "[OK] Hiring signal intelligence synchronized",

  "[OK] Leadership positioning recalculated",

  "[OK] Execution roadmap generated",

  "[OK] Adaptive learning system updated",

  "[OK] Forecast engine operational",
];

export default function AIStrategicTerminal() {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[36px]
        border
        border-zinc-800
        bg-black
        p-8
        font-mono
      "
    >

      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
          pointer-events-none
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
          `,
          backgroundSize:
            "40px 40px",
        }}
      />

      <div className="relative z-10">

        <div className="flex items-center gap-3 mb-8">

          <div className="w-3 h-3 rounded-full bg-white" />

          <div className="w-3 h-3 rounded-full bg-zinc-500" />

          <div className="w-3 h-3 rounded-full bg-zinc-700" />

        </div>

        <div className="space-y-5">

          {logs.map((log) => (
            <div
              key={log}
              className="
                flex
                items-center
                gap-4
              "
            >

              <span className="text-zinc-500">
                $
              </span>

              <p className="text-zinc-300">
                {log}
              </p>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}