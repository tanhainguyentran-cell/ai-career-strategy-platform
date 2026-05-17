const signals = Array.from(
  { length: 40 },
  (_, index) => index
);

export default function AIInfiniteSignal() {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[48px]
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
          Infinite Signal Network
        </p>

        <h3
          className="
            text-3xl
            lg:text-5xl
            font-black
            leading-tight
          "
        >
          Distributed AI strategic
          intelligence systems.
        </h3>

      </div>

      <div
        className="
          grid
          grid-cols-5
          md:grid-cols-8
          gap-4
        "
      >

        {signals.map((signal) => (
          <div
            key={signal}
            className="
              aspect-square
              rounded-2xl
              border
              border-zinc-800
              bg-zinc-950/40
              flex
              items-center
              justify-center
            "
          >

            <div
              className="
                h-3
                w-3
                rounded-full
                bg-white
                animate-pulse
              "
            />

          </div>
        ))}

      </div>

    </div>
  );
}