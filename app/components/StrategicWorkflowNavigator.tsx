"use client";

import {
  useWorkflow,
} from "@/app/context/WorkflowContext";

const steps = [
  {
    id: 1,
    title:
      "Macro Environment",
  },

  {
    id: 2,
    title:
      "Corporate DNA",
  },

  {
    id: 3,
    title:
      "Hiring Needs",
  },

  {
    id: 4,
    title:
      "Competitive Strategy",
  },

  {
    id: 5,
    title:
      "SMART Roadmap",
  },
];

export default function StrategicWorkflowNavigator() {
  const {
    currentStep,
    completedSteps,
    setCurrentStep,
  } = useWorkflow();

  return (
    <div
      className="
        mb-10
        overflow-x-auto
      "
    >

      <div
        className="
          flex
          min-w-max
          gap-4
        "
      >

        {steps.map((step) => {
          const completed =
            completedSteps.includes(
              step.id as any
            );

          const active =
            currentStep ===
            step.id;

          const locked =
            step.id >
            completedSteps.length + 1;

          return (
            <button
              key={step.id}
              onClick={() => {
  if (!locked) {
    setCurrentStep(
      step.id as any
    );
  }
}}
              className={`
                flex
                min-w-[220px]
                items-center
                gap-4
                rounded-[28px]
                border
                px-5
                py-5
                text-left
                transition-all
                duration-300

                ${
  locked
    ? "border-zinc-900 bg-zinc-950 opacity-40"
    : active
    ? "border-white bg-white text-black"
    : completed
    ? "border-green-500 bg-green-500/10"
    : "border-zinc-800 bg-zinc-950/40"
}
              `}
            >

              <div
                className={`
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-2xl
                  font-black

                  ${
                    active
                      ? "bg-black text-white"
                      : completed
                      ? "bg-green-500 text-black"
                      : "bg-zinc-900 text-zinc-400"
                  }
                `}
              >
                {completed
                  ? "✓"
                  : step.id}
              </div>

              <div>

                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[0.2em]
                    opacity-60
                    mb-1
                  "
                >
                  Step {step.id}
                </p>

                <h3
                  className="
                    font-black
                  "
                >
                  {step.title}
                </h3>

              </div>

            </button>
          );
        })}

      </div>

    </div>
  );
}