const cells = Array.from(
  { length: 36 },
  (_, index) => index
);

export default function AIInfinityGrid() {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[56px]
        border
        border-zinc-800
        bg-black
        p-8
      "
    >

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_45%)]
        "
      />

      <div className="relative z-10">

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
            Infinity Intelligence Grid
          </p>

          <h3 className="text-4xl font-black">
            Adaptive Strategic Matrix
          </h3>

        </div>

        <div
          className="
            grid
            grid-cols-3
            md:grid-cols-6
            gap-5
          "
        >

          {cells.map((cell) => (
            <div
              key={cell}
              className="
                aspect-square
                rounded-3xl
                border
                border-zinc-800
                bg-zinc-900/40
                relative
                overflow-hidden
              "
            >

              <div
                className="
                  absolute
                  inset-0
                  bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_60%)]
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
                    w-4
                    h-4
                    rounded-full
                    bg-white
                  "
                />

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}