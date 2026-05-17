"use client";

import {
  getStrategicMemory,
} from "@/lib/strategicMemory";

export default function StrategicExecutiveSummary() {
  const memory =
    getStrategicMemory();

  const hasMemory =
    Object.keys(memory)
      .length > 0;

  if (!hasMemory) {
    return null;
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

      <div className="mb-6">

        <p
          className="
            mb-3
            text-xs
            uppercase
            tracking-[0.3em]
            text-zinc-500
          "
        >
          Strategic Intelligence
        </p>

        <h2
          className="
            text-4xl
            font-black
          "
        >
          Executive Summary
        </h2>

      </div>

      <div
        className="
          space-y-6
          text-zinc-300
        "
      >

        {memory.step1 && (
          <div>

            <h3
              className="
                mb-3
                text-xl
                font-black
              "
            >
              Macro Environment
            </h3>

            <p
              className="
                line-clamp-6
                whitespace-pre-wrap
              "
            >
              {memory.step1}
            </p>

          </div>
        )}

        {memory.step2 && (
          <div>

            <h3
              className="
                mb-3
                text-xl
                font-black
              "
            >
              Corporate DNA
            </h3>

            <p
              className="
                line-clamp-6
                whitespace-pre-wrap
              "
            >
              {memory.step2}
            </p>

          </div>
        )}

        {memory.step3 && (
          <div>

            <h3
              className="
                mb-3
                text-xl
                font-black
              "
            >
              Hiring Needs
            </h3>

            <p
              className="
                line-clamp-6
                whitespace-pre-wrap
              "
            >
              {memory.step3}
            </p>

          </div>
        )}

        {memory.step4 && (
          <div>

            <h3
              className="
                mb-3
                text-xl
                font-black
              "
            >
              Competitive Strategy
            </h3>

            <p
              className="
                line-clamp-6
                whitespace-pre-wrap
              "
            >
              {memory.step4}
            </p>

          </div>
        )}

      </div>

    </div>
  );
}