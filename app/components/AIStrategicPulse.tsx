const pulse = [
  {
    metric: "Strategic Energy",
    value: "94%",
  },

  {
    metric: "Execution Momentum",
    value: "89%",
  },

  {
    metric: "Adaptive Growth",
    value: "97%",
  },

  {
    metric: "Leadership Expansion",
    value: "84%",
  },

  {
    metric: "AI Integration",
    value: "92%",
  },

  {
    metric: "Long-term Positioning",
    value: "90%",
  },
];

export default function AIStrategicPulse() {
  return (
    <div
      className="
        rounded-[80px]
        border
        border-zinc-800
        bg-gradient-to-br
        from-black
        via-zinc-950
        to-black
        p-10
      "
    >

      <div className="mb-16">

        <p
          className="
            text-zinc-500
            uppercase
            tracking-[0.55em]
            text-xs
            mb-4
          "
        >
          Strategic Pulse
        </p>

        <h3
          className="
            text-3xl
            lg:text-6xl
            font-black
            leading-tight
          "
        >
          Real-time AI-native
          strategic pulse analytics.
        </h3>

      </div>

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-6
        "
      >

        {pulse.map((item) => (
          <div
            key={item.metric}
            className="
              rounded-3xl
              border
              border-zinc-800
              bg-black/40
              p-8
            "
          >

            <p
              className="
                text-zinc-500
                text-sm
                mb-5
              "
            >
              {item.metric}
            </p>

            <h4
              className="
                text-5xl
                font-black
                mb-4
              "
            >
              {item.value}
            </h4>

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