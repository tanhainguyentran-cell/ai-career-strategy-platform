type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function GlassCard({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`
        bg-zinc-900/70
        backdrop-blur
        border
        border-zinc-800
        rounded-3xl
        ${className}
      `}
    >
      {children}
    </div>
  );
}