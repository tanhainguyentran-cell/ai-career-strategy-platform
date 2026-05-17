type Props = {
  title: string;

  prompt: string;

  onClick: () => void;
};

export default function PromptCard({
  title,
  prompt,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className="
        text-left
        p-5
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900/50
        hover:bg-zinc-900
        hover:border-zinc-700
        transition-all
        duration-300
      "
    >

      <h3 className="text-lg font-bold mb-3">
        {title}
      </h3>

      <p className="text-zinc-400 leading-relaxed text-sm">
        {prompt}
      </p>

    </button>
  );
}