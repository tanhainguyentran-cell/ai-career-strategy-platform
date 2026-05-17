const heatmap = [
  [92, 88, 75, 81, 95],
  [84, 90, 78, 88, 91],
  [70, 82, 96, 87, 80],
  [94, 89, 85, 92, 77],
  [88, 93, 79, 84, 90],
];

export default function AIHeatmap() {
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
          AI Signal Mapping
        </p>

        <h3 className="text-4xl font-black">
          Strategic Intelligence Heatmap
        </h3>

      </div>

      <div
        className="
          rounded-3xl
          border
          border-zinc-800
          bg-zinc-900/40
          p-6
        "
      >

        <div className="grid grid-cols-5 gap-4">

          {heatmap.flatMap(
            (row, rowIndex) =>
              row.map(
                (value, colIndex) => (
                  <div
                    key={`${rowIndex}-${colIndex}`}
                    className="
                      aspect-square
                      rounded-2xl
                      flex
                      items-center
                      justify-center
                      text-sm
                      font-bold
                      text-black
                    "
                    style={{
                      background: `rgba(255,255,255,${
                        value / 100
                      })`,
                    }}
                  >
                    {value}
                  </div>
                )
              )
          )}

        </div>

      </div>

    </div>
  );
}