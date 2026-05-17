"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  AIHistoryItem,
  getAIHistory,
} from "@/lib/aiHistory";

export default function WorkspaceAnalytics() {
  const [history, setHistory] =
    useState<AIHistoryItem[]>([]);

  useEffect(() => {
    setHistory(getAIHistory());
  }, []);

  const analytics =
    useMemo(() => {
      const totalRequests =
        history.length;

      const categories =
        history.reduce(
          (
            acc: Record<
              string,
              number
            >,
            item
          ) => {
            acc[item.type] =
              (acc[item.type] || 0) + 1;

            return acc;
          },
          {}
        );

      const topCategory =
        Object.entries(
          categories
        ).sort(
          (a, b) =>
            b[1] - a[1]
        )[0];

      return {
        totalRequests,

        categories,

        topCategory,
      };
    }, [history]);

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

      <div className="mb-10">

        <p
          className="
            text-xs
            uppercase
            tracking-[0.3em]
            text-zinc-500
            mb-3
          "
        >
          AI Workspace Analytics
        </p>

        <h2
          className="
            text-4xl
            font-black
            mb-4
          "
        >
          Strategic Usage Intelligence
        </h2>

        <p className="text-zinc-400">
          Analyze your AI workspace activity,
          strategic focus areas, and execution patterns.
        </p>

      </div>

      <div
        className="
          grid
          gap-6
          md:grid-cols-3
          mb-8
        "
      >

        <div
          className="
            rounded-3xl
            border
            border-zinc-800
            bg-black
            p-6
          "
        >

          <p className="text-zinc-500 mb-2">
            Total AI Requests
          </p>

          <h3
            className="
              text-5xl
              font-black
            "
          >
            {analytics.totalRequests}
          </h3>

        </div>

        <div
          className="
            rounded-3xl
            border
            border-zinc-800
            bg-black
            p-6
          "
        >

          <p className="text-zinc-500 mb-2">
            Most Active Category
          </p>

          <h3
            className="
              text-3xl
              font-black
            "
          >
            {analytics.topCategory?.[0] ||
              "N/A"}
          </h3>

        </div>

        <div
          className="
            rounded-3xl
            border
            border-zinc-800
            bg-black
            p-6
          "
        >

          <p className="text-zinc-500 mb-2">
            Strategic Focus Areas
          </p>

          <h3
            className="
              text-3xl
              font-black
            "
          >
            {
              Object.keys(
                analytics.categories
              ).length
            }
          </h3>

        </div>

      </div>

      <div className="space-y-4">

        {Object.entries(
          analytics.categories
        ).map(
          ([category, count]) => (
            <div
              key={category}
              className="
                rounded-2xl
                border
                border-zinc-800
                bg-black
                p-5
              "
            >

              <div
                className="
                  flex
                  items-center
                  justify-between
                "
              >

                <p className="font-bold">
                  {category}
                </p>

                <p className="text-zinc-500">
                  {count} requests
                </p>

              </div>

            </div>
          )
        )}

      </div>

    </div>
  );
}