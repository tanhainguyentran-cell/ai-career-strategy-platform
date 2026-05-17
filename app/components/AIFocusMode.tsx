"use client";

import { useState } from "react";

const modes = [
  "Deep AI Learning",

  "Execution Sprint",

  "Leadership Development",

  "Strategic Reflection",

  "Career Positioning",
];

export default function AIFocusMode() {
  const [activeMode, setActiveMode] =
    useState(modes[0]);

  return (
    <div
      className="
        rounded-[48px]
        border
        border-zinc-800
        bg-gradient-to-br
        from-black
        via-zinc-950
        to-black
        p-8
      "
    >

      <div className="mb-12">

        <p
          className="
            text-zinc-500
            uppercase
            tracking-[0.35em]
            text-xs
            mb-4
          "
        >
          Focus Mode
        </p>

        <h3
          className="
            text-3xl
            lg:text-6xl
            font-black
            leading-tight
          "
        >
          AI-guided strategic
          focus management system.
        </h3>

      </div>

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-5
          mb-12
        "
      >

        {modes.map((mode) => (
          <button
            key={mode}
            onClick={() =>
              setActiveMode(mode)
            }
            className={`
              rounded-3xl
              border
              px-6
              py-8
              text-left
              transition-all
              duration-300
              ${
                activeMode === mode
                  ? "bg-white text-black border-white"
                  : "bg-black/40 border-zinc-800 text-zinc-300 hover:bg-zinc-900"
              }
            `}
          >

            <h4
              className="
                text-2xl
                font-black
              "
            >
              {mode}
            </h4>

          </button>
        ))}

      </div>

      <div
        className="
          rounded-[32px]
          border
          border-zinc-800
          bg-black/40
          p-8
        "
      >

        <p
          className="
            text-zinc-500
            text-sm
            mb-4
          "
        >
          ACTIVE STRATEGIC MODE
        </p>

        <h4
          className="
            text-4xl
            font-black
          "
        >
          {activeMode}
        </h4>

      </div>

    </div>
  );
}