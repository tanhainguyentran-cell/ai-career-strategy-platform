"use client";

import {
  createContext,
  useContext,
  useState,
} from "react";

type WorkflowStep =
  | 1
  | 2
  | 3
  | 4
  | 5;

type WorkflowContextType = {
  currentStep: WorkflowStep;

  setCurrentStep: (
    step: WorkflowStep
  ) => void;

  completedSteps:
    WorkflowStep[];

  completeStep: (
    step: WorkflowStep
  ) => void;
};

const WorkflowContext =
  createContext<
    WorkflowContextType | undefined
  >(undefined);

export function WorkflowProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [
    currentStep,
    setCurrentStep,
  ] = useState<WorkflowStep>(
    1
  );

  const [
    completedSteps,
    setCompletedSteps,
  ] = useState<
    WorkflowStep[]
  >([]);

  function completeStep(
    step: WorkflowStep
  ) {
    setCompletedSteps(
      (prev) => {
        if (
          prev.includes(step)
        ) {
          return prev;
        }

        return [
          ...prev,
          step,
        ];
      }
    );

    alert(
  `Step ${step} completed successfully.`
);
    
    if (step < 5) {
      setCurrentStep(
        (
          step + 1
        ) as WorkflowStep
      );
    }
  }

  return (
    <WorkflowContext.Provider
      value={{
        currentStep,
        setCurrentStep,

        completedSteps,

        completeStep,
      }}
    >
      {children}
    </WorkflowContext.Provider>
  );
}

export function useWorkflow() {
  const context =
    useContext(
      WorkflowContext
    );

  if (!context) {
    throw new Error(
      "useWorkflow must be used inside WorkflowProvider"
    );
  }

  return context;
}