type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
};

export default function SecondaryButton({
  children,
  onClick,
  disabled = false,
  type = "button",
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="
        bg-zinc-800
        text-white
        px-6
        py-4
        rounded-xl
        hover:bg-zinc-700
        transition
        disabled:opacity-50
        disabled:cursor-not-allowed
      "
    >
      {children}
    </button>
  );
}