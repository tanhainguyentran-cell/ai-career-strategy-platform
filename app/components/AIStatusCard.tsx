import GlassCard from "@/app/components/GlassCard";

import TypingText from "@/app/components/TypingText";

type Props = {
  isAnalyzing: boolean;
};

export default function AIStatusCard({
  isAnalyzing,
}: Props) {
  if (!isAnalyzing) return null;

  return (
    <GlassCard className="mt-8 p-8 flex items-start gap-5">

      <div className="w-10 h-10 border-4 border-zinc-700 border-t-white rounded-full animate-spin shrink-0 mt-1" />

      <div>

        <h3 className="text-xl font-bold mb-3">
          AI Analysis Running
        </h3>

        <p className="text-zinc-400 leading-relaxed">
          <TypingText
            text="Generating strategic career intelligence, hiring insights, competitor positioning analysis, and SMART roadmap recommendations..."
            speed={15}
          />
        </p>

      </div>

    </GlassCard>
  );
}