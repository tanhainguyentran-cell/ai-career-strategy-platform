type Props = {
  selectedStep: string;
};

export default function SidebarFooter({
  selectedStep,
}: Props) {
  return (
    <div
      className="
        mt-10
        p-5
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900/50
        backdrop-blur
      "
    >

      <p className="text-zinc-500 text-sm mb-2">
        Current Active Phase
      </p>

      <h3 className="text-xl font-bold">
        {selectedStep}
      </h3>

      <p className="text-zinc-400 text-sm leading-relaxed mt-3">
        Continue progressing through the strategic
        hiring optimization framework.
      </p>

    </div>
  );
}