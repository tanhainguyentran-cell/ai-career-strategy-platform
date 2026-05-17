const readiness = [
  {
    label: "AI Fluency",
    value: "96%",
  },

  {
    label: "Strategic Adaptability",
    value: "91%",
  },

  {
    label: "Execution Capability",
    value: "94%",
  },

  {
    label: "Leadership Evolution",
    value: "88%",
  },
];

export default function AIFutureReadiness() {
  return (
    <div
      className="
        rounded-[40px]
        border
        border-zinc-800
        bg-black
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
          Future Readiness
        </p>

        <h3
          className="
            text-3xl
            lg:text-5xl
            font-black
            leading-tight
          "
        >
          AI-era professional
          readiness evaluation.
        </h3>

      </div>

      <div className="space-y-7">

        {readiness.map((item) => (
          <div key={item.label}>

            <div
              className="
                mb-3
                flex
                items-center
                justify-between
              "
            >

              <p className="font-semibold">
                {item.label}
              </p>

              <p className="text-zinc-500">
                {item.value}
              </p>

            </div>

            <div
              className="
                h-3
                overflow-hidden
                rounded-full
                bg-zinc-900
              "
            >

              <div
                className="
                  h-full
                  rounded-full
                  bg-white
                "
                style={{
                  width: item.value,
                }}
              />

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}