type Props = {
  onClick: () => void;
};

export default function FloatingActionButton({
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className="
        fixed
        bottom-8
        right-8
        z-50
        w-16
        h-16
        rounded-full
        border
        border-zinc-700
        bg-white
        text-black
        text-3xl
        font-black
        shadow-2xl
        hover:scale-110
        transition-all
        duration-300
      "
    >
      +
    </button>
  );
}