"use client";

import { useState } from "react";

type Task = {
  id: number;

  text: string;

  completed: boolean;
};

export default function ProgressTracker() {
  const [tasks, setTasks] =
    useState<Task[]>([
      {
        id: 1,
        text:
          "Optimize LinkedIn profile",
        completed: false,
      },

      {
        id: 2,
        text:
          "Complete AI portfolio project",
        completed: false,
      },

      {
        id: 3,
        text:
          "Practice behavioral interviews",
        completed: false,
      },

      {
        id: 4,
        text:
          "Network with target company employees",
        completed: false,
      },
    ]);

  function toggleTask(id: number) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              completed:
                !task.completed,
            }
          : task
      )
    );
  }

  const completedTasks =
    tasks.filter(
      (task) => task.completed
    ).length;

  const progress =
    Math.round(
      (completedTasks /
        tasks.length) *
        100
    );

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
          AI Progress System
        </p>

        <h2
          className="
            text-4xl
            font-black
            mb-4
          "
        >
          Strategic Progress Tracker
        </h2>

        <p className="text-zinc-400">
          Track execution progress and
          maintain strategic momentum.
        </p>

      </div>

      <div
        className="
          mb-8
          overflow-hidden
          rounded-full
          bg-zinc-900
          h-5
        "
      >

        <div
          className="
            h-full
            rounded-full
            bg-white
            transition-all
            duration-500
          "
          style={{
            width:
              `${progress}%`,
          }}
        />

      </div>

      <div className="mb-6">

        <h3
          className="
            text-5xl
            font-black
          "
        >
          {progress}%
        </h3>

        <p className="text-zinc-500 mt-2">
          Strategic Execution Progress
        </p>

      </div>

      <div className="space-y-4">

        {tasks.map((task) => (
          <button
            key={task.id}
            onClick={() =>
              toggleTask(task.id)
            }
            className={`
              w-full
              rounded-2xl
              border
              p-5
              text-left
              transition-all
              duration-300
              ${
                task.completed
                  ? "border-white bg-white text-black"
                  : "border-zinc-800 bg-black text-zinc-300"
              }
            `}
          >
            {task.text}
          </button>
        ))}

      </div>

    </div>
  );
}