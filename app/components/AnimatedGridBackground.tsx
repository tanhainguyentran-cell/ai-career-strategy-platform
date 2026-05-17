export default function AnimatedGridBackground() {
  return (
    <div
      className="
        absolute
        inset-0
        overflow-hidden
        pointer-events-none
        opacity-[0.06]
      "
    >

      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          bg-[size:60px_60px]
        "
      />

    </div>
  );
}