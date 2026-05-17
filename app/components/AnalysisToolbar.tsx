"use client";

import { useState } from "react";

import GlassCard from "@/app/components/GlassCard";

import GlassInput from "@/app/components/GlassInput";

import PrimaryButton from "@/app/components/PrimaryButton";

import PromptSuggestions from "@/app/components/PromptSuggestions";

import AnalysisModes from "@/app/components/AnalysisModes";

type Props = {
  company: string;

  setCompany: (
    value: string
  ) => void;

  onSave: () => void;

  onAnalyze: (
    customPrompt?: string,
    mode?: string
  ) => void;

  isAnalyzing: boolean;
};

export default function AnalysisToolbar({
  company,
  setCompany,
  onSave,
  onAnalyze,
  isAnalyzing,
}: Props) {
  const [selectedPrompt, setSelectedPrompt] =
    useState("");

  const [selectedMode, setSelectedMode] =
    useState("strategic");

  return (
    <div className="space-y-6">

      <GlassCard className="p-8">

        <div className="space-y-6">

          <div>

            <p className="text-zinc-500 uppercase tracking-[0.25em] text-xs mb-4">
              Analysis Configuration
            </p>

            <h3 className="text-3xl font-bold mb-4">
              Target Company Analysis
            </h3>

            <p className="text-zinc-400 leading-relaxed max-w-3xl">
              Enter your target company and run AI-powered
              strategic analysis based on your career profile
              and hiring optimization framework.
            </p>

          </div>

          <GlassInput
            placeholder="Enter target company..."
            value={company}
            onChange={(e) =>
              setCompany(e.target.value)
            }
          />

          <AnalysisModes
            selectedMode={selectedMode}
            onChange={setSelectedMode}
          />

          {selectedPrompt && (
            <div
              className="
                p-5
                rounded-2xl
                border
                border-zinc-800
                bg-zinc-900/60
              "
            >

              <p className="text-zinc-500 text-sm mb-2">
                Selected Prompt
              </p>

              <p className="text-zinc-300 leading-relaxed">
                {selectedPrompt}
              </p>

            </div>
          )}

          <div className="flex flex-wrap gap-4">

            <PrimaryButton
              onClick={onSave}
            >
              Save Company
            </PrimaryButton>

            <PrimaryButton
              onClick={() =>
                onAnalyze(
                  selectedPrompt,
                  selectedMode
                )
              }
              disabled={isAnalyzing}
            >
              {isAnalyzing
                ? "Analyzing..."
                : "Run AI Analysis"}
            </PrimaryButton>

          </div>

        </div>

      </GlassCard>

      <PromptSuggestions
        onSelect={(prompt) =>
          setSelectedPrompt(prompt)
        }
      />

    </div>
  );
}