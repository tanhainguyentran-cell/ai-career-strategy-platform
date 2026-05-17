"use client";

import { useState } from "react";

type Props = {
  onAnalyze: (
    prompt: string,
    mode?: string
  ) => void;
};

const commands = [
  {
    label:
      "Generate interview strategy",

    prompt:
      "Create a complete interview preparation strategy.",
  },

  {
    label:
      "Analyze competitive advantage",

    prompt:
      "Identify how I can outperform competing candidates.",
  },

  {
    label:
      "Create SMART roadmap",

    prompt:
      "Generate a SMART execution roadmap for getting hired.",
  },

  {
    label:
      "Find skill gaps",

    prompt:
      "Analyze missing skills and competency gaps.",
  },
];

export default function CommandPalette({
  onAnalyze,
}: Props) {
  const [open, setOpen] =
    useState(false);

  return (
    <>
      <button
        onClick={() =>
          setOpen(!open)
        }
        className="
          fixed
          bottom-6
          right-6
          z-50
          px-5
          py-4
          rounded-2xl
          border
          border-zinc-700
          bg-zinc-900/80
          backdrop-blur-xl
          hover:bg-zinc-900
          transition-all
          duration-300
        "
      >
        AI Commands
      </button>

      {open && (
        <div
          className="
            fixed
            bottom-24
            right-6
            w-[360px]
            rounded-3xl
            border
            border-zinc-800
            bg-black/90
            backdrop-blur-2xl
            p-5
            z-50
          "
        >

          <div className="mb-5">

            <p className="text-zinc-500 text-sm mb-2">
              AI Command Center
            </p>

            <h3 className="text-2xl font-bold">
              Quick Actions
            </h3>

          </div>

          <div className="space-y-3">

            {commands.map((command) => (
              <button
                key={command.label}
                onClick={() => {
                  onAnalyze(
                    command.prompt,
                    "strategic"
                  );

                  setOpen(false);
                }}
                className="
                  w-full
                  text-left
                  p-4
                  rounded-2xl
                  border
                  border-zinc-800
                  bg-zinc-900/50
                  hover:bg-zinc-900
                  transition-all
                  duration-300
                "
              >

                <p className="font-semibold mb-2">
                  {command.label}
                </p>

                <p className="text-zinc-500 text-sm">
                  {command.prompt}
                </p>

              </button>
            ))}

          </div>

        </div>
      )}
    </>
  );
}