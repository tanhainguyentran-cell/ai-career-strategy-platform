import DashboardShell from "@/app/components/DashboardShell";

import AIKPIDashboard from "@/app/components/AIKPIDashboard";

import AIProgressAnalytics from "@/app/components/AIProgressAnalytics";

import AIStrategicPulse from "@/app/components/AIStrategicPulse";

import AIStrategicHeatmap from "@/app/components/AIStrategicHeatmap";

import DashboardSection from "@/app/components/DashboardSection";

import PageContainer from "@/app/components/PageContainer";

export default function AnalyticsPage() {
  return (
    <DashboardShell>

      <PageContainer className="space-y-8">

        <DashboardSection
  eyebrow="KPI Intelligence"
  title="Strategic Performance Metrics"
  description="Track AI capability growth, execution efficiency, and long-term leverage expansion."
>
  <AIKPIDashboard />
</DashboardSection>

<DashboardSection
  eyebrow="Growth Analytics"
  title="Execution & Progress Tracking"
  description="Analyze execution consistency, strategic positioning, and adaptive growth trends."
>
  <AIProgressAnalytics />
</DashboardSection>

<DashboardSection
  eyebrow="Pulse Monitoring"
  title="Real-time Strategic Pulse"
  description="Monitor leadership momentum, AI integration, and strategic energy signals."
>
  <AIStrategicPulse />
</DashboardSection>

<DashboardSection
  eyebrow="Focus Mapping"
  title="Strategic Heatmap Analysis"
  description="Visualize strategic focus intensity across core AI-native capability domains."
>
  <AIStrategicHeatmap />
</DashboardSection>

      </PageContainer>

    </DashboardShell>
  );
}