const reviews = [
  {
    metric: "Execution Consistency",
    status: "Improved",
  },

  {
    metric: "AI Learning Progress",
    status: "Strong Growth",
  },

  {
    metric: "Strategic Positioning",
    status: "Stable",
  },

  {
    metric: "Leadership Development",
    status: "Expanding",
  },
];

export default function AIWeeklyReview() {
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
          Weekly Review
        </p>

        <h3
          className="
            text-3xl
            lg:text-5xl
            font-black
            leading-tight
          "
        >
          AI-generated weekly
          strategic performance review.
        </h3>

      </div>

      <div className="space-y-5">

        {reviews.map((review) => (
          <div
            key={review.metric}
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
              p-6
            "
          >

            <h4
              className="
                text-2xl
                font-black
              "
            >
              {review.metric}
            </h4>

            <div
              className="
                rounded-full
                border
                border-zinc-700
                px-5
                py-3
                text-sm
                font-semibold
                text-zinc-300
              "
            >
              {review.status}
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}