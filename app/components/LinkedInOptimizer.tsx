"use client";

import { useState } from "react";

import useUserProfile from "@/app/hooks/useUserProfile";

export default function LinkedInOptimizer() {
  const { profile } =
    useUserProfile();

  const [linkedinContent, setLinkedinContent] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [optimizedContent, setOptimizedContent] =
    useState("");

  async function optimizeLinkedIn() {
    if (!linkedinContent.trim()) return;

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
Optimize this LinkedIn profile strategically.

Target Company:
${profile?.targetCompany}

Target Role:
${profile?.targetRole}

Experience:
${profile?.experienceLevel}

LinkedIn Content:
${linkedinContent}

Requirements:

1. Rewrite headline
2. Optimize About section
3. Improve recruiter attractiveness
4. Increase strategic differentiation
5. Improve AI-native positioning
6. Improve networking psychology
7. Executive-level positioning
8. Improve credibility signals
9. Improve hiring visibility
10. Modern AI-era personal branding optimization

Provide:
- optimized version
- strategic recommendations
- rewritten content
- improvement explanations
            `,
          }),
        });

      const data =
        await response.json();

      setOptimizedContent(
        data.response ||
          "No optimized content generated."
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
          AI Personal Branding
        </p>

        <h2
          className="
            text-4xl
            font-black
            mb-4
          "
        >
          LinkedIn Optimizer
        </h2>

        <p className="text-zinc-400">
          Optimize your LinkedIn profile
          using AI-powered recruiter psychology.
        </p>

      </div>

      <textarea
        value={linkedinContent}
        onChange={(e) =>
          setLinkedinContent(
            e.target.value
          )
        }
        placeholder="Paste your LinkedIn profile content here..."
        className="
          min-h-[250px]
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
        onClick={optimizeLinkedIn}
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
          ? "Optimizing..."
          : "Optimize LinkedIn"}
      </button>

      {optimizedContent && (
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
          {optimizedContent}
        </div>
      )}

    </div>
  );
}
