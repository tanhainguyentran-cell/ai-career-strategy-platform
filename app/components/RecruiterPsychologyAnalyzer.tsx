"use client";

import { useState } from "react";

import useUserProfile from "@/app/hooks/useUserProfile";

export default function RecruiterPsychologyAnalyzer() {
  const { profile } =
    useUserProfile();

  const [context, setContext] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [analysis, setAnalysis] =
    useState("");

  async function analyzePsychology() {
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
Analyze recruiter psychology strategically.

Target Company:
${profile?.targetCompany}

Target Role:
${profile?.targetRole}

Candidate Context:
${context}

Requirements:

1. Predict recruiter concerns
2. Identify hidden objections
3. Analyze hiring psychology
4. Detect credibility gaps
5. Predict interviewer perception
6. Improve persuasion positioning
7. Identify trust-building opportunities
8. Improve executive presence perception
9. Optimize communication framing
10. Strategic candidate differentiation

Provide:
- detailed strategic analysis
- recruiter psychology insights
- positioning recommendations
- persuasion improvements
- interview risk mitigation
            `,
          }),
        });

      const data =
        await response.json();

      setAnalysis(
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
          AI Hiring Psychology
        </p>

        <h2
          className="
            text-4xl
            font-black
            mb-4
          "
        >
          Recruiter Psychology Analyzer
        </h2>

        <p className="text-zinc-400">
          Decode recruiter thinking and
          optimize strategic positioning.
        </p>

      </div>

      <textarea
        value={context}
        onChange={(e) =>
          setContext(e.target.value)
        }
        placeholder="Describe your hiring situation, concerns, or interview context..."
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
        onClick={analyzePsychology}
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
          : "Analyze Recruiter Psychology"}
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