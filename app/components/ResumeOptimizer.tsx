"use client";

import { useState } from "react";

import useUserProfile from "@/app/hooks/useUserProfile";

export default function ResumeOptimizer() {
  const { profile } =
    useUserProfile();

  const [resume, setResume] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [optimizedResume, setOptimizedResume] =
    useState("");

  async function optimizeResume() {
    if (!resume.trim()) return;

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
Optimize this resume strategically.

Target Company:
${profile?.targetCompany}

Target Role:
${profile?.targetRole}

Experience Level:
${profile?.experienceLevel}

Resume Content:
${resume}

Requirements:

1. ATS optimization
2. Executive-level phrasing
3. Strong achievement framing
4. AI-native positioning
5. Leadership positioning
6. Hiring psychology optimization
7. Quantified impact improvements
8. Strategic differentiation
9. Recruiter attention optimization
10. Modern AI-era resume standards

Provide:
- rewritten optimized version
- strategic recommendations
- improvement explanations
- stronger positioning
            `,
          }),
        });

      const data =
        await response.json();

      setOptimizedResume(
        data.response ||
          "No optimized resume generated."
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
          AI Resume Intelligence
        </p>

        <h2
          className="
            text-4xl
            font-black
            mb-4
          "
        >
          Resume Optimizer
        </h2>

        <p className="text-zinc-400">
          Optimize your resume using
          AI-powered hiring strategy.
        </p>

      </div>

      <textarea
        value={resume}
        onChange={(e) =>
          setResume(e.target.value)
        }
        placeholder="Paste your resume here..."
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
        onClick={optimizeResume}
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
          : "Optimize Resume"}
      </button>

      {optimizedResume && (
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
          {optimizedResume}
        </div>
      )}

    </div>
  );
}