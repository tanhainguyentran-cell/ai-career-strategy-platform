export default function AIVignette() {
  return (
    <div
      className="
        fixed
        inset-0
        pointer-events-none
        z-[3]
      "
    >

      <div
        className="
          absolute
          inset-0
        "
        style={{
          background: `
            radial-gradient(
              circle at center,
              transparent 45%,
              rgba(0,0,0,0.35) 100%
            )
          `,
        }}
      />

    </div>
  );
}