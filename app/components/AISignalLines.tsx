export default function AISignalLines() {
  return (
    <svg
      className="
        fixed
        inset-0
        w-full
        h-full
        pointer-events-none
        z-[1]
        opacity-[0.04]
      "
      viewBox="0 0 1440 900"
      preserveAspectRatio="none"
    >

      <path
        d="
          M0 160
          C220 120,
          420 260,
          720 200
          S1180 120,
          1440 240
        "
        fill="none"
        stroke="white"
        strokeWidth="1.5"
      />

      <path
        d="
          M0 420
          C260 360,
          520 520,
          860 460
          S1200 360,
          1440 520
        "
        fill="none"
        stroke="white"
        strokeWidth="1.5"
      />

      <path
        d="
          M0 720
          C260 620,
          520 820,
          920 720
          S1220 640,
          1440 820
        "
        fill="none"
        stroke="white"
        strokeWidth="1.5"
      />

    </svg>
  );
}
