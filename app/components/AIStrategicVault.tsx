const vault = [
  {
    title: "AI Leadership Notes",
    type: "Strategic Knowledge",
  },

  {
    title: "Execution Framework",
    type: "Operational System",
  },

  {
    title: "Career Positioning Playbook",
    type: "Growth Strategy",
  },

  {
    title: "Strategic Reflection Archive",
    type: "Journal Intelligence",
  },
];

export default function AIStrategicVault() {
  return (
    <div
      className="
        rounded-[48px]
        border
        border-zinc-800
        bg-black
        p-8
      "
    >

      <div className="mb-12">

        <p
          className="
            text-zinc-500
            uppercase
            tracking-[0.35em]
            text-xs
            mb-4
          "
        >
          Strategic Vault
        </p>

        <h3
          className="
            text-3xl
            lg:text-6xl
            font-black
            leading-tight
          "
        >
          AI-powered strategic
          knowledge vault.
        </h3>

      </div>

      <div className="space-y-5">

        {vault.map((item) => (
          <div
            key={item.title}
            className="
              flex
              flex-col
              lg:flex-row
              lg:items-center
              lg:justify-between
              gap-5
              rounded-3xl
              border
              border-zinc-800
              bg-zinc-950/40
              px-6
              py-5
            "
          >

            <div>

              <h4
                className="
                  text-2xl
                  font-black
                  mb-2
                "
              >
                {item.title}
              </h4>

              <p className="text-zinc-500">
                {item.type}
              </p>

            </div>

            <button
              className="
                rounded-2xl
                border
                border-zinc-700
                px-5
                py-3
                text-sm
                font-semibold
                text-zinc-300
                transition-all
                duration-300
                hover:bg-zinc-900
              "
            >
              Open Vault
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}