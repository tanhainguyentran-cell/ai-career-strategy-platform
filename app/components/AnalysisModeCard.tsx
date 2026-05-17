type Props = {
  title: string;
  description: string;
  active?: boolean;
  onClick: () => void;
};

export default function AnalysisModeCard({
  title,
  description,
  active = false,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`
        text-left
        p-6
        rounded-3xl
        border
        transition-all
        duration-300
        ${
          active
            ? `
              border-white
              bg-white
              text-black
            `
            : `
              border-zinc-800
              bg-zinc-900/50
              text-white
              hover:border-zinc-700
              hover:bg-zinc-900
            `
        }
      `}
    >

      <h3 className="text-xl font-bold mb-3">
        {title}
      </h3>

      <p
        className={
          active
            ? "text-black/70 leading-relaxed"
            : "text-zinc-400 leading-relaxed"
        }
      >
        {description}
      </p>

    </button>
  );
}