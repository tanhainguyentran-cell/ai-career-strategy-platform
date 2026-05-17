import DashboardShell from "@/app/components/DashboardShell";

import AIRoadmapTimeline from "@/app/components/AIRoadmapTimeline";

import AIActionTasks from "@/app/components/AIActionTasks";

import AIEvolutionTracker from "@/app/components/AIEvolutionTracker";

import AIExecutionLoop from "@/app/components/AIExecutionLoop";

import DashboardSection from "@/app/components/DashboardSection";

import PageContainer from "@/app/components/PageContainer";

export default function RoadmapPage() {
  return (
    <DashboardShell>

      <PageContainer className="space-y-8">

        <DashboardSection
  eyebrow="Strategic Roadmap"
  title="AI Career Execution Timeline"
  description="Structured long-term roadmap for AI-native growth, execution, and leadership evolution."
>
  <AIRoadmapTimeline />
</DashboardSection>

<DashboardSection
  eyebrow="Execution Tasks"
  title="Strategic Action Management"
  description="Track execution priorities, strategic initiatives, and operational consistency."
>
  <AIActionTasks />
</DashboardSection>

<DashboardSection
  eyebrow="Evolution Tracking"
  title="Adaptive Growth Evolution"
  description="Monitor long-term capability expansion and AI-native strategic transformation."
>
  <AIEvolutionTracker />
</DashboardSection>

<DashboardSection
  eyebrow="Execution Intelligence"
  title="Strategic Execution Loop"
  description="Continuously analyze, execute, reflect, and optimize strategic systems."
>
  <AIExecutionLoop />
</DashboardSection>

      </PageContainer>

    </DashboardShell>
  );
}