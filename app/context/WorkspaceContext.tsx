"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type Density =
  | "comfortable"
  | "compact";

type WorkspaceContextType = {
  density:
    | "comfortable"
    | "compact";

  setDensity: (
    density:
      | "comfortable"
      | "compact"
  ) => void;

  focusMode: boolean;

  setFocusMode: (
    value: boolean
  ) => void;
};

const WorkspaceContext =
  createContext<
    WorkspaceContextType | undefined
  >(undefined);

export function WorkspaceProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [density, setDensity] =
  useState<Density>(() => {
    if (
      typeof window ===
      "undefined"
    ) {
      return "comfortable";
    }

    return (
      localStorage.getItem(
        "workspace-density"
      ) as Density
    ) || "comfortable";
  });

    const [
  focusMode,
  setFocusMode,
] = useState(() => {
  if (
    typeof window ===
    "undefined"
  ) {
    return false;
  }

  return (
    localStorage.getItem(
      "workspace-focus-mode"
    ) === "true"
  );
});

  useEffect(() => {
  localStorage.setItem(
    "workspace-density",
    density
  );
}, [density]);

useEffect(() => {
  localStorage.setItem(
    "workspace-focus-mode",
    String(focusMode)
  );
}, [focusMode]);

return (
    <WorkspaceContext.Provider
      value={{
  density,
  setDensity,

  focusMode,
  setFocusMode,
}}
    >
      {children}
    </WorkspaceContext.Provider>
  );
}

export function useWorkspace() {
  const context =
    useContext(
      WorkspaceContext
    );

  if (!context) {
    throw new Error(
      "useWorkspace must be used inside WorkspaceProvider"
    );
  }

  return context;
}