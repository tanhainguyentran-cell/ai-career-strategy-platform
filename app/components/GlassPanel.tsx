type Props = {
  children: React.ReactNode;

  className?: string;
};

export default function GlassPanel({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-zinc-800
        bg-zinc-900/40
        backdrop-blur-2xl
        shadow-2xl
        ${className}
      `}
    >

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-white/[0.03]
          via-transparent
          to-transparent
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_55%)]
          pointer-events-none
        "
      />

      <div className="relative z-10">
        {children}
      </div>

    </div>
  );
}