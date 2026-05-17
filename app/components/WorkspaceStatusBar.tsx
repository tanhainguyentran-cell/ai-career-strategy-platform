"use client";

import {
  useEffect,
  useState,
} from "react";

export default function WorkspaceStatusBar() {
  const [time, setTime] =
    useState("");

  useEffect(() => {
    function updateTime() {
      const now =
        new Date();

      setTime(
        now.toLocaleTimeString(
          [],
          {
            hour: "2-digit",
            minute:
              "2-digit",
          }
        )
      );
    }

    updateTime();

    const interval =
      setInterval(
        updateTime,
        1000
      );

    return () =>
      clearInterval(
        interval
      );
  }, []);

  return (
    <div
      className="
        fixed
        bottom-0
        left-0
        right-0
        z-[9998]
        flex
        items-center
        justify-between
        border-t
        border-zinc-800
        bg-black/70
        px-5
        py-3
        backdrop-blur-xl
      "
    >

      <div
        className="
          flex
          items-center
          gap-3
          text-xs
          uppercase
          tracking-[0.2em]
          text-zinc-500
        "
      >
        <div
          className="
            h-2
            w-2
            animate-pulse
            rounded-full
            bg-green-500
          "
        />

        AI Workspace Online
      </div>

      <div
        className="
          text-xs
          uppercase
          tracking-[0.2em]
          text-zinc-500
        "
      >
        {time}
      </div>

    </div>
  );
}