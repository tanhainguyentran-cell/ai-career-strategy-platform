const insights = [
  "AI detected increased demand for strategic execution capability",

  "Leadership storytelling improves hiring probability",

  "Cross-functional adaptability is becoming a critical hiring signal",

  "High-growth companies increasingly prioritize systems thinking",

  "Strategic communication strongly correlates with executive-track hiring",
];

export default function AIInsightTicker() {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-2xl
        border
        border-zinc-800
        bg-zinc-900/40
        py-4
      "
    >

      <div
        className="
          absolute
          left-0
          top-0
          bottom-0
          w-20
          bg-gradient-to-r
          from-black
          to-transparent
          z-10
        "
      />

      <div
        className="
          absolute
          right-0
          top-0
          bottom-0
          w-20
          bg-gradient-to-l
          from-black
          to-transparent
          z-10
        "
      />

      <div
        className="
          flex
          gap-16
          w-max
          animate-[scroll_35s_linear_infinite]
          px-6
        "
      >

        {[...insights, ...insights].map(
          (insight, index) => (
            <div
              key={`${insight}-${index}`}
              className="
                flex
                items-center
                gap-4
                whitespace-nowrap
              "
            >

              <div
                className="
                  w-2
                  h-2
                  rounded-full
                  bg-white
                "
              />

              <p className="text-zinc-400">
                {insight}
              </p>

            </div>
          )
        )}

      </div>

    </div>
  );
}