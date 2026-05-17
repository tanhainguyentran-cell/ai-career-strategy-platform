type Props = {
  label: string;

  value: string;

  top: string;

  left?: string;

  right?: string;

  delay?: string;
};

export default function FloatingStatBubble({
  label,
  value,
  top,
  left,
  right,
  delay = "0s",
}: Props) {
  return (
    <div
      className="
        absolute
        z-20
        animate-float
      "
      style={{
        top,
        left,
        right,
        animationDelay: delay,
      }}
    >

      <div
        className="
          px-5
          py-4
          rounded-3xl
          border
          border-zinc-800
          bg-black/70
          backdrop-blur-2xl
          shadow-2xl
        "
      >

        <p
          className="
            text-zinc-500
            text-xs
            uppercase
            tracking-[0.2em]
            mb-2
          "
        >
          {label}
        </p>

        <h3
          className="
            text-2xl
            font-black
          "
        >
          {value}
        </h3>

      </div>

    </div>
  );
}