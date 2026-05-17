export default function AIAtmosphere() {
  return (
    <div
      className="
        fixed
        inset-0
        overflow-hidden
        pointer-events-none
        z-0
      "
    >

      <div
        className="
          absolute
          inset-0
          opacity-[0.025]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              to bottom,
              rgba(255,255,255,0.08),
              transparent
            )
          `,
        }}
      />

      <div
        className="
          absolute
          top-0
          left-0
          right-0
          h-[1px]
          bg-white/[0.08]
        "
      />

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-[1px]
          bg-white/[0.05]
        "
      />

    </div>
  );
}