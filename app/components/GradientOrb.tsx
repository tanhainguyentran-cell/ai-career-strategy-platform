type Props = {
  className?: string;
};

export default function GradientOrb({
  className = "",
}: Props) {
  return (
    <div
      className={`
        absolute
        rounded-full
        blur-3xl
        opacity-20
        bg-white
        ${className}
      `}
    />
  );
}