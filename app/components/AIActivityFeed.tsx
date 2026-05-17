const activities = [
  {
    title:
      "Hiring culture signals updated",
    time: "2 min ago",
  },

  {
    title:
      "AI roadmap recalculated",
    time: "6 min ago",
  },

  {
    title:
      "Strategic alignment score improved",
    time: "12 min ago",
  },

  {
    title:
      "Industry trend model refreshed",
    time: "19 min ago",
  },

  {
    title:
      "Competitor benchmark analyzed",
    time: "31 min ago",
  },
];

export default function AIActivityFeed() {
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
          Live Intelligence
        </p>

        <h3 className="text-4xl font-black">
          AI Activity Feed
        </h3>

      </div>

      <div
        className="
          rounded-3xl
          border
          border-zinc-800
          bg-zinc-900/40
          overflow-hidden
        "
      >

        {activities.map(
          (activity, index) => (
            <div
              key={activity.title}
              className={`
                flex
                items-center
                justify-between
                px-6
                py-5
                ${
                  index !==
                  activities.length - 1
                    ? "border-b border-zinc-800"
                    : ""
                }
              `}
            >

              <div className="flex items-center gap-4">

                <div
                  className="
                    w-3
                    h-3
                    rounded-full
                    bg-white
                    animate-pulse
                  "
                />

                <p className="text-zinc-300">
                  {activity.title}
                </p>

              </div>

              <p
                className="
                  text-zinc-500
                  text-sm
                "
              >
                {activity.time}
              </p>

            </div>
          )
        )}

      </div>

    </div>
  );
}