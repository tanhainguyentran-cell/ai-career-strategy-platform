type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
};

export default function PrimaryButton({
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
      className="bg-white text-black px-6 py-4 rounded-xl font-semibold hover:bg-zinc-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
}