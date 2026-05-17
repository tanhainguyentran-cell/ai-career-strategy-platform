const skills = [
  {
    skill: "AI Strategy",
    current: 82,
    target: 95,
  },

  {
    skill: "Leadership",
    current: 74,
    target: 90,
  },

  {
    skill: "Execution Systems",
    current: 88,
    target: 96,
  },

  {
    skill: "Market Positioning",
    current: 69,
    target: 92,
  },
];

export default function AISkillGapAnalyzer() {
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
          Skill Gap Analyzer
        </p>

        <h3
          className="
            text-3xl
            lg:text-5xl
            font-black
            leading-tight
          "
        >
          AI-powered capability
          gap analysis system.
        </h3>

      </div>

      <div className="space-y-8">

        {skills.map((item) => (
          <div key={item.skill}>

            <div
              className="
                flex
                items-center
                justify-between
                mb-3
              "
            >

              <p className="font-semibold">
                {item.skill}
              </p>

              <p className="text-zinc-500">
                {item.current}% / {item.target}%
              </p>

            </div>

            <div
              className="
                h-4
                overflow-hidden
                rounded-full
                bg-zinc-900
              "
            >

              <div
                className="
                  h-full
                  rounded-full
                  bg-white
                "
                style={{
                  width: `${item.current}%`,
                }}
              />

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}