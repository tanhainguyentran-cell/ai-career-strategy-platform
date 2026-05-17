import GlassPanel from "@/app/components/GlassPanel";
import AnimatedCounter from "@/app/components/AnimatedCounter";

type Props = {
  score: number;

  label: string;

  description: string;
};

export default function AnalysisScoreCard({
  score,
  label,
  description,
}: Props) {
  return (
    <GlassPanel className="p-8">

      <div className="space-y-6">

        <div
          className="
            w-14
            h-14
            rounded-2xl
            border
            border-zinc-700
            bg-zinc-800/40
            flex
            items-center
            justify-center
          "
        >

          <div
            className="
              w-3
              h-3
              rounded-full
              bg-white
              animate-pulse
            "
          />

        </div>

        <div>

          <p
            className="
              text-zinc-500
              uppercase
              tracking-[0.2em]
              text-xs
              mb-3
            "
          >
            {label}
          </p>

          <h3
            className="
              text-5xl
              font-black
              mb-4
            "
          >
            <AnimatedCounter
              value={score}
              suffix="%"
            />
          </h3>

          <p className="text-zinc-400 leading-relaxed">
            {description}
          </p>

        </div>

      </div>

    </GlassPanel>
  );
}