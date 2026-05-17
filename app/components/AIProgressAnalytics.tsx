const analytics = [
  {
    label: "AI Capability Growth",
    value: "82%",
  },

  {
    label: "Execution Consistency",
    value: "91%",
  },

  {
    label: "Strategic Positioning",
    value: "88%",
  },

  {
    label: "Leadership Expansion",
    value: "76%",
  },
];

export default function AIProgressAnalytics() {
  return (
    <div
      className="
        rounded-[40px]
        border
        border-zinc-800
        bg-zinc-950/50
        p-8
      "
    >

      <div className="mb-12">

        <p
          className="
            text-zinc-500
            uppercase
            tracking-[0.3em]
            text-xs
            mb-4
          "
        >
          Progress Analytics
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
          growth analytics.
        </h3>

      </div>

      <div className="space-y-8">

        {analytics.map((item) => (
          <div key={item.label}>

            <div
              className="
                flex
                items-center
                justify-between
                mb-3
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
                h-4
                overflow-hidden
                rounded-full
                bg-black
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