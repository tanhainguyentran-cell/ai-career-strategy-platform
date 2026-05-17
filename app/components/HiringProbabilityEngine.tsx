"use client";

import { useState } from "react";

import useUserProfile from "@/app/hooks/useUserProfile";

export default function HiringProbabilityEngine() {
  const { profile } =
    useUserProfile();

  const [loading, setLoading] =
    useState(false);

  const [result, setResult] =
    useState("");

  async function analyzeProbability() {
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
Analyze this user's hiring probability.

Target Company:
${profile?.targetCompany}

Target Role:
${profile?.targetRole}

Experience Level:
${profile?.experienceLevel}

Skills:
${profile?.skills?.join(", ")}

Career Goals:
${profile?.careerGoals?.join(", ")}

Requirements:

1. Hiring Probability Score (0-100)
2. Major Strengths
3. Major Weaknesses
4. Strategic Risks
5. Competitive Advantages
6. Skill Gaps
7. Execution Priorities
8. Interview Readiness
9. AI Leverage Opportunities
10. Fastest Probability Improvement Strategy

Provide:
- highly structured output
- executive strategic tone
- practical recommendations
- quantified analysis
            `,
          }),
        });

      const data =
        await response.json();

      setResult(
        data.response ||
          "No analysis generated."
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
          AI Probability Engine
        </p>

        <h2
          className="
            text-4xl
            font-black
            mb-4
          "
        >
          Hiring Probability Score
        </h2>

        <p className="text-zinc-400">
          Evaluate your hiring competitiveness
          using AI strategic analysis.
        </p>

      </div>

      <button
        onClick={analyzeProbability}
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
          : "Analyze Hiring Probability"}
      </button>

      {result && (
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
          {result}
        </div>
      )}

    </div>
  );
}