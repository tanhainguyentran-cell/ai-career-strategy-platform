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

export default function WorkspaceSearch() {
  const [query, setQuery] =
    useState("");

  const [results, setResults] =
    useState<AIHistoryItem[]>([]);

  useEffect(() => {
    const history =
      getAIHistory();

    if (!query.trim()) {
      setResults([]);

      return;
    }

    const filtered =
      history.filter((item) => {
        const search =
          `${item.prompt} ${item.response} ${item.type}`.toLowerCase();

        return search.includes(
          query.toLowerCase()
        );
      });

    setResults(filtered);
  }, [query]);

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
          AI Workspace Search
        </p>

        <h2
          className="
            text-4xl
            font-black
            mb-4
          "
        >
          Strategic Search Engine
        </h2>

        <p className="text-zinc-400">
          Search across AI analyses,
          strategic outputs, and career intelligence.
        </p>

      </div>

      <input
        value={query}
        onChange={(e) =>
          setQuery(e.target.value)
        }
        placeholder="Search AI workspace..."
        className="
          w-full
          rounded-2xl
          border
          border-zinc-800
          bg-black
          px-5
          py-4
          outline-none
          mb-8
        "
      />

      <div className="space-y-5">

       {query &&
  results.length === 0 && (
    <EmptyState
      title="No Search Results"
      description="Search across AI analyses, strategic outputs, and workspace intelligence."
    />
)}
       
        {results.map((item) => (
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
                mb-4
              "
            >
              {item.prompt}
            </h3>

            <div
              className="
                text-zinc-300
                whitespace-pre-wrap
                leading-relaxed
                max-h-[200px]
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