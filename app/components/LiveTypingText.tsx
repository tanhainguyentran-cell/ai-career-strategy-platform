"use client";

import {
  useEffect,
  useState,
} from "react";

type Props = {
  texts: string[];
};

export default function LiveTypingText({
  texts,
}: Props) {
  const [
    currentTextIndex,
    setCurrentTextIndex,
  ] = useState(0);

  const [
    displayedText,
    setDisplayedText,
  ] = useState("");

  useEffect(() => {
    let currentIndex = 0;

    const current =
      texts[currentTextIndex];

    const interval =
      setInterval(() => {
        setDisplayedText(
          current.slice(
            0,
            currentIndex + 1
          )
        );

        currentIndex++;

        if (
          currentIndex >
          current.length
        ) {
          clearInterval(
            interval
          );

          setTimeout(() => {
            setDisplayedText("");

            setCurrentTextIndex(
              (prev) =>
                (prev + 1) %
                texts.length
            );
          }, 1800);
        }
      }, 40);

    return () =>
      clearInterval(interval);
  }, [
    currentTextIndex,
    texts,
  ]);

  return (
    <div
      className="
        text-zinc-400
        text-lg
        lg:text-xl
        leading-relaxed
        min-h-[70px]
      "
    >
      {displayedText}

      <span className="animate-pulse">
        |
      </span>
    </div>
  );
}