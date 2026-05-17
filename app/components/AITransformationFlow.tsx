const flow = [
  "Strategic Awareness",

  "AI Capability Expansion",

  "Execution Systemization",

  "Leadership Evolution",

  "Compounding Career Leverage",
];

export default function AITransformationFlow() {
  return (
    <div
      className="
        rounded-[40px]
        border
        border-zinc-800
        bg-gradient-to-br
        from-black
        via-zinc-950
        to-black
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
          Transformation Flow
        </p>

        <h3
          className="
            text-3xl
            lg:text-5xl
            font-black
            leading-tight
          "
        >
          AI-powered professional
          transformation pipeline.
        </h3>

      </div>

      <div className="space-y-6">

        {flow.map((item, index) => (
          <div
            key={item}
            className="
              flex
              items-center
              gap-5
            "
          >

            <div
              className="
                flex
                items-center
                justify-center
                w-14
                h-14
                rounded-full
                border
                border-zinc-700
                bg-black
                font-black
              "
            >
              {index + 1}
            </div>

            <div
              className="
                flex-1
                rounded-2xl
                border
                border-zinc-800
                bg-zinc-950/40
                px-6
                py-5
              "
            >
              <p className="font-semibold">
                {item}
              </p>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}