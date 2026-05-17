const dimensions = [
  {
    label: "Leadership",
    value: 92,
  },

  {
    label: "Execution",
    value: 96,
  },

  {
    label: "Communication",
    value: 84,
  },

  {
    label: "Adaptability",
    value: 91,
  },

  {
    label: "Innovation",
    value: 88,
  },
];

export default function AIReadinessRadar() {
  return (
    <div className="space-y-8">

      <div>

        <p
          className="
            text-zinc-500
            uppercase
            tracking-[0.2em]
            text-xs
            mb-4
          "
        >
          Readiness Mapping
        </p>

        <h3 className="text-4xl font-black">
          Strategic Readiness Radar
        </h3>

      </div>

      <div
        className="
          relative
          overflow-hidden
          rounded-[40px]
          border
          border-zinc-800
          bg-zinc-900/40
          h-[520px]
          flex
          items-center
          justify-center
        "
      >

        <svg
          width="420"
          height="420"
          viewBox="0 0 420 420"
          className="relative z-10"
        >

          <polygon
            points="
              210,40
              360,140
              310,340
              110,340
              60,140
            "
            fill="rgba(255,255,255,0.04)"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="2"
          />

          <polygon
            points="
              210,70
              330,150
              290,310
              130,310
              90,150
            "
            fill="rgba(255,255,255,0.08)"
            stroke="white"
            strokeWidth="3"
          />

          {dimensions.map(
            (dimension, index) => {
              const positions = [
                {
                  x: 210,
                  y: 20,
                },

                {
                  x: 380,
                  y: 140,
                },

                {
                  x: 320,
                  y: 370,
                },

                {
                  x: 100,
                  y: 370,
                },

                {
                  x: 40,
                  y: 140,
                },
              ];

              return (
                <g key={dimension.label}>

                  <circle
                    cx={positions[index].x}
                    cy={positions[index].y}
                    r="8"
                    fill="white"
                  />

                  <text
                    x={positions[index].x}
                    y={positions[index].y - 18}
                    textAnchor="middle"
                    fill="#a1a1aa"
                    fontSize="14"
                  >
                    {dimension.label}
                  </text>

                </g>
              );
            }
          )}

        </svg>

      </div>

    </div>
  );
}