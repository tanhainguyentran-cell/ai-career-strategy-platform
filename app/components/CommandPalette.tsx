"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

type Props = {
  onAnalyze: (
    prompt: string,
    mode?: string
  ) => void;

  open: boolean;

  setOpen: (
    value: boolean
  ) => void;
};

const commands = [
  {
    label: "Generate interview strategy",
    prompt:
      "Create a complete interview preparation strategy.",
  },
  {
    label: "Analyze competitive advantage",
    prompt:
      "Identify how I can outperform competing candidates.",
  },
  {
    label: "Create SMART roadmap",
    prompt:
      "Generate a SMART execution roadmap for getting hired.",
  },
  {
    label: "Find skill gaps",
    prompt:
      "Analyze missing skills and competency gaps.",
  },
  {
    label: "Optimize resume",
    prompt:
      "Rewrite and optimize my resume strategically.",
  },
  {
    label: "Analyze recruiter psychology",
    prompt:
      "Analyze recruiter psychology and hidden objections.",
  },
  {
    label: "Simulate strategic decision",
    prompt:
      "Simulate long-term career decision outcomes.",
  },
];

export default function CommandPalette({
  onAnalyze,
  open,
  setOpen,
}: Props) {
  const [query, setQuery] =
    useState("");

  useEffect(() => {
    function handleKeyDown(
      e: KeyboardEvent
    ) {
      if (
        (e.ctrlKey || e.metaKey) &&
        e.key === "k"
      ) {
        e.preventDefault();

        setOpen(!open);
      }

      if (e.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
  }, [open, setOpen]);

  const filteredCommands =
    useMemo(() => {
      return commands.filter(
        (command) =>
          command.label
            .toLowerCase()
            .includes(
              query.toLowerCase()
            ) ||
          command.prompt
            .toLowerCase()
            .includes(
              query.toLowerCase()
            )
      );
    }, [query]);

  if (!open) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        bg-black/60
        backdrop-blur-md
        p-6
      "
    >
      <div
        className="
          mx-auto
          mt-24
          max-w-2xl
          overflow-hidden
          rounded-[32px]
          border
          border-zinc-800
          bg-zinc-950
        "
      >
        <input
          autoFocus
          value={query}
          onChange={(e) =>
            setQuery(e.target.value)
          }
          placeholder="Search AI commands..."
          className="
            w-full
            border-b
            border-zinc-800
            bg-black
            px-6
            py-5
            text-xl
            outline-none
          "
        />

        <div
          className="
            max-h-[500px]
            overflow-y-auto
          "
        >
          {filteredCommands.map(
            (command) => (
              <button
                key={command.label}
                onClick={() => {
                  onAnalyze(
                    command.prompt,
                    "strategic"
                  );

                  setOpen(false);
                  setQuery("");
                }}
                className="
                  w-full
                  border-b
                  border-zinc-900
                  px-6
                  py-5
                  text-left
                  transition-all
                  hover:bg-zinc-900
                "
              >
                <div
                  className="
                    mb-2
                    flex
                    items-center
                    justify-between
                  "
                >
                  <p className="font-bold">
                    {command.label}
                  </p>

                  <span
                    className="
                      text-xs
                      uppercase
                      tracking-[0.2em]
                      text-zinc-500
                    "
                  >
                    AI
                  </span>
                </div>

                <p
                  className="
                    text-sm
                    text-zinc-500
                  "
                >
                  {command.prompt}
                </p>
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}