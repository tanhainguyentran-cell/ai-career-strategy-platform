export default function AIFloatingPaths() {
  return (
    <svg
      className="
        fixed
        inset-0
        w-full
        h-full
        pointer-events-none
        z-[2]
        opacity-[0.06]
      "
      viewBox="0 0 1440 900"
      preserveAspectRatio="none"
    >

      <path
        d="
          M0 220
          C240 120,
          420 320,
          720 240
          S1180 120,
          1440 280
        "
        fill="none"
        stroke="white"
        strokeWidth="2"
      />

      <path
        d="
          M0 620
          C300 520,
          520 760,
          860 620
          S1220 520,
          1440 700
        "
        fill="none"
        stroke="white"
        strokeWidth="2"
      />

      <path
        d="
          M240 0
          C420 220,
          620 320,
          720 900
        "
        fill="none"
        stroke="white"
        strokeWidth="1.5"
      />

    </svg>
  );
}