const events = [
  {
    title: "AI Leadership Study Session",
    date: "Monday · 8:00 PM",
  },

  {
    title: "Strategic Networking Review",
    date: "Wednesday · 7:30 PM",
  },

  {
    title: "Execution Planning Sprint",
    date: "Friday · 9:00 PM",
  },
];

export default function AICalendarSync() {
  return (
    <div
      className="
        rounded-[40px]
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
            tracking-[0.3em]
            text-xs
            mb-4
          "
        >
          Calendar Integration
        </p>

        <h3
          className="
            text-3xl
            lg:text-5xl
            font-black
            leading-tight
          "
        >
          AI-powered strategic
          calendar synchronization.
        </h3>

      </div>

      <div className="space-y-5 mb-10">

        {events.map((event) => (
          <div
            key={event.title}
            className="
              rounded-3xl
              border
              border-zinc-800
              bg-zinc-950/40
              px-6
              py-5
            "
          >

            <h4
              className="
                text-xl
                font-black
                mb-3
              "
            >
              {event.title}
            </h4>

            <p className="text-zinc-500">
              {event.date}
            </p>

          </div>
        ))}

      </div>

      <button
        className="
          rounded-3xl
          bg-white
          px-8
          py-5
          font-black
          text-black
          transition-all
          duration-300
          hover:scale-[1.03]
        "
      >
        Sync With Google Calendar
      </button>

    </div>
  );
}