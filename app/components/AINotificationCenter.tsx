const notifications = [
  {
    title:
      "AI detected a high-growth leadership opportunity.",
    time: "2 minutes ago",
  },

  {
    title:
      "Execution consistency increased by 8% this week.",
    time: "1 hour ago",
  },

  {
    title:
      "New AI-native hiring trend identified.",
    time: "Today",
  },

  {
    title:
      "Strategic roadmap milestone completed.",
    time: "Yesterday",
  },
];

export default function AINotificationCenter() {
  return (
    <div
      className="
        rounded-[40px]
        border
        border-zinc-800
        bg-zinc-950/50
        p-8
      "
    >

      <div className="mb-12">

        <p
          className="
            text-zinc-500
            uppercase
            tracking-[0.3em]
            text-xs
            mb-4
          "
        >
          Notification Center
        </p>

        <h3
          className="
            text-3xl
            lg:text-5xl
            font-black
            leading-tight
          "
        >
          AI-generated strategic
          intelligence notifications.
        </h3>

      </div>

      <div className="space-y-5">

        {notifications.map(
          (notification) => (
            <div
              key={notification.title}
              className="
                rounded-3xl
                border
                border-zinc-800
                bg-black/40
                p-6
              "
            >

              <h4
                className="
                  text-xl
                  font-black
                  mb-3
                "
              >
                {notification.title}
              </h4>

              <p className="text-zinc-500">
                {notification.time}
              </p>

            </div>
          )
        )}

      </div>

    </div>
  );
}