type Props = {
  currentStep: string;
};

export default function SidebarStats({
  currentStep,
}: Props) {
  return (
    <div
      className="
        mt-8
        p-5
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900/50
      "
    >

      <p className="text-zinc-500 text-sm mb-5">
        Active Framework
      </p>

      <h3 className="text-2xl font-black mb-4">
        {currentStep}
      </h3>

      <div className="flex items-center gap-3">

        <div
          className="
            w-2
            h-2
            rounded-full
            bg-green-400
            animate-pulse
          "
        />

        <p className="text-zinc-400 text-sm">
          AI strategic engine active
        </p>

      </div>

    </div>
  );
}