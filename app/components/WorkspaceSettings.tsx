"use client";

import {
  useWorkspace,
} from "@/app/context/WorkspaceContext";

export default function WorkspaceSettings() {
  const {
  density,
  setDensity,

  focusMode,
  setFocusMode,
} = useWorkspace();

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
            mb-3
            text-xs
            uppercase
            tracking-[0.3em]
            text-zinc-500
          "
        >
          Workspace Preferences
        </p>

        <h2
          className="
            mb-4
            text-4xl
            font-black
          "
        >
          Executive Workspace Settings
        </h2>

        <p className="text-zinc-400">
          Customize your strategic
          AI workspace experience.
        </p>

      </div>

      <div className="space-y-6">

        <div>

          <p
            className="
              mb-4
              text-sm
              uppercase
              tracking-[0.2em]
              text-zinc-500
            "
          >
            Workspace Density
          </p>

          <div className="flex gap-4">

            <button
              onClick={() =>
                setDensity(
                  "comfortable"
                )
              }
              className={`
                rounded-2xl
                px-6
                py-4
                font-bold
                transition-all
                ${
                  density ===
                  "comfortable"
                    ? "bg-white text-black"
                    : "border border-zinc-800 bg-black text-zinc-400"
                }
              `}
            >
              Comfortable
            </button>

            <button
              onClick={() =>
                setDensity(
                  "compact"
                )
              }
              className={`
                rounded-2xl
                px-6
                py-4
                font-bold
                transition-all
                ${
                  density ===
                  "compact"
                    ? "bg-white text-black"
                    : "border border-zinc-800 bg-black text-zinc-400"
                }
              `}
            >
              Compact
            </button>

          </div>

        </div>

        <div>

  <p
    className="
      mb-4
      text-sm
      uppercase
      tracking-[0.2em]
      text-zinc-500
    "
  >
    Focus Mode
  </p>

  <button
    onClick={() =>
      setFocusMode(
        !focusMode
      )
    }
    className={`
      rounded-2xl
      px-6
      py-4
      font-bold
      transition-all
      ${
        focusMode
          ? "bg-white text-black"
          : "border border-zinc-800 bg-black text-zinc-400"
      }
    `}
  >
    {focusMode
      ? "Focus Mode Enabled"
      : "Enable Focus Mode"}
  </button>

</div>

      </div>

    </div>
  );
}