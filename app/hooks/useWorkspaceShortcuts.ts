"use client";

import {
  useEffect,
} from "react";

type Props = {
  setActiveTab: (
    tab: string
  ) => void;
};

export default function useWorkspaceShortcuts({
  setActiveTab,
}: Props) {
  useEffect(() => {
    function handleKeyDown(
      e: KeyboardEvent
    ) {
      if (
        !e.ctrlKey &&
        !e.metaKey
      )
        return;

      switch (e.key) {
        case "1":
          e.preventDefault();

          setActiveTab(
            "Overview"
          );

          break;

        case "2":
          e.preventDefault();

          setActiveTab(
            "Strategy"
          );

          break;

        case "3":
          e.preventDefault();

          setActiveTab(
            "Execution"
          );

          break;

        case "4":
          e.preventDefault();

          setActiveTab(
            "Hiring"
          );

          break;

        case "5":
          e.preventDefault();

          setActiveTab(
            "Branding"
          );

          break;

        case "6":
          e.preventDefault();

          setActiveTab(
            "Intelligence"
          );

          break;
      }
    }

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
  }, [setActiveTab]);
}