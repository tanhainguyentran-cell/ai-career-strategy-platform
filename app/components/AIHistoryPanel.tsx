"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  AIHistoryItem,
  getAIHistory,
} from "@/lib/aiHistory";
import EmptyState from "@/app/components/EmptyState";

export default function AIHistoryPanel() {
  const [history, setHistory] =
    useState<AIHistoryItem[]>([]);

  useEffect(() => {
    setHistory(getAIHistory());
  }, []);

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
          AI Memory Timeline
        </p>

        <h2
          className="
            text-4xl
            font-black
            mb-4
          "
        >
          Strategic AI History
        </h2>

        <p className="text-zinc-400">
          Review previous AI analyses,
          prompts, and strategic outputs.
        </p>

      </div>

      <div className="space-y-6">

        {history.length === 0 && (
  <EmptyState
    title="No AI Memory Yet"
    description="Your strategic AI interactions, analyses, and intelligence outputs will appear here."
  />
)}

        {history.map((item) => (
          <div
            key={item.id}
            className="
              rounded-3xl
              border
              border-zinc-800
              bg-black
              p-6
            "
          >

            <div
              className="
                mb-4
                flex
                items-center
                justify-between
              "
            >

              <div>

                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[0.2em]
                    text-zinc-500
                    mb-2
                  "
                >
                  {item.type}
                </p>

                <h3
                  className="
                    text-2xl
                    font-black
                  "
                >
                  {item.prompt}
                </h3>

              </div>

              <div className="text-sm text-zinc-500">
                {new Date(
                  item.createdAt
                ).toLocaleDateString()}
              </div>

            </div>

            <div
              className="
                whitespace-pre-wrap
                leading-relaxed
                text-zinc-300
                max-h-[300px]
                overflow-hidden
              "
            >
              {item.response}
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}