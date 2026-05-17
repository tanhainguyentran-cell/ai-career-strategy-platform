import DashboardShell from "@/app/components/DashboardShell";

import AICompanyIntelligence from "@/app/components/AICompanyIntelligence";

import AISignalFeed from "@/app/components/AISignalFeed";

import AISimulationLab from "@/app/components/AISimulationLab";

import AIDecisionEngine from "@/app/components/AIDecisionEngine";

import AISkillGapAnalyzer from "@/app/components/AISkillGapAnalyzer";

import DashboardSection from "@/app/components/DashboardSection";

import PageContainer from "@/app/components/PageContainer";

export default function IntelligencePage() {
  return (
    <DashboardShell>

      <PageContainer className="space-y-8">

        <DashboardSection
  eyebrow="Company Intelligence"
  title="Strategic Company Analysis"
  description="Analyze organizational signals, AI readiness, leadership ecosystems, and execution cultures."
>
  <AICompanyIntelligence />
</DashboardSection>

<DashboardSection
  eyebrow="Market Signals"
  title="Real-time Strategic Intelligence Feed"
  description="Track AI-native hiring trends, market shifts, and long-term strategic opportunities."
>
  <AISignalFeed />
</DashboardSection>

<DashboardSection
  eyebrow="Scenario Simulation"
  title="AI Strategic Simulation Lab"
  description="Evaluate future strategic outcomes, leverage expansion, and adaptive career pathways."
>
  <AISimulationLab />
</DashboardSection>

<DashboardSection
  eyebrow="Decision Intelligence"
  title="Strategic Decision Engine"
  description="Generate high-impact strategic recommendations based on AI-native career analysis."
>
  <AIDecisionEngine />
</DashboardSection>

<DashboardSection
  eyebrow="Capability Analysis"
  title="AI Skill Gap Intelligence"
  description="Identify capability gaps, growth opportunities, and long-term execution priorities."
>
  <AISkillGapAnalyzer />
</DashboardSection>

      </PageContainer>

    </DashboardShell>
  );
}