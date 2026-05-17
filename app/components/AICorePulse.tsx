export default function AICorePulse() {
  return (
    <div
      className="
        fixed
        inset-0
        pointer-events-none
        z-[1]
        flex
        items-center
        justify-center
      "
    >

      <div className="relative">

        <div
          className="
            absolute
            inset-0
            w-[520px]
            h-[520px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-white/[0.04]
            animate-ping
          "
          style={{
            left: "50%",
            top: "50%",
            animationDuration:
              "6s",
          }}
        />

        <div
          className="
            absolute
            inset-0
            w-[320px]
            h-[320px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-white/[0.05]
            animate-ping
          "
          style={{
            left: "50%",
            top: "50%",
            animationDuration:
              "4s",
          }}
        />

      </div>

    </div>
  );
}