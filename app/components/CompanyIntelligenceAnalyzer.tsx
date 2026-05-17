"use client";

import { useState } from "react";
import {
  withAIRateLimit,
} from "@/lib/withAIRateLimit";
import getAIErrorMessage from "@/lib/getAIErrorMessage";
import buildAIContext from "@/lib/buildAIContext";
import useUserProfile from "@/app/hooks/useUserProfile";

type AnalysisSection = {
  title: string;

  content: string;
};
import { useAI } from "@/app/context/AIContext";
import {
  getCachedAI,
  setCachedAI,
} from "@/lib/aiCache";
import {
  saveAIHistory,
} from "@/lib/aiHistory";
import {
  useNotification,
} from "@/app/context/NotificationContext";
import useTypewriter from "@/app/hooks/useTypewriter";
import AISkeleton from "@/app/components/AISkeleton";
import {
  saveStrategicMemory,
} from "@/lib/strategicMemory";
import {
  getStrategicMemory,
} from "@/lib/strategicMemory";

export default function CompanyIntelligenceAnalyzer() {
  const { setGlobalLoading } =
   useAI();
  const { notify } =
    useNotification();
  const [company, setCompany] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [analysis, setAnalysis] =
    useState("");

  const streamedAnalysis =
    useTypewriter(analysis);
    
  const [error, setError] =
    useState("");

  const { profile } =
   useUserProfile();

  const aiContext =
    buildAIContext(profile);

  const strategicMemory =
    getStrategicMemory();

  async function analyzeCompany() {
  if (!company.trim()) return;

  const cacheKey =
  `company-${company}`;

const cached =
  getCachedAI(cacheKey);

if (cached) {
  setAnalysis(cached);

  notify(
    "Loaded AI analysis from cache."
  );

  return;
}

  try {
    setLoading(true);

    setGlobalLoading(true);

    setError("");

    const response =
      await withAIRateLimit(
        async () =>
          fetch("/api/ai/chat", {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              message: `
${aiContext}

Previous Strategic Insights:
${JSON.stringify(
  strategicMemory,
  null,
  2
)}

Conduct a strategic intelligence analysis for ${company}.

Requirements:

1. PESTLE Analysis
2. Porter's Five Forces
3. Corporate DNA Analysis
4. Hiring Culture Analysis
5. Core Competencies
6. AI Transformation Readiness
7. Competitive Strategic Positioning
8. Strategic Risks
9. Hiring Probability Optimization Advice
10. Candidate Positioning Strategy

Provide:
- highly structured analysis
- executive-level strategic insights
- practical career implications
- hiring strategy recommendations
- actionable execution advice
              `,
            }),
          })
      );

    const data =
      await response.json();

    const finalResponse =
  data.response ||
  "No analysis generated.";

setAnalysis(finalResponse);

saveStrategicMemory(
  "step1",
  finalResponse
);

setCachedAI(
  cacheKey,
  finalResponse
);

notify(
  "Strategic analysis completed."
);
saveAIHistory({
  id: crypto.randomUUID(),

  type: "company-analysis",

  prompt: company,

  response: finalResponse,

  createdAt: Date.now(),
});

  } catch (error) {
    console.error(error);

    const message =
  getAIErrorMessage(error);

setError(message);

notify(message);
  } finally {
    setLoading(false);

    setGlobalLoading(false);
  }

}
return (
    <div
      className="
        mt-10
        rounded-[32px]
        border
        border-zinc-800
        bg-zinc-950/40
        p-8
      "
    >

      <div className="mb-8">

        <p
          className="
            text-xs
            uppercase
            tracking-[0.3em]
            text-zinc-500
            mb-3
          "
        >
          AI Strategic Intelligence
        </p>

        <h2
          className="
            text-4xl
            font-black
            mb-4
          "
        >
          Company Intelligence Analyzer
        </h2>

        <p className="text-zinc-400">
          Analyze target companies using
          AI-powered strategic frameworks.
        </p>

      </div>

      <div
        className="
          flex
          gap-4
          mb-8
        "
      >

        <input
          value={company}
          onChange={(e) =>
            setCompany(e.target.value)
          }
          placeholder="Enter company name..."
          className="
            flex-1
            rounded-2xl
            border
            border-zinc-800
            bg-black
            px-5
            py-4
            outline-none
          "
        />

        <button
          onClick={analyzeCompany}
          disabled={loading}
          className="
            rounded-2xl
            bg-white
            px-6
            py-4
            font-black
            text-black
          "
        >
          {loading
            ? "Analyzing..."
            : "Analyze"}
        </button>

      </div>

      {error && (
  <div
    className="
      mt-6
      rounded-2xl
      border
      border-red-900
      bg-red-950/30
      p-5
      text-red-300
    "
  >
    {error}
  </div>
)}
      {loading && <AISkeleton />}

      {analysis && (
  <>
    <div
      className="
        mb-4
        flex
        gap-3
      "
    >
      <button
        onClick={() =>
          navigator.clipboard.writeText(analysis)
        }
        className="
          rounded-2xl
          border
          border-zinc-800
          bg-black
          px-4
          py-3
          text-sm
          font-bold
        "
      >
        Copy
      </button>

      <button
        className="
          rounded-2xl
          border
          border-zinc-800
          bg-black
          px-4
          py-3
          text-sm
          font-bold
        "
      >
        Save
      </button>

      <button
        className="
          rounded-2xl
          border
          border-zinc-800
          bg-black
          px-4
          py-3
          text-sm
          font-bold
        "
      >
        Export
      </button>
    </div>

    <div
      className="
        rounded-3xl
        border
        border-zinc-800
        bg-black
        p-6
        whitespace-pre-wrap
        leading-relaxed
        text-zinc-300
      "
    >
      {loading ? null : (
        <>
          {streamedAnalysis}

          {streamedAnalysis &&
            streamedAnalysis.length < analysis.length && (
              <span
                className="
                  ml-1
                  animate-pulse
                  text-white
                "
              >
                ▋
              </span>
            )}
        </>
      )}
    </div>
  </>
)}

</div>
);
}