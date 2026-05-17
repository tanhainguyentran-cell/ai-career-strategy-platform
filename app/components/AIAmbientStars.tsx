const stars = Array.from(
  { length: 80 },
  (_, index) => ({
    id: index,

    top:
      Math.random() * 100,

    left:
      Math.random() * 100,

    size:
      Math.random() * 3 + 1,

    opacity:
      Math.random() * 0.5 + 0.2,
  })
);

export default function AIAmbientStars() {
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

      {stars.map((star) => (
        <div
          key={star.id}
          className="
            absolute
            rounded-full
            bg-white
            animate-pulse
          "
          style={{
            top: `${star.top}%`,

            left: `${star.left}%`,

            width: `${star.size}px`,

            height: `${star.size}px`,

            opacity: star.opacity,
          }}
        />
      ))}

    </div>
  );
}