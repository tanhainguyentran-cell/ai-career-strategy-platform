import AnimatedBorder from "@/app/components/AnimatedBorder";
import GradientText from "@/app/components/GradientText";
import FloatingStatBubble from "@/app/components/FloatingStatBubble";
import AIStatusPill from "@/app/components/AIStatusPill";
import LiveTypingText from "@/app/components/LiveTypingText";

type Props = {
  company: string;
};

export default function AIHeroBanner({
  company,
}: Props) {
  return (
    <div className="relative">

      <FloatingStatBubble
        label="AI Confidence"
        value="94%"
        top="8%"
        right="4%"
      />

      <FloatingStatBubble
        label="Hiring Match"
        value="88%"
        top="68%"
        right="10%"
        delay="1s"
      />

      <FloatingStatBubble
        label="Roadmap Score"
        value="91%"
        top="55%"
        left="3%"
        delay="2s"
      />

      <AnimatedBorder>

        <div
          className="
            relative
            overflow-hidden
            rounded-[36px]
            border
            border-zinc-800
            bg-gradient-to-br
            from-zinc-900
            via-black
            to-zinc-900
            p-10
            lg:p-16
          "
        >

          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_35%)]
              pointer-events-none
            "
          />

          <div className="relative z-10 max-w-4xl">

            <div className="mb-8">

              <AIStatusPill text="AI Strategic Intelligence Active" />

            </div>

            <h1
              className="
                text-5xl
                lg:text-7xl
                font-black
                leading-tight
                mb-8
              "
            >

              <GradientText>
                Maximize Your Probability Of Getting Hired
              </GradientText>

              <br />

              <span className="text-zinc-500">
                At{" "}
                {company || "Your Target Company"}
              </span>

            </h1>

            <LiveTypingText
              texts={[
                "AI analyzes macro trends, hiring culture, and strategic positioning in real time.",

                "Generate SMART execution roadmaps optimized for your target company.",

                "Build competitive advantage using AI-powered strategic intelligence.",

                "Transform career planning into a measurable execution system.",
              ]}
            />

          </div>

        </div>

      </AnimatedBorder>

    </div>
  );
}