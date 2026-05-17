"use client";

import React from "react";

type Props = {
  children: React.ReactNode;
};

type State = {
  hasError: boolean;
};

export default class ErrorBoundary extends React.Component<
  Props,
  State
> {
  constructor(props: Props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(
    error: Error
  ) {
    console.error(
      "Workspace crash:",
      error
    );
  }

  render() {
    if (
      this.state.hasError
    ) {
      return (
        <div
          className="
            mt-10
            rounded-[32px]
            border
            border-red-900
            bg-red-950/20
            p-8
          "
        >

          <p
            className="
              mb-3
              text-xs
              uppercase
              tracking-[0.3em]
              text-red-400
            "
          >
            System Recovery
          </p>

          <h2
            className="
              mb-4
              text-3xl
              font-black
            "
          >
            AI Workspace Module Failed
          </h2>

          <p className="text-zinc-400">
            This module encountered an
            unexpected issue and was safely isolated.
          </p>

        </div>
      );
    }

    return this.props.children;
  }
}