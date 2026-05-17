const pulses = Array.from(
  { length: 5 },
  (_, index) => index
);

export default function AIExecutionPulse() {
  return (
    <div
      className="
        rounded-[40px]
        border
        border-zinc-800
        bg-zinc-950/60
        p-8
      "
    >

      <div className="mb-10">

        <p
          className="
            text-zinc-500
            uppercase
            tracking-[0.25em]
            text-xs
            mb-4
          "
        >
          Execution Pulse
        </p>

        <h3
          className="
            text-3xl
            lg:text-5xl
            font-black
            leading-tight
          "
        >
          Real-time strategic
          execution monitoring.
        </h3>

      </div>

      <div className="space-y-5">

        {pulses.map((pulse) => (
          <div
            key={pulse}
            className="
              flex
              items-center
              justify-between
              rounded-2xl
              border
              border-zinc-800
              bg-black/40
              px-5
              py-4
            "
          >

            <div className="flex items-center gap-4">

              <div
                className="
                  h-3
                  w-3
                  rounded-full
                  bg-white
                  animate-pulse
                "
              />

              <p className="font-semibold">
                AI Strategic Monitoring
              </p>

            </div>

            <p className="text-zinc-500 text-sm">
              Active
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}