export default function AILightGrid() {
  return (
    <div
      className="
        fixed
        inset-0
        pointer-events-none
        z-0
        opacity-[0.03]
      "
    >

      <div
        className="
          absolute
          inset-0
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize:
            "120px 120px",
        }}
      />

    </div>
  );
}