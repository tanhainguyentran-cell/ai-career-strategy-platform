"use client";

import { useState } from "react";

import useUserProfile from "@/app/hooks/useUserProfile";
import {
  saveStrategicMemory,
} from "@/lib/strategicMemory";

export default function SkillGapAnalyzer() {
  const { profile } =
    useUserProfile();

  const [loading, setLoading] =
    useState(false);

  const [analysis, setAnalysis] =
    useState("");

  async function analyzeSkillGap() {
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
Analyze this user's skill gaps.

Target Company:
${profile?.targetCompany}

Target Role:
${profile?.targetRole}

Experience:
${profile?.experienceLevel}

Current Skills:
${profile?.skills?.join(", ")}

Career Goals:
${profile?.careerGoals?.join(", ")}

Requirements:

1. Missing Critical Skills
2. High-Leverage Skills
3. AI-Native Skills Needed
4. Technical Skill Gaps
5. Strategic Communication Gaps
6. Leadership Gaps
7. Hiring Competitiveness Gaps
8. Fastest Skill ROI
9. Skill Acquisition Priorities
10. 30-60-90 Day Skill Plan

Provide:
- highly structured analysis
- strategic recommendations
- execution prioritization
- practical learning strategy
            `,
          }),
        });

      const data =
  await response.json();

const finalResponse =
  data.response ||
  "No skill gap analysis generated.";

setAnalysis(
  finalResponse
);

saveStrategicMemory(
  "step3",
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
          AI Skill Intelligence
        </p>

        <h2
          className="
            text-4xl
            font-black
            mb-4
          "
        >
          Skill Gap Analyzer
        </h2>

        <p className="text-zinc-400">
          Discover the highest-impact
          skills needed to maximize
          hiring competitiveness.
        </p>

      </div>

      <button
        onClick={analyzeSkillGap}
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
          : "Analyze Skill Gaps"}
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