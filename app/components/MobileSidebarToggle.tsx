type Props = {
  open: boolean;
  onClick: () => void;
};

export default function MobileSidebarToggle({
  open,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className="
        lg:hidden
        fixed
        bottom-6
        right-6
        z-50
        w-14
        h-14
        rounded-full
        bg-white
        text-black
        shadow-2xl
        flex
        items-center
        justify-center
        font-bold
      "
    >
      {open ? "×" : "≡"}
    </button>
  );
}