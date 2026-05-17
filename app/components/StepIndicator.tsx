type Props = {
  currentStep: string;
};

const steps = [
  "STEP 1",
  "STEP 2",
  "STEP 3",
  "STEP 4",
  "STEP 5",
];

export default function StepIndicator({
  currentStep,
}: Props) {
  return (
    <div className="flex items-center gap-3 flex-wrap mb-8">

      {steps.map((step, index) => {
        const active =
          step === currentStep;

        return (
          <div
            key={step}
            className="flex items-center gap-3"
          >

            <div
              className={`
                w-11
                h-11
                rounded-full
                border
                flex
                items-center
                justify-center
                text-sm
                font-bold
                transition-all
                duration-300
                ${
                  active
                    ? `
                      bg-white
                      text-black
                      border-white
                    `
                    : `
                      bg-zinc-900/60
                      text-zinc-500
                      border-zinc-800
                    `
                }
              `}
            >
              {index + 1}
            </div>

            {index !==
              steps.length - 1 && (
              <div
                className="
                  w-10
                  h-px
                  bg-zinc-800
                "
              />
            )}

          </div>
        );
      })}

    </div>
  );
}