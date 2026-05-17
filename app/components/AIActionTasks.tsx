"use client";

import { useState } from "react";

const initialTasks = [
  {
    title:
      "Complete AI leadership certification",
    done: false,
  },

  {
    title:
      "Optimize LinkedIn strategic positioning",
    done: false,
  },

  {
    title:
      "Build execution tracking system",
    done: true,
  },

  {
    title:
      "Expand AI-native portfolio projects",
    done: false,
  },
];

export default function AIActionTasks() {
  const [tasks, setTasks] =
    useState(initialTasks);

  const toggleTask = (
    index: number
  ) => {
    setTasks((prev) =>
      prev.map((task, i) =>
        i === index
          ? {
              ...task,
              done: !task.done,
            }
          : task
      )
    );
  };

  return (
    <div
      className="
        rounded-[40px]
        border
        border-zinc-800
        bg-black
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
          AI Action Tasks
        </p>

        <h3
          className="
            text-3xl
            lg:text-5xl
            font-black
            leading-tight
          "
        >
          Strategic execution
          task management system.
        </h3>

      </div>

      <div className="space-y-5">

        {tasks.map((task, index) => (
          <button
            key={task.title}
            onClick={() =>
              toggleTask(index)
            }
            className="
              w-full
              rounded-3xl
              border
              border-zinc-800
              bg-zinc-950/40
              px-6
              py-5
              text-left
              transition-all
              duration-300
              hover:bg-zinc-900
            "
          >

            <div className="flex items-center gap-5">

              <div
                className={`
                  h-6
                  w-6
                  rounded-full
                  border
                  flex
                  items-center
                  justify-center
                  ${
                    task.done
                      ? "bg-white border-white"
                      : "border-zinc-600"
                  }
                `}
              >

                {task.done && (
                  <div
                    className="
                      h-2
                      w-2
                      rounded-full
                      bg-black
                    "
                  />
                )}

              </div>

              <p
                className={`
                  text-lg
                  ${
                    task.done
                      ? "line-through text-zinc-500"
                      : "text-zinc-200"
                  }
                `}
              >
                {task.title}
              </p>

            </div>

          </button>
        ))}

      </div>

    </div>
  );
}