const stats = [
  {
    value: "5-Step",
    label: "Strategic Framework",
  },
  {
    value: "AI",
    label: "Powered Intelligence",
  },
  {
    value: "SMART",
    label: "Execution Roadmaps",
  },
];

export default function HeroStats() {
  return (
    <div className="flex flex-wrap gap-10 mt-16">

      {stats.map((stat) => (
        <div key={stat.label}>

          <h3 className="text-4xl font-bold mb-2">
            {stat.value}
          </h3>

          <p className="text-zinc-500">
            {stat.label}
          </p>

        </div>
      ))}

    </div>
  );
}