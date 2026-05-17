"use client";

import {
  useEffect,
  useState,
} from "react";

export default function useTypewriter(
  text: string,
  speed = 8
) {
  const [displayed, setDisplayed] =
    useState("");

  useEffect(() => {
    setDisplayed("");

    let index = 0;

    const interval =
      setInterval(() => {
        index++;

        setDisplayed(
          text.slice(0, index)
        );

        if (
          index >= text.length
        ) {
          clearInterval(
            interval
          );
        }
      }, speed);

    return () =>
      clearInterval(interval);
  }, [text, speed]);

  return displayed;
}