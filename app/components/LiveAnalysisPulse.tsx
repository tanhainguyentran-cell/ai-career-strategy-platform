type Props = {
  active: boolean;
};

export default function LiveAnalysisPulse({
  active,
}: Props) {
  if (!active) return null;

  return (
    <div
      className="
        fixed
        top-6
        right-6
        z-50
      "
    >

      <div
        className="
          flex
          items-center
          gap-3
          px-5
          py-3
          rounded-2xl
          border
          border-zinc-800
          bg-black/80
          backdrop-blur-2xl
        "
      >

        <div className="relative">

          <div
            className="
              w-3
              h-3
              rounded-full
              bg-green-400
            "
          />

          <div
            className="
              absolute
              inset-0
              rounded-full
              bg-green-400
              animate-ping
              opacity-60
            "
          />

        </div>

        <div>

          <p className="text-sm font-semibold">
            AI Analysis Running
          </p>

          <p className="text-zinc-500 text-xs">
            Strategic engine processing
          </p>

        </div>

      </div>

    </div>
  );
}