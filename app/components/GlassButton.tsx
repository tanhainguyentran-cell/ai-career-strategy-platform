type Props = {
  children: React.ReactNode;

  onClick?: () => void;

  active?: boolean;

  disabled?: boolean;
};

export default function GlassButton({
  children,
  onClick,
  active = false,
  disabled = false,
}: Props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative
        overflow-hidden
        px-6
        py-3
        rounded-2xl
        border
        transition-all
        duration-300
        backdrop-blur-xl
        disabled:opacity-40
        ${
          active
            ? `
              border-white
              bg-white
              text-black
            `
            : `
              border-zinc-800
              bg-zinc-900/40
              hover:bg-zinc-900
              hover:border-zinc-700
            `
        }
      `}
    >

      <div
        className="
          absolute
          inset-0
          opacity-0
          hover:opacity-100
          transition-opacity
          duration-300
          bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]
          pointer-events-none
        "
      />

      <span className="relative z-10">
        {children}
      </span>

    </button>
  );
}