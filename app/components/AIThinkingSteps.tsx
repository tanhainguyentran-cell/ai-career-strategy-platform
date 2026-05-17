const steps = [
  "Scanning market conditions",

  "Analyzing hiring signals",

  "Evaluating strategic fit",

  "Building execution roadmap",

  "Generating AI recommendations",
];

type Props = {
  active: boolean;
};

export default function AIThinkingSteps({
  active,
}: Props) {
  if (!active) return null;

  return (
    <div
      className="
        fixed
        bottom-8
        left-1/2
        -translate-x-1/2
        z-50
      "
    >

      <div
        className="
          rounded-3xl
          border
          border-zinc-800
          bg-black/80
          backdrop-blur-2xl
          px-6
          py-5
          min-w-[320px]
        "
      >

        <div className="space-y-4">

          {steps.map((step, index) => (
            <div
              key={step}
              className="
                flex
                items-center
                gap-4
              "
              style={{
                animationDelay: `${index * 200}ms`,
              }}
            >

              <div
                className="
                  w-2
                  h-2
                  rounded-full
                  bg-white
                  animate-pulse
                "
              />

              <p className="text-sm text-zinc-300">
                {step}
              </p>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}