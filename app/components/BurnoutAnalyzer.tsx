"use client";

import { useState } from "react";

import useUserProfile from "@/app/hooks/useUserProfile";

export default function BurnoutAnalyzer() {
  const { profile } =
    useUserProfile();

  const [context, setContext] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [analysis, setAnalysis] =
    useState("");

  async function analyzeBurnout() {
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
Analyze burnout risk and execution sustainability.

User Profile:
- Target Company: ${profile?.targetCompany}
- Target Role: ${profile?.targetRole}
- Experience Level: ${profile?.experienceLevel}
- Skills: ${profile?.skills?.join(", ")}
- Career Goals: ${profile?.careerGoals?.join(", ")}

Current Situation:
${context}

Requirements:

1. Burnout risk analysis
2. Sustainability assessment
3. Productivity pacing strategy
4. Deep work optimization
5. Stress management recommendations
6. Recovery system design
7. Long-term execution sustainability
8. AI-assisted productivity leverage
9. Workload balancing strategy
10. High-performance sustainability framework

Provide:
- strategic sustainability analysis
- burnout prevention strategy
- productivity optimization
- recovery recommendations
- long-term execution guidance
            `,
          }),
        });

      const data =
        await response.json();

      setAnalysis(
        data.response ||
          "No burnout analysis generated."
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
          AI Sustainability Intelligence
        </p>

        <h2
          className="
            text-4xl
            font-black
            mb-4
          "
        >
          Burnout & Sustainability Analyzer
        </h2>

        <p className="text-zinc-400">
          Optimize long-term performance
          and prevent strategic burnout.
        </p>

      </div>

      <textarea
        value={context}
        onChange={(e) =>
          setContext(e.target.value)
        }
        placeholder="Describe your workload, stress, execution pressure, or productivity concerns..."
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
        onClick={analyzeBurnout}
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
          : "Analyze Sustainability"}
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