"use client";

import {
  useEffect,
  useState,
  Suspense,
} from "react";

import dynamic from "next/dynamic";
import DashboardShell from "@/app/components/DashboardShell";
import AIHeroBanner from "@/app/components/AIHeroBanner";
import AIKPIDashboard from "@/app/components/AIKPIDashboard";
import AIStrategicPulse from "@/app/components/AIStrategicPulse";
import DashboardSection from "@/app/components/DashboardSection";
import PageContainer from "@/app/components/PageContainer";
import WorkspaceTabs from "@/app/components/WorkspaceTabs";
import DailyBriefing from "@/app/components/DailyBriefing";
import StrategicInsightsFeed from "@/app/components/StrategicInsightsFeed";
import ProgressTracker from "@/app/components/ProgressTracker";
import GenerateRoadmapButton from "@/app/components/GenerateRoadmapButton";
import SavedRoadmaps from "@/app/components/SavedRoadmaps";
import GlobalAILoading from "@/app/components/GlobalAILoading";
import AIHistoryPanel from "@/app/components/AIHistoryPanel";
import WorkspaceAnalytics from "@/app/components/WorkspaceAnalytics";
import WorkspaceSettings from "@/app/components/WorkspaceSettings";
import {
  useWorkspace,
} from "@/app/context/WorkspaceContext";

import {
  getWorkspaceSpacing,
} from "@/lib/workspaceDensity";

const CompanyIntelligenceAnalyzer = dynamic(() =>
  import("@/app/components/CompanyIntelligenceAnalyzer").then(
    (mod) => mod.default
  )
);

const CompetitivePositioningEngine =
  dynamic(
    () =>
      import(
        "@/app/components/CompetitivePositioningEngine"
      )
  );

const OpportunityRadar =
  dynamic(
    () =>
      import(
        "@/app/components/OpportunityRadar"
      )
  );

const StrategicDecisionSimulator =
  dynamic(
    () =>
      import(
        "@/app/components/StrategicDecisionSimulator"
      )
  );

const CareerNarrativeBuilder =
  dynamic(
    () =>
      import(
        "@/app/components/CareerNarrativeBuilder"
      )
  );
import WeeklyExecutionPlanner from "@/app/components/WeeklyExecutionPlanner";
import ExecutionCalendar from "@/app/components/ExecutionCalendar";
import BurnoutAnalyzer from "@/app/components/BurnoutAnalyzer";
import HiringProbabilityEngine from "@/app/components/HiringProbabilityEngine";
import SkillGapAnalyzer from "@/app/components/SkillGapAnalyzer";
import InterviewSimulator from "@/app/components/InterviewSimulator";
import JobApplicationTracker from "@/app/components/JobApplicationTracker";
import RecruiterPsychologyAnalyzer from "@/app/components/RecruiterPsychologyAnalyzer";
import ResumeOptimizer from "@/app/components/ResumeOptimizer";
import LinkedInOptimizer from "@/app/components/LinkedInOptimizer";
import NetworkingMessageGenerator from "@/app/components/NetworkingMessageGenerator";
import WorkspaceSearch from "@/app/components/WorkspaceSearch";
import useWorkspaceShortcuts from "@/app/hooks/useWorkspaceShortcuts";
import {
  getActiveTab,
  saveActiveTab,
} from "@/lib/workspacePreferences";
import ErrorBoundary from "@/app/components/ErrorBoundary";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import FloatingAIDock from "@/app/components/FloatingAIDock";
import CommandPalette from "@/app/components/CommandPalette";
import WorkspaceStatusBar from "@/app/components/WorkspaceStatusBar";
import StrategicWorkflowNavigator from "@/app/components/StrategicWorkflowNavigator";
import {
  useWorkflow,
} from "@/app/context/WorkflowContext";
import {
  canCompleteStep,
} from "@/lib/workflowValidation";
import StrategicExecutiveSummary from "@/app/components/StrategicExecutiveSummary";
import FileIntelligenceUploader from "@/app/components/FileIntelligenceUploader";

export default function OverviewPage() {
const {
  currentStep,
  completeStep,
  completedSteps,
} = useWorkflow();

  const {
  density,
  focusMode,
} = useWorkspace();

const spacing =
  getWorkspaceSpacing(
    density
  );

 const [activeTab, setActiveTab] =
  useState(
    getActiveTab()
  );

const [
  commandPaletteOpen,
  setCommandPaletteOpen,
] = useState(false);
    useWorkspaceShortcuts({
      setActiveTab,
});

useEffect(() => {
  saveActiveTab(activeTab);
}, [activeTab]);

  const [globalLoading] =
  useState(false);

  return (
    <DashboardShell>

      <GlobalAILoading 
          visible={globalLoading} />

      <PageContainer
  className={`
    ${spacing}

    transition-all
    duration-500

    ${
      focusMode
        ? "max-w-5xl"
        : "max-w-7xl"
    }
  `}
>

        <CommandPalette
  open={commandPaletteOpen}
  setOpen={
    setCommandPaletteOpen
  }
  onAnalyze={(prompt) => {
    console.log(prompt);
  }}
/>
        <StrategicWorkflowNavigator />
        <StrategicExecutiveSummary />

        <WorkspaceTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <AnimatePresence mode="wait">

  {currentStep === 1 && (
  <>
    <DashboardSection
      eyebrow="STEP 1"
      title="Macro Environment Scanning"
      description="Analyze macroeconomic forces, industry pressures, and strategic environmental dynamics."
    >
      <ErrorBoundary>
        <CompanyIntelligenceAnalyzer />
      </ErrorBoundary>
    </DashboardSection>

    <div className="mt-8">
      <button
        onClick={() => {
  if (
    canCompleteStep(1)
  ) {
    completeStep(1);
  } else {
    alert(
      "Complete the strategic analysis first."
    );
  }
}}
        className="
          rounded-2xl
          bg-white
          px-6
          py-4
          font-black
          text-black
        "
      >
        Complete Step 1
      </button>
    </div>
  </>
)}

{currentStep === 2 && (
  <>
    <DashboardSection
      eyebrow="STEP 2"
      title="Corporate DNA Analysis"
      description="Decode organizational capabilities, strategic assets, and transformation readiness."
    >
      <CompetitivePositioningEngine />

      <OpportunityRadar />
    </DashboardSection>

    <div className="mt-8">
      <button
        onClick={() => {
  if (
    canCompleteStep(1)
  ) {
    completeStep(1);
  } else {
    alert(
      "Complete the corporate DNA analysis first."
    );
  }
}}
        className="
          rounded-2xl
          bg-white
          px-6
          py-4
          font-black
          text-black
        "
      >
        Complete Step 2
      </button>
    </div>
  </>
)}

{currentStep === 3 && (
  <>
    <DashboardSection
      eyebrow="STEP 3"
      title="Hiring Needs Decoding"
      description="Analyze recruiter psychology, hiring frameworks, and competency requirements."
    >
      <HiringProbabilityEngine />

      <SkillGapAnalyzer />

      <RecruiterPsychologyAnalyzer />
    </DashboardSection>

    <div className="mt-8">
      <button
        onClick={() => {
  if (
    canCompleteStep(1)
  ) {
    completeStep(1);
  } else {
    alert(
      "Complete the hiring needs analysis first."
    );
  }
}}
        className="
          rounded-2xl
          bg-white
          px-6
          py-4
          font-black
          text-black
        "
      >
        Complete Step 3
      </button>
    </div>
  </>
)}

{currentStep === 4 && (
  <>
    <DashboardSection
      eyebrow="STEP 4"
      title="Personal Competitive Strategy"
      description="Develop differentiated positioning and strategic career advantage."
    >
      <CareerNarrativeBuilder />

      <ResumeOptimizer />

      <LinkedInOptimizer />
    </DashboardSection>

    <div className="mt-8">
      <button
        onClick={() => {
  if (
    canCompleteStep(1)
  ) {
    completeStep(1);
  } else {
    alert(
      "Complete the competitive strategy phase first."
    );
  }
}}
        className="
          rounded-2xl
          bg-white
          px-6
          py-4
          font-black
          text-black
        "
      >
        Complete Step 4
      </button>
    </div>
  </>
)}

{currentStep === 5 && (
  <>
    <DashboardSection
      eyebrow="STEP 5"
      title="SMART Roadmap Creation"
      description="Build a measurable AI-native execution roadmap for hiring success."
    >
      <GenerateRoadmapButton />

      <WeeklyExecutionPlanner />

      <ExecutionCalendar />

      <SavedRoadmaps />
    </DashboardSection>

    {completedSteps.length === 5 && (
      <div
        className="
          mt-10
          rounded-[32px]
          border
          border-green-500
          bg-green-500/10
          p-8
          text-center
        "
      >
        <p
          className="
            mb-4
            text-xs
            uppercase
            tracking-[0.3em]
            text-green-400
          "
        >
          Strategic Workflow Completed
        </p>

        <h2
          className="
            mb-4
            text-4xl
            font-black
          "
        >
          AI Career Strategy Complete
        </h2>

        <p
          className="
            mx-auto
            max-w-3xl
            leading-relaxed
            text-zinc-300
          "
        >
          You have completed the full 5-step
          strategic intelligence framework.
          Your AI-native hiring strategy system
          is now fully operational.
        </p>
      </div>
    )}
  </>
)}

</AnimatePresence>

        {activeTab === "Strategy" && (
  <Suspense
    fallback={
      <div className="text-zinc-500">
        Loading strategy workspace...
      </div>
    }
  >
    <>

      <ErrorBoundary>
      
      <CompanyIntelligenceAnalyzer />
      
      </ErrorBoundary>

      <CompetitivePositioningEngine />

      <ErrorBoundary>

      <OpportunityRadar />

      </ErrorBoundary>

      <ErrorBoundary>
      
      <StrategicDecisionSimulator />

      </ErrorBoundary>

      <CareerNarrativeBuilder />

    </>
  </Suspense>
)}
        {activeTab === "Execution" && (
          <>

            <WeeklyExecutionPlanner />

            <ExecutionCalendar />

            <BurnoutAnalyzer />

          </>
        )}

        {activeTab === "Hiring" && (
          <>

            <ErrorBoundary>
              
              <HiringProbabilityEngine />

            </ErrorBoundary>
           
            <ErrorBoundary>
            
               <SkillGapAnalyzer />
         
            </ErrorBoundary>

            <ErrorBoundary>
            
                <InterviewSimulator />

            </ErrorBoundary>

            <JobApplicationTracker />

            <RecruiterPsychologyAnalyzer />

          </>
        )}

        {activeTab === "Branding" && (
          <>

          <ErrorBoundary>
<ResumeOptimizer />
          </ErrorBoundary>
            
            <ErrorBoundary>
<LinkedInOptimizer />
            </ErrorBoundary>
            

            <NetworkingMessageGenerator />

          </>
        )}

        {activeTab === "Intelligence" && (
          <>

            <GenerateRoadmapButton />

            <SavedRoadmaps />

            <WorkspaceSearch />

            <FileIntelligenceUploader />

            <WorkspaceAnalytics />

            <AIHistoryPanel />

            <WorkspaceSettings />

          </>
        )}

      </PageContainer>

<FloatingAIDock
  onOpenCommands={() =>
    setCommandPaletteOpen(true)
  }
/>

<WorkspaceStatusBar />

</DashboardShell>
    
  );
}