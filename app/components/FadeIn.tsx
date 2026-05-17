type Props = {
  children: React.ReactNode;
  delay?: number;
};

export default function FadeIn({
  children,
  delay = 0,
}: Props) {
  return (
    <div
      className="
        animate-fadeIn
        opacity-0
      "
      style={{
        animationDelay: `${delay}s`,
        animationFillMode: "forwards",
      }}
    >
      {children}
    </div>
  );
}