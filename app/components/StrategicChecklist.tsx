const checklist = [
  "Target company analyzed",

  "Hiring culture decoded",

  "Strategic positioning optimized",

  "Competitive differentiation identified",

  "SMART execution roadmap generated",

  "Interview preparation system activated",
];

export default function StrategicChecklist() {
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
          AI Progress System
        </p>

        <h3 className="text-4xl font-black">
          Strategic Completion Checklist
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

        {checklist.map(
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
                  checklist.length - 1
                    ? "border-b border-zinc-800"
                    : ""
                }
              `}
            >

              <div
                className="
                  w-7
                  h-7
                  rounded-full
                  border
                  border-zinc-700
                  bg-zinc-800/50
                  flex
                  items-center
                  justify-center
                "
              >

                <div
                  className="
                    w-3
                    h-3
                    rounded-full
                    bg-white
                  "
                />

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