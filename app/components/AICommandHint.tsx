export default function AICommandHint() {
  return (
    <div
      className="
        fixed
        bottom-28
        right-6
        z-50
      "
    >

      <div
        className="
          flex
          items-center
          gap-3
          px-4
          py-3
          rounded-2xl
          border
          border-zinc-800
          bg-black/70
          backdrop-blur-2xl
        "
      >

        <div
          className="
            px-2
            py-1
            rounded-lg
            border
            border-zinc-700
            text-xs
            text-zinc-400
          "
        >
          ⌘ K
        </div>

        <p
          className="
            text-sm
            text-zinc-300
          "
        >
          Open AI Command Center
        </p>

      </div>

    </div>
  );
}