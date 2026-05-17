import GlassPanel from "@/app/components/GlassPanel";
import AIConfidenceBar from "@/app/components/AIConfidenceBar";

export default function AIConfidencePanel() {
  return (
    <GlassPanel className="p-8">

      <div className="space-y-8">

        <div>

          <p
            className="
              text-zinc-500
              uppercase
              tracking-[0.2em]
              text-xs
              mb-4
            "
          >
            AI Evaluation
          </p>

          <h3 className="text-4xl font-black">
            Strategic Confidence Analysis
          </h3>

        </div>

        <div className="space-y-6">

          <AIConfidenceBar value={94} />

          <AIConfidenceBar value={88} />

          <AIConfidenceBar value={91} />

          <AIConfidenceBar value={86} />

        </div>

      </div>

    </GlassPanel>
  );
}