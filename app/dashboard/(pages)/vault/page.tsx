import DashboardShell from "@/app/components/DashboardShell";

import AIStrategicVault from "@/app/components/AIStrategicVault";

import AIStrategicJournal from "@/app/components/AIStrategicJournal";

import AIStrategicMemory from "@/app/components/AIStrategicMemory";

import AIAnalysisHistory from "@/app/components/AIAnalysisHistory";

import AIResumeUpload from "@/app/components/AIResumeUpload";

import DashboardSection from "@/app/components/DashboardSection";

import PageContainer from "@/app/components/PageContainer";

export default function VaultPage() {
  return (
    <DashboardShell>

      <PageContainer className="space-y-8">

        <DashboardSection
  eyebrow="Knowledge Infrastructure"
  title="Strategic Intelligence Vault"
  description="Centralized storage for AI-native strategic systems, frameworks, and operational knowledge."
>
  <AIStrategicVault />
</DashboardSection>

<DashboardSection
  eyebrow="Strategic Reflection"
  title="AI Strategic Journal"
  description="Capture reflections, execution insights, adaptive learning loops, and strategic thinking patterns."
>
  <AIStrategicJournal />
</DashboardSection>

<DashboardSection
  eyebrow="Memory Intelligence"
  title="Strategic Memory System"
  description="Track long-term AI-generated strategic insights, growth signals, and behavioral evolution."
>
  <AIStrategicMemory />
</DashboardSection>

<DashboardSection
  eyebrow="Historical Analysis"
  title="Saved Strategic Reports"
  description="Access previously generated intelligence reports, company analyses, and AI strategic reviews."
>
  <AIAnalysisHistory />
</DashboardSection>

<DashboardSection
  eyebrow="Resume Intelligence"
  title="AI Resume Analysis"
  description="Upload resumes and extract strategic capability insights, positioning signals, and skill gaps."
>
  <AIResumeUpload />
</DashboardSection>

      </PageContainer>

    </DashboardShell>
  );
}