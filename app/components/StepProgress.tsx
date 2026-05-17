type Props = {
  currentStep: string;
};

export default function StepProgress({
  currentStep,
}: Props) {
  const steps = [
    "STEP 1",
    "STEP 2",
    "STEP 3",
    "STEP 4",
    "STEP 5",
  ];

  const currentIndex =
    steps.indexOf(currentStep);

  return (
    <div className="mb-8">

      <div className="flex items-center gap-3 overflow-x-auto pb-2">

        {steps.map((step, index) => {
          const isActive =
            step === currentStep;

          const isCompleted =
            index < currentIndex;

          return (
            <div
              key={step}
              className="flex items-center gap-3 min-w-fit"
            >

              <div
                className={`
                  w-12
                  h-12
                  rounded-full
                  flex
                  items-center
                  justify-center
                  text-sm
                  font-bold
                  transition
                  ${
                    isActive
                      ? "bg-white text-black"
                      : isCompleted
                      ? "bg-zinc-700 text-white"
                      : "bg-zinc-900 border border-zinc-700 text-zinc-500"
                  }
                `}
              >
                {index + 1}
              </div>

              {index !== steps.length - 1 && (
                <div
                  className={`
                    w-12
                    h-[2px]
                    ${
                      isCompleted
                        ? "bg-zinc-500"
                        : "bg-zinc-800"
                    }
                  `}
                />
              )}

            </div>
          );
        })}

      </div>

    </div>
  );
}