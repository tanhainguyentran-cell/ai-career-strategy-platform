export default function AIGridNoise() {
  return (
    <div
      className="
        fixed
        inset-0
        pointer-events-none
        z-0
        opacity-[0.025]
        overflow-hidden
      "
    >

      <div
        className="
          absolute
          inset-0
        "
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              rgba(255,255,255,0.04) 0px,
              rgba(255,255,255,0.04) 1px,
              transparent 1px,
              transparent 80px
            ),

            repeating-linear-gradient(
              90deg,
              rgba(255,255,255,0.04) 0px,
              rgba(255,255,255,0.04) 1px,
              transparent 1px,
              transparent 80px
            )
          `,
        }}
      />

    </div>
  );
}