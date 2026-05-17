"use client";

import { useState } from "react";

import useUserProfile from "@/app/hooks/useUserProfile";
import {
  saveStrategicMemory,
} from "@/lib/strategicMemory";

export default function CareerNarrativeBuilder() {
  const { profile } =
    useUserProfile();

  const [context, setContext] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [narrative, setNarrative] =
    useState("");

  async function buildNarrative() {
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
Build a strategic executive career narrative.

User Profile:
- Target Company: ${profile?.targetCompany}
- Target Role: ${profile?.targetRole}
- Experience Level: ${profile?.experienceLevel}
- Skills: ${profile?.skills?.join(", ")}
- Career Goals: ${profile?.careerGoals?.join(", ")}

Additional Context:
${context}

Requirements:

1. Build compelling personal story
2. Executive-level positioning
3. Leadership narrative development
4. Strategic communication framing
5. Persuasive career identity
6. AI-era professional branding
7. Long-term positioning strategy
8. Career differentiation narrative
9. Interview storytelling optimization
10. Vision-driven professional identity

Provide:
- polished executive narrative
- positioning recommendations
- storytelling strategy
- communication improvements
- long-term identity framing
            `,
          }),
        });

      const data =
  await response.json();

const finalResponse =
  data.response ||
  "No narrative generated.";

setNarrative(
  finalResponse
);

saveStrategicMemory(
  "step4",
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
          AI Executive Identity
        </p>

        <h2
          className="
            text-4xl
            font-black
            mb-4
          "
        >
          Career Narrative Builder
        </h2>

        <p className="text-zinc-400">
          Build a compelling executive-level
          professional narrative strategically.
        </p>

      </div>

      <textarea
        value={context}
        onChange={(e) =>
          setContext(e.target.value)
        }
        placeholder="Describe your background, aspirations, leadership experiences, or personal story..."
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
        onClick={buildNarrative}
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
          ? "Building..."
          : "Build Career Narrative"}
      </button>

      {narrative && (
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
          {narrative}
        </div>
      )}

    </div>
  );
}