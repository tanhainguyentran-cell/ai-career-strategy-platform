"use client";
import EmptyState from "@/app/components/EmptyState";

const events = [
  {
    title:
      "AI Portfolio Deep Work",

    time:
      "Monday · 08:00 - 10:00",
  },

  {
    title:
      "Mock Interview Session",

    time:
      "Tuesday · 19:00 - 20:00",
  },

  {
    title:
      "Networking Outreach",

    time:
      "Wednesday · 18:00 - 19:00",
  },

  {
    title:
      "Resume Optimization Sprint",

    time:
      "Thursday · 20:00 - 21:30",
  },

  {
    title:
      "Company Research Block",

    time:
      "Saturday · 09:00 - 11:00",
  },
];

export default function ExecutionCalendar() {
  return (
    <div
      className="
        mt-10
        rounded-[32px]
        border
        border-zinc-800
        bg-zinc-950/40
        p-8
      "
    >

      <div className="mb-8">

        <p
          className="
            text-xs
            uppercase
            tracking-[0.3em]
            text-zinc-500
            mb-3
          "
        >
          AI Calendar System
        </p>

        <h2
          className="
            text-4xl
            font-black
            mb-4
          "
        >
          Strategic Execution Calendar
        </h2>

        <p className="text-zinc-400">
          Organize strategic execution
          into structured calendar blocks.
        </p>

      </div>

      <div className="space-y-5">

        {events.length === 0 && (
  <EmptyState
    title="No Execution Events"
    description="Your strategic execution calendar and milestones will appear here."
  />
)}
        
        {events.map((event) => (
          <div
            key={event.title}
            className="
              rounded-3xl
              border
              border-zinc-800
              bg-black
              p-6
            "
          >

            <h3
              className="
                text-2xl
                font-black
                mb-2
              "
            >
              {event.title}
            </h3>

            <p className="text-zinc-500">
              {event.time}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}