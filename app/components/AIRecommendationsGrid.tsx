import AIRecommendationCard from "@/app/components/AIRecommendationCard";

export default function AIRecommendationsGrid() {
  return (
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
          AI Strategic Guidance
        </p>

        <h3 className="text-4xl font-black">
          Personalized Recommendations
        </h3>

      </div>

      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-3
          gap-6
        "
      >

        <AIRecommendationCard
          title="Strengthen Strategic Communication"
          description="Improve executive-style communication and structured strategic thinking for leadership-facing interviews."
          priority="High"
        />

        <AIRecommendationCard
          title="Develop Industry Positioning"
          description="Build stronger differentiation by aligning personal branding with future industry transformation trends."
          priority="Medium"
        />

        <AIRecommendationCard
          title="Expand Execution Portfolio"
          description="Demonstrate measurable execution capability through real-world strategic projects and quantified outcomes."
          priority="Critical"
        />

      </div>

    </div>
  );
}