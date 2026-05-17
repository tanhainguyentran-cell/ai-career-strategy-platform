const focusItems = [
  "Improve executive-level communication structure",

  "Strengthen quantified portfolio achievements",

  "Practice strategic case interview simulations",

  "Expand industry trend intelligence",

  "Refine leadership storytelling capability",
];

export default function AIWeeklyFocus() {
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
          AI Weekly Focus
        </p>

        <h3 className="text-4xl font-black">
          Strategic Optimization Priorities
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

        {focusItems.map(
          (item, index) => (
            <div
              key={item}
              className={`
                flex
                items-center
                gap-5
                px-6
                py-5
                ${
                  index !==
                  focusItems.length - 1
                    ? "border-b border-zinc-800"
                    : ""
                }
              `}
            >

              <div
                className="
                  w-8
                  h-8
                  rounded-full
                  border
                  border-zinc-700
                  bg-black/40
                  flex
                  items-center
                  justify-center
                  text-sm
                  font-bold
                "
              >
                {index + 1}
              </div>

              <p className="text-zinc-300">
                {item}
              </p>

            </div>
          )
        )}

      </div>

    </div>
  );
}