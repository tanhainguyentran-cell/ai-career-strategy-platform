type Props = {
  onRestart: () => void;
};

export default function StrategicEndScreen({
  onRestart,
}: Props) {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[52px]
        border
        border-zinc-800
        bg-gradient-to-br
        from-black
        via-zinc-900
        to-black
        px-8
        py-24
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
            tracking-[0.3em]
            text-xs
            mb-6
          "
        >
          Strategic System Completed
        </p>

        <h3
          className="
            text-4xl
            lg:text-8xl
            font-black
            leading-tight
            mb-10
          "
        >
          Your next competitive advantage
          is continuous strategic evolution.
        </h3>

        <p
          className="
            text-zinc-400
            text-xl
            leading-relaxed
            mb-14
            max-w-4xl
            mx-auto
          "
        >
          AI-powered strategic intelligence,
          adaptive execution systems, and
          long-term positioning frameworks
          will define the future of career acceleration.
        </p>

        <button
          onClick={onRestart}
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
          Restart Strategic Analysis
        </button>

      </div>

    </div>
  );
}