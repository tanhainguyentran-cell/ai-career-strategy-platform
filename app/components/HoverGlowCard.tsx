"use client";

import React from "react";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

type Props = {
  children: React.ReactNode;

  className?: string;
};

export default function HoverGlowCard({
  children,
  className = "",
}: Props) {
  const mouseX = useMotionValue(150);

  const mouseY = useMotionValue(150);

  const rotateX = useSpring(
    useTransform(
      mouseY,
      [0, 300],
      [10, -10]
    ),
    {
      stiffness: 180,
      damping: 18,
    }
  );

  const rotateY = useSpring(
    useTransform(
      mouseX,
      [0, 300],
      [-10, 10]
    ),
    {
      stiffness: 180,
      damping: 18,
    }
  );

  const glowBackground =
    useMotionTemplate`
      radial-gradient(
        240px circle at ${mouseX}px ${mouseY}px,
        rgba(255,255,255,0.14),
        transparent 60%
      )
    `;

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle:
          "preserve-3d",
      }}
      onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => {
        const rect =
          e.currentTarget.getBoundingClientRect();

        mouseX.set(
          e.clientX - rect.left
        );

        mouseY.set(
          e.clientY - rect.top
        );
      }}
      className={`
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-zinc-800
        bg-zinc-900/40
        backdrop-blur-2xl
        transition-transform
        duration-300
        ${className}
      `}
    >

      <motion.div
        className="
          absolute
          inset-0
          pointer-events-none
          z-0
        "
        style={{
          background:
            glowBackground,
        }}
      />

      <div className="relative z-10">
        {children}
      </div>

    </motion.div>
  );
}