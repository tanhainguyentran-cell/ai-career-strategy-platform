import DashboardShell from "@/app/components/DashboardShell";

import AIMissionControl from "@/app/components/AIMissionControl";

import AIStrategicOS from "@/app/components/AIStrategicOS";

import AIStrategicCommandCenter from "@/app/components/AIStrategicCommandCenter";

import AIStrategicCompass from "@/app/components/AIStrategicCompass";

import AIStrategicLayerMap from "@/app/components/AIStrategicLayerMap";

import AIStrategicEcosystem from "@/app/components/AIStrategicEcosystem";

import AIStrategicBrain from "@/app/components/AIStrategicBrain";

import AIStrategicNetwork from "@/app/components/AIStrategicNetwork";

import DashboardSection from "@/app/components/DashboardSection";

import PageContainer from "@/app/components/PageContainer";

export default function MissionControlPage() {
  return (
    <DashboardShell>

      <PageContainer className="space-y-8">

        <DashboardSection
  eyebrow="Mission Systems"
  title="AI Mission Control Center"
  description="Monitor AI-native operational systems, strategic execution infrastructure, and adaptive intelligence layers."
>
  <AIMissionControl />
</DashboardSection>

<DashboardSection
  eyebrow="Operating Architecture"
  title="Strategic Operating System"
  description="Core strategic infrastructure powering AI-native execution, growth, and positioning systems."
>
  <AIStrategicOS />
</DashboardSection>

<DashboardSection
  eyebrow="Executive Intelligence"
  title="Strategic Command Center"
  description="Centralized operational visibility into AI systems, adaptive growth, and execution intelligence."
>
  <AIStrategicCommandCenter />
</DashboardSection>

<DashboardSection
  eyebrow="Directional Intelligence"
  title="Strategic Compass"
  description="AI-guided strategic direction system for long-term leadership and positioning decisions."
>
  <AIStrategicCompass />
</DashboardSection>

<DashboardSection
  eyebrow="Architecture Mapping"
  title="Strategic Layer Infrastructure"
  description="Visualize interconnected strategic layers across intelligence, execution, growth, and evolution."
>
  <AIStrategicLayerMap />
</DashboardSection>

<DashboardSection
  eyebrow="Adaptive Ecosystem"
  title="Strategic Ecosystem Architecture"
  description="Integrated AI-native ecosystem for continuous leverage, adaptability, and execution expansion."
>
  <AIStrategicEcosystem />
</DashboardSection>

<DashboardSection
  eyebrow="Cognitive Intelligence"
  title="Strategic Brain Network"
  description="AI-native cognition framework connecting leadership, systems thinking, execution, and growth."
>
  <AIStrategicBrain />
</DashboardSection>

<DashboardSection
  eyebrow="Relationship Mapping"
  title="Strategic Network Graph"
  description="Map interconnected strategic relationships between core AI-native capability domains."
>
  <AIStrategicNetwork />
</DashboardSection>

      </PageContainer>

    </DashboardShell>
  );
}