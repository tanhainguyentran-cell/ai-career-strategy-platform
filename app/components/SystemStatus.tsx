import SystemStatusCard from "@/app/components/SystemStatusCard";

export default function SystemStatus() {
  const systems = [
    {
      title: "AI Strategic Engine",
      status: "Operational",
      description:
        "Career intelligence analysis engine is functioning normally.",
    },

    {
      title: "Market Analysis System",
      status: "Operational",
      description:
        "Macro environment and hiring trend analysis active.",
    },

    {
      title: "Roadmap Generator",
      status: "Operational",
      description:
        "SMART execution roadmap generation system online.",
    },

    {
      title: "Data Synchronization",
      status: "Monitoring",
      description:
        "Cloud profile synchronization currently under optimization.",
    },
  ];

  return (
    <div className="space-y-6">

      <div>

        <p className="text-zinc-500 uppercase tracking-[0.25em] text-xs mb-4">
          Platform Infrastructure
        </p>

        <h3 className="text-3xl font-bold">
          System Status
        </h3>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {systems.map((system) => (
          <SystemStatusCard
            key={system.title}
            title={system.title}
            status={system.status}
            description={
              system.description
            }
          />
        ))}

      </div>

    </div>
  );
}