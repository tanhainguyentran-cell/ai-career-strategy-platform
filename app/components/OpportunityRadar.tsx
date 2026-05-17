"use client";

import { useState } from "react";

import useUserProfile from "@/app/hooks/useUserProfile";

export default function OpportunityRadar() {
  const { profile } =
    useUserProfile();

  const [loading, setLoading] =
    useState(false);

  const [insights, setInsights] =
    useState("");

  async function analyzeOpportunities() {
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
Analyze strategic career opportunities.

User Profile:
- Target Company: ${profile?.targetCompany}
- Target Role: ${profile?.targetRole}
- Experience Level: ${profile?.experienceLevel}
- Skills: ${profile?.skills?.join(", ")}
- Career Goals: ${profile?.careerGoals?.join(", ")}

Requirements:

1. Emerging career opportunities
2. AI-era market shifts
3. High-growth strategic roles
4. Hidden opportunity areas
5. Competitive market gaps
6. Long-term career timing
7. Strategic skill investment opportunities
8. AI leverage opportunities
9. Future-proof positioning
10. Career acceleration strategies

Provide:
- highly strategic insights
- actionable opportunities
- long-term recommendations
- market timing analysis
- career acceleration guidance
            `,
          }),
        });

      const data =
        await response.json();

      setInsights(
        data.response ||
          "No opportunity insights generated."
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
          AI Future Intelligence
        </p>

        <h2
          className="
            text-4xl
            font-black
            mb-4
          "
        >
          Opportunity Radar
        </h2>

        <p className="text-zinc-400">
          Discover strategic career opportunities
          using AI-powered future analysis.
        </p>

      </div>

      <button
        onClick={analyzeOpportunities}
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
          : "Scan Opportunities"}
      </button>

      {insights && (
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
          {insights}
        </div>
      )}

    </div>
  );
}