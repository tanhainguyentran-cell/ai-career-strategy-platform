"use client";

import {
  useEffect,
  useState,
} from "react";

import useUserProfile from "@/app/hooks/useUserProfile";

export default function DailyBriefing() {
  const { profile } =
    useUserProfile();

  const [loading, setLoading] =
    useState(false);

  const [briefing, setBriefing] =
    useState("");

  useEffect(() => {
    async function generateBriefing() {
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
Generate a personalized daily strategic briefing.

User Profile:
- Target Company: ${profile?.targetCompany}
- Target Role: ${profile?.targetRole}
- Experience Level: ${profile?.experienceLevel}
- Skills: ${profile?.skills?.join(", ")}
- Career Goals: ${profile?.careerGoals?.join(", ")}

Requirements:

1. Daily strategic focus
2. Execution priorities
3. Hiring optimization advice
4. AI leverage opportunities
5. Career growth recommendations
6. Productivity focus
7. Interview preparation reminders
8. Networking priorities
9. Market intelligence insights
10. Motivational strategic guidance

Tone:
- executive-level
- intelligent
- concise
- actionable
- motivating
              `,
            }),
          });

        const data =
          await response.json();

        setBriefing(
          data.response ||
            "No briefing generated."
        );
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    if (profile) {
      generateBriefing();
    }
  }, [profile]);

  return (
    <div
      className="
        mt-10
        rounded-[32px]
        border
        border-zinc-800
        bg-gradient-to-br
        from-zinc-950
        to-black
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
          AI Daily Intelligence
        </p>

        <h2
          className="
            text-4xl
            font-black
            mb-4
          "
        >
          Personalized Daily Briefing
        </h2>

        <p className="text-zinc-400">
          AI-generated strategic intelligence
          for today's execution priorities.
        </p>

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
          min-h-[250px]
        "
      >

        {loading
          ? "Generating strategic briefing..."
          : briefing}

      </div>

    </div>
  );
}