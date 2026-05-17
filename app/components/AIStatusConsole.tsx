const status = [
  {
    label: "Neural Analysis",
    value: "Active",
  },

  {
    label: "Strategic Mapping",
    value: "Online",
  },

  {
    label: "Execution Engine",
    value: "Running",
  },

  {
    label: "Adaptive Learning",
    value: "Synchronized",
  },

  {
    label: "Forecast System",
    value: "Operational",
  },
];

export default function AIStatusConsole() {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[36px]
        border
        border-zinc-800
        bg-black/70
        backdrop-blur-2xl
        p-8
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

        <div className="mb-8">

          <p
            className="
              text-zinc-500
              uppercase
              tracking-[0.25em]
              text-xs
              mb-4
            "
          >
            AI Core Status
          </p>

          <h3 className="text-4xl font-black">
            Strategic Intelligence Console
          </h3>

        </div>

        <div className="space-y-5">

          {status.map((item) => (
            <div
              key={item.label}
              className="
                flex
                items-center
                justify-between
                border-b
                border-zinc-800
                pb-4
                last:border-0
                last:pb-0
              "
            >

              <div className="flex items-center gap-4">

                <div
                  className="
                    w-3
                    h-3
                    rounded-full
                    bg-white
                    animate-pulse
                  "
                />

                <p className="text-zinc-300">
                  {item.label}
                </p>

              </div>

              <p
                className="
                  text-zinc-500
                  uppercase
                  tracking-[0.15em]
                  text-xs
                "
              >
                {item.value}
              </p>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}