"use client";

import { useState } from "react";

export default function AIStrategicJournal() {
  const [entry, setEntry] =
    useState("");

  const [entries, setEntries] =
    useState<string[]>([]);

  const handleAddEntry = () => {
    if (!entry.trim()) return;

    setEntries((prev) => [
      entry,
      ...prev,
    ]);

    setEntry("");
  };

  return (
    <div
      className="
        rounded-[40px]
        border
        border-zinc-800
        bg-zinc-950/50
        p-8
      "
    >

      <div className="mb-12">

        <p
          className="
            text-zinc-500
            uppercase
            tracking-[0.3em]
            text-xs
            mb-4
          "
        >
          Strategic Journal
        </p>

        <h3
          className="
            text-3xl
            lg:text-5xl
            font-black
            leading-tight
          "
        >
          AI-assisted strategic
          reflection system.
        </h3>

      </div>

      <div className="space-y-5 mb-8">

        <textarea
          value={entry}
          onChange={(e) =>
            setEntry(e.target.value)
          }
          placeholder="Write strategic reflections, AI insights, execution reviews..."
          className="
            w-full
            min-h-[180px]
            rounded-3xl
            border
            border-zinc-800
            bg-black
            p-6
            outline-none
            resize-none
          "
        />

        <button
          onClick={handleAddEntry}
          className="
            rounded-3xl
            bg-white
            px-8
            py-5
            font-black
            text-black
            transition-all
            duration-300
            hover:scale-[1.03]
          "
        >
          Save Strategic Entry
        </button>

      </div>

      <div className="space-y-5">

        {entries.map((item, index) => (
          <div
            key={index}
            className="
              rounded-3xl
              border
              border-zinc-800
              bg-black/40
              p-6
              leading-relaxed
              text-zinc-300
            "
          >
            {item}
          </div>
        ))}

      </div>

    </div>
  );
}