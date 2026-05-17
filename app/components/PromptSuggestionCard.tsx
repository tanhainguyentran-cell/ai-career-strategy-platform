type Props = {
  title: string;
  onClick: () => void;
};

export default function PromptSuggestionCard({
  title,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className="
        text-left
        p-5
        rounded-2xl
        border
        border-zinc-800
        bg-zinc-900/50
        hover:bg-zinc-900
        hover:border-zinc-700
        transition-all
        duration-300
      "
    >

      <p className="text-zinc-300 leading-relaxed">
        {title}
      </p>

    </button>
  );
}