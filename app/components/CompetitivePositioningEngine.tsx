"use client";

import { useState } from "react";

import useUserProfile from "@/app/hooks/useUserProfile";

import {
  saveStrategicMemory,
} from "@/lib/strategicMemory";

export default function CompetitivePositioningEngine() {
  const { profile } =
    useUserProfile();

  const [context, setContext] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [analysis, setAnalysis] =
    useState("");

  async function analyzePositioning() {
    if (!context.trim()) return;

    try {
      setLoading(true);

      const response =
        await fetch("/api/ai/chat", {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            message: `
Analyze competitive positioning strategically.

User Profile:
- Target Company: ${profile?.targetCompany}
- Target Role: ${profile?.targetRole}
- Experience Level: ${profile?.experienceLevel}
- Skills: ${profile?.skills?.join(", ")}
- Career Goals: ${profile?.careerGoals?.join(", ")}

Additional Context:
${context}

Requirements:

1. Candidate differentiation analysis
2. Competitive advantage identification
3. Strategic positioning strategy
4. Unique value proposition
5. Personal brand moat creation
6. AI-native differentiation
7. Executive positioning opportunities
8. Hiring market competitiveness
9. Strategic narrative optimization
10. Long-term positioning strategy

Provide:
- highly strategic analysis
- positioning recommendations
- differentiation tactics
- persuasive narrative improvements
- career moat strategy
            `,
          }),
        });

      const data =
  await response.json();

const finalResponse =
  data.response ||
  "No positioning analysis generated.";

setAnalysis(
  finalResponse
);

saveStrategicMemory(
  "step2",
  finalResponse
);
      
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
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
          AI Competitive Strategy
        </p>

        <h2
          className="
            text-4xl
            font-black
            mb-4
          "
        >
          Competitive Positioning Engine
        </h2>

        <p className="text-zinc-400">
          Discover strategic differentiation
          and career positioning advantages.
        </p>

      </div>

      <textarea
        value={context}
        onChange={(e) =>
          setContext(e.target.value)
        }
        placeholder="Describe your current positioning, competitors, strengths, or career concerns..."
        className="
          min-h-[220px]
          w-full
          rounded-3xl
          border
          border-zinc-800
          bg-black
          p-6
          outline-none
          resize-none
          leading-relaxed
        "
      />

      <button
        onClick={analyzePositioning}
        disabled={loading}
        className="
          mt-6
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
          : "Analyze Competitive Positioning"}
      </button>

      {analysis && (
        <div
          className="
            mt-8
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
          {analysis}
        </div>
      )}

    </div>
  );
}