type Props = {
  size: string;

  top?: string;

  bottom?: string;

  left?: string;

  right?: string;

  opacity?: string;

  delay?: string;
};

export default function FloatingGradientOrb({
  size,
  top,
  bottom,
  left,
  right,
  opacity = "0.08",
  delay = "0s",
}: Props) {
  return (
    <div
      className="
        absolute
        rounded-full
        blur-3xl
        animate-float
        pointer-events-none
      "
      style={{
        width: size,
        height: size,
        top,
        bottom,
        left,
        right,
        opacity,
        animationDelay: delay,
        background:
          "radial-gradient(circle, white 0%, transparent 70%)",
      }}
    />
  );
}