"use client";

import { useState } from "react";

import useUserProfile from "@/app/hooks/useUserProfile";

export default function WeeklyExecutionPlanner() {
  const { profile } =
    useUserProfile();

  const [loading, setLoading] =
    useState(false);

  const [plan, setPlan] =
    useState("");

  async function generatePlan() {
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
Create a weekly execution system for this user.

Target Company:
${profile?.targetCompany}

Target Role:
${profile?.targetRole}

Experience:
${profile?.experienceLevel}

Skills:
${profile?.skills?.join(", ")}

Career Goals:
${profile?.careerGoals?.join(", ")}

Requirements:

1. Weekly Objectives
2. Daily Action Items
3. Learning Tasks
4. AI Skill Development
5. Networking Tasks
6. Interview Preparation
7. KPI Metrics
8. Deep Work Blocks
9. Execution Priorities
10. Measurable Weekly Outcomes

Provide:
- highly structured plan
- practical execution system
- productivity optimization
- strategic prioritization
- AI-native leverage recommendations
            `,
          }),
        });

      const data =
        await response.json();

      setPlan(
        data.response ||
          "No plan generated."
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
          AI Execution System
        </p>

        <h2
          className="
            text-4xl
            font-black
            mb-4
          "
        >
          Weekly Execution Planner
        </h2>

        <p className="text-zinc-400">
          Transform strategy into measurable
          weekly execution.
        </p>

      </div>

      <button
        onClick={generatePlan}
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
          ? "Generating..."
          : "Generate Weekly Plan"}
      </button>

      {plan && (
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
          {plan}
        </div>
      )}

    </div>
  );
}