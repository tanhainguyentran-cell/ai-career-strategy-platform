export default function FloatingAIOrb() {
  return (
    <div
      className="
        fixed
        bottom-28
        right-8
        z-40
        hidden
        lg:flex
        items-center
        justify-center
      "
    >

      <div className="relative">

        <div
          className="
            absolute
            inset-0
            rounded-full
            bg-white/20
            blur-2xl
            animate-pulse
          "
        />

        <div
          className="
            relative
            w-20
            h-20
            rounded-full
            border
            border-zinc-700
            bg-black/80
            backdrop-blur-2xl
            flex
            items-center
            justify-center
          "
        >

          <div
            className="
              w-5
              h-5
              rounded-full
              bg-white
              animate-pulse
            "
          />

        </div>

      </div>

    </div>
  );
}