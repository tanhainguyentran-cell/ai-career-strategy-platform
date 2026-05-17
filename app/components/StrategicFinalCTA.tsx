type Props = {
  onAnalyze: () => void;
};

export default function StrategicFinalCTA({
  onAnalyze,
}: Props) {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[48px]
        border
        border-zinc-800
        bg-gradient-to-br
        from-black
        via-zinc-900
        to-black
        px-8
        py-20
      "
    >

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_45%)]
          pointer-events-none
        "
      />

      <div
        className="
          relative
          z-10
          max-w-5xl
          mx-auto
          text-center
        "
      >

        <p
          className="
            text-zinc-500
            uppercase
            tracking-[0.25em]
            text-xs
            mb-6
          "
        >
          Strategic Execution Starts Here
        </p>

        <h3
          className="
            text-4xl
            lg:text-7xl
            font-black
            leading-tight
            mb-10
          "
        >
          Build your AI-powered strategic
          career advantage before the market evolves again.
        </h3>

        <p
          className="
            text-zinc-400
            text-xl
            leading-relaxed
            mb-12
            max-w-4xl
            mx-auto
          "
        >
          Continuously optimize positioning,
          execution capability, leadership potential,
          and organizational alignment using adaptive AI intelligence.
        </p>

        <button
          onClick={onAnalyze}
          className="
            px-10
            py-5
            rounded-3xl
            bg-white
            text-black
            text-lg
            font-black
            hover:scale-105
            transition-all
            duration-300
            shadow-2xl
          "
        >
          Launch Strategic Analysis
        </button>

      </div>

    </div>
  );
}