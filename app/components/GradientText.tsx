type Props = {
  children: React.ReactNode;
};

export default function GradientText({
  children,
}: Props) {
  return (
    <span
      className="
        bg-gradient-to-r
        from-white
        via-zinc-300
        to-zinc-500
        bg-clip-text
        text-transparent
      "
    >
      {children}
    </span>
  );
}