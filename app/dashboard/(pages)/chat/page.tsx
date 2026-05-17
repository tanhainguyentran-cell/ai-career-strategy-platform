import DashboardShell from "@/app/components/DashboardShell";

import AIStrategyChat from "@/app/components/AIStrategyChat";

import AIIntelligenceTerminal from "@/app/components/AIIntelligenceTerminal";

import DashboardSection from "@/app/components/DashboardSection";

import PageContainer from "@/app/components/PageContainer";

export default function ChatPage() {
  return (
    <DashboardShell>

      <PageContainer className="space-y-8">

        <DashboardSection
  eyebrow="AI Conversation Layer"
  title="Strategic AI Chat System"
  description="Interact with the AI-native strategic assistant for career planning, positioning, execution, and long-term growth analysis."
>
  <AIStrategyChat />
</DashboardSection>

<DashboardSection
  eyebrow="System Intelligence"
  title="AI Intelligence Terminal"
  description="Monitor AI-generated strategic logs, execution signals, adaptive growth insights, and operational intelligence."
>
  <AIIntelligenceTerminal />
</DashboardSection>

      </PageContainer>

    </DashboardShell>
  );
}