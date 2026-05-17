import GlassPanel from "@/app/components/GlassPanel";

const metrics = [
  {
    label: "Strategy",
    value: 92,
  },
  {
    label: "Leadership",
    value: 85,
  },
  {
    label: "Execution",
    value: 90,
  },
  {
    label: "Innovation",
    value: 88,
  },
  {
    label: "Culture",
    value: 84,
  },
];

export default function StrategicRadar() {
  return (
    <GlassPanel className="p-10">

      <div className="mb-10">

        <p
          className="
            text-zinc-500
            uppercase
            tracking-[0.2em]
            text-xs
            mb-4
          "
        >
          Strategic Dimensions
        </p>

        <h3 className="text-4xl font-black">
          AI Competitive Mapping
        </h3>

      </div>

      <div className="space-y-6">

        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="space-y-3"
          >

            <div className="flex justify-between">

              <p className="text-zinc-300">
                {metric.label}
              </p>

              <p className="text-zinc-500">
                {metric.value}%
              </p>

            </div>

            <div
              className="
                h-3
                rounded-full
                bg-zinc-900
                overflow-hidden
              "
            >

              <div
                className="
                  h-full
                  rounded-full
                  bg-gradient-to-r
                  from-white
                  to-zinc-500
                "
                style={{
                  width: `${metric.value}%`,
                }}
              />

            </div>

          </div>
        ))}

      </div>

    </GlassPanel>
  );
}