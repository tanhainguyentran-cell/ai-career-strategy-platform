"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

import {
  useEffect,
  useState,
} from "react";

type Props = {
  value: number;

  suffix?: string;
};

export default function AnimatedCounter({
  value,
  suffix = "",
}: Props) {
  const motionValue =
    useMotionValue(0);

  const springValue =
    useSpring(motionValue, {
      stiffness: 100,
      damping: 20,
    });

  const [displayValue, setDisplayValue] =
    useState(0);

  useEffect(() => {
    motionValue.set(value);

    const unsubscribe =
      springValue.on(
        "change",
        (latest) => {
          setDisplayValue(
            Math.round(latest)
          );
        }
      );

    return () => unsubscribe();
  }, [
    motionValue,
    springValue,
    value,
  ]);

  return (
    <motion.span>
      {displayValue}
      {suffix}
    </motion.span>
  );
}