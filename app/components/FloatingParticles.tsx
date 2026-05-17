const particles = Array.from(
  { length: 18 },
  (_, i) => i
);

export default function FloatingParticles() {
  return (
    <div
      className="
        absolute
        inset-0
        overflow-hidden
        pointer-events-none
      "
    >

      {particles.map((particle) => (
        <div
          key={particle}
          className="
            absolute
            rounded-full
            bg-white/10
            animate-pulse
          "
          style={{
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${
              Math.random() * 5 + 3
            }s`,
          }}
        />
      ))}

    </div>
  );
}