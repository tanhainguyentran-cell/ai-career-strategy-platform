type Props = {
  open: boolean;
  onClick: () => void;
};

export default function SidebarOverlay({
  open,
  onClick,
}: Props) {
  if (!open) return null;

  return (
    <div
      onClick={onClick}
      className="
        lg:hidden
        fixed
        inset-0
        bg-black/70
        backdrop-blur-sm
        z-30
      "
    />
  );
}
