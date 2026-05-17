"use client";

import { useState } from "react";

import useUserProfile from "@/app/hooks/useUserProfile";

export default function NetworkingMessageGenerator() {
  const { profile } =
    useUserProfile();

  const [context, setContext] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [generatedMessage, setGeneratedMessage] =
    useState("");

  async function generateMessage() {
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
Generate a strategic networking message.

User Profile:
- Target Company: ${profile?.targetCompany}
- Target Role: ${profile?.targetRole}
- Experience: ${profile?.experienceLevel}

Networking Context:
${context}

Requirements:

1. Professional tone
2. High-response psychology
3. Executive-level communication
4. Natural networking flow
5. Referral optimization
6. Recruiter-friendly wording
7. AI-era professional branding
8. Relationship-building tone
9. Concise but memorable
10. Modern LinkedIn networking style

Generate:
- polished final message
- optional follow-up strategy
- networking recommendations
            `,
          }),
        });

      const data =
        await response.json();

      setGeneratedMessage(
        data.response ||
          "No message generated."
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
          AI Networking System
        </p>

        <h2
          className="
            text-4xl
            font-black
            mb-4
          "
        >
          Networking Message Generator
        </h2>

        <p className="text-zinc-400">
          Generate recruiter outreach and
          networking messages strategically.
        </p>

      </div>

      <textarea
        value={context}
        onChange={(e) =>
          setContext(e.target.value)
        }
        placeholder="Describe the networking situation..."
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
        onClick={generateMessage}
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
          ? "Generating..."
          : "Generate Message"}
      </button>

      {generatedMessage && (
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
          {generatedMessage}
        </div>
      )}

    </div>
  );
}