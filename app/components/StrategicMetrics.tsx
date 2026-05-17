import MetricRing from "@/app/components/MetricRing";
import GlassPanel from "@/app/components/GlassPanel";
import useUserProfile from "@/app/hooks/useUserProfile";

export default function StrategicMetrics() {
  const { profile } =
  useUserProfile();

const skillCount =
  profile?.skills?.length || 0;

const hiringMatch =
  Math.min(
    100,
    55 + skillCount * 8
  );

const strategicFit =
  Math.min(
    100,
    50 + skillCount * 7
  );

const roadmapReadiness =
  Math.min(
    100,
    45 + skillCount * 9
  );
  return (
    <GlassPanel className="p-10">

      <div className="mb-10">

        <p
          className="
            text-zinc-500
            uppercase
            tracking-[0.2em]
            text-xs
            mb-4
          "
        >
          Strategic Metrics
        </p>

        <h3 className="text-4xl font-black">
          AI Performance Indicators
        </h3>

      </div>

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-10
        "
      >

        <MetricRing
          value={hiringMatch}
          label="Hiring Match"
        />

        <MetricRing
          value={strategicFit}
          label="Strategic Fit"
        />

        <MetricRing
          value={roadmapReadiness}
          label="Roadmap Readiness"
        />

      </div>

    </GlassPanel>
  );
}