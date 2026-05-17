type Props = {
  onSelect: (
    prompt: string
  ) => void;
};

const prompts = [
  "Analyze hiring culture",

  "Build interview roadmap",

  "Find competitive advantage",

  "Predict future hiring trends",

  "Generate SMART goals",

  "Analyze corporate strategy",
];

export default function PromptSuggestions({
  onSelect,
}: Props) {
  return (
    <div className="space-y-5">

      <div>

        <p
          className="
            text-zinc-500
            uppercase
            tracking-[0.2em]
            text-xs
            mb-3
          "
        >
          AI Suggestions
        </p>

        <h3 className="text-3xl font-black">
          Quick Strategic Prompts
        </h3>

      </div>

      <div
        className="
          flex
          flex-wrap
          gap-3
        "
      >

        {prompts.map((prompt) => (
          <button
            key={prompt}
            onClick={() =>
              onSelect(prompt)
            }
            className="
              px-5
              py-3
              rounded-2xl
              border
              border-zinc-800
              bg-zinc-900/40
              hover:bg-zinc-900
              transition-all
              duration-300
              text-zinc-300
            "
          >
            {prompt}
          </button>
        ))}

      </div>

    </div>
  );
}