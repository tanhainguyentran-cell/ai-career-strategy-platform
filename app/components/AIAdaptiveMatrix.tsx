const matrix = Array.from(
  { length: 24 },
  (_, index) => index
);

export default function AIAdaptiveMatrix() {
  return (
    <div
      className="
        rounded-[40px]
        border
        border-zinc-800
        bg-black
        p-8
        overflow-hidden
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
          Adaptive Matrix
        </p>

        <h3
          className="
            text-3xl
            lg:text-5xl
            font-black
            leading-tight
          "
        >
          Dynamic AI capability
          evolution framework.
        </h3>

      </div>

      <div
        className="
          grid
          grid-cols-4
          md:grid-cols-6
          gap-4
        "
      >

        {matrix.map((cell) => (
          <div
            key={cell}
            className="
              aspect-square
              rounded-2xl
              border
              border-zinc-800
              bg-zinc-900/50
              relative
              overflow-hidden
            "
          >

            <div
              className="
                absolute
                inset-0
                bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]
              "
            />

            <div
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
              "
            >

              <div
                className="
                  w-3
                  h-3
                  rounded-full
                  bg-white
                "
              />

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}