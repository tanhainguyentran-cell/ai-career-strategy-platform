"use client";

import { useState } from "react";

import useUserProfile from "@/app/hooks/useUserProfile";

export default function StrategicDecisionSimulator() {
  const { profile } =
    useUserProfile();

  const [decision, setDecision] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [simulation, setSimulation] =
    useState("");

  async function simulateDecision() {
    if (!decision.trim()) return;

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
Simulate strategic career decision outcomes.

User Profile:
- Target Company: ${profile?.targetCompany}
- Target Role: ${profile?.targetRole}
- Experience Level: ${profile?.experienceLevel}
- Skills: ${profile?.skills?.join(", ")}
- Career Goals: ${profile?.careerGoals?.join(", ")}

Strategic Decision:
${decision}

Requirements:

1. Simulate short-term outcomes
2. Simulate long-term consequences
3. Opportunity cost analysis
4. Strategic risk analysis
5. AI-era career implications
6. Competitive positioning impact
7. Financial and growth implications
8. Leadership trajectory implications
9. Strategic upside scenarios
10. Recommended strategic choice

Provide:
- detailed simulation
- strategic reasoning
- scenario comparison
- executive-level analysis
- future forecasting insights
            `,
          }),
        });

      const data =
        await response.json();

      setSimulation(
        data.response ||
          "No simulation generated."
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
          AI Strategic Simulation
        </p>

        <h2
          className="
            text-4xl
            font-black
            mb-4
          "
        >
          Strategic Decision Simulator
        </h2>

        <p className="text-zinc-400">
          Simulate career decisions and
          analyze long-term strategic outcomes.
        </p>

      </div>

      <textarea
        value={decision}
        onChange={(e) =>
          setDecision(e.target.value)
        }
        placeholder="Describe a career decision or strategic dilemma..."
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
        onClick={simulateDecision}
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
          ? "Simulating..."
          : "Simulate Strategic Decision"}
      </button>

      {simulation && (
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
          {simulation}
        </div>
      )}

    </div>
  );
}