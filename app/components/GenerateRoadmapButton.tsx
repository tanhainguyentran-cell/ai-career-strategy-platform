"use client";

import { useState } from "react";

import useUserProfile from "@/app/hooks/useUserProfile";

import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

import { auth, db } from "@/lib/firebase";
import {
  getStrategicMemory,
} from "@/lib/strategicMemory";

export default function GenerateRoadmapButton() {
  
  const strategicMemory =
    getStrategicMemory();
  
  const { profile } =
    useUserProfile();

  const [loading, setLoading] =
    useState(false);

  const [roadmap, setRoadmap] =
    useState("");

  async function generateRoadmap() {
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
            Strategic Intelligence Context:

${JSON.stringify(
  strategicMemory,
  null,
  2
)}

Create a strategic SMART career roadmap for this user.

Requirements:
- structured phases
- monthly milestones
- execution KPIs
- hiring strategy
- interview preparation
- AI-native leverage
- competitive positioning
- practical execution systems

Target Company:
${profile?.targetCompany}

Target Role:
${profile?.targetRole}

Experience:
${profile?.experienceLevel}
            `,
          }),
        });

      const data =
        await response.json();

      const generatedRoadmap =
  data.response ||
  "No roadmap generated.";

setRoadmap(generatedRoadmap);

const user = auth.currentUser;

if (user) {
  await addDoc(
    collection(
      db,
      "users",
      user.uid,
      "roadmaps"
    ),
    {
      content: generatedRoadmap,
      targetCompany:
        profile?.targetCompany || "",
      targetRole:
        profile?.targetRole || "",
      experienceLevel:
        profile?.experienceLevel || "",
      createdAt:
        serverTimestamp(),
    }
  );
}
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="
        rounded-[32px]
        border
        border-zinc-800
        bg-zinc-950/40
        p-8
      "
    >

      <div className="mb-6">

        <p
          className="
            text-xs
            uppercase
            tracking-[0.3em]
            text-zinc-500
            mb-3
          "
        >
          AI Roadmap Engine
        </p>

        <h2
          className="
            text-3xl
            font-black
            mb-4
          "
        >
          Strategic Career Roadmap
        </h2>

        <p className="text-zinc-400">
          Generate an AI-powered
          execution roadmap optimized
          for your hiring goals.
        </p>

      </div>

      <button
        onClick={generateRoadmap}
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
          : "Generate AI Roadmap"}
      </button>

      {roadmap && (
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
          {roadmap}
        </div>
      )}

    </div>
  );
}