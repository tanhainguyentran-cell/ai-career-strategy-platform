type Props = {
  selected: string;

  onChange: (
    value: string
  ) => void;
};

const tabs = [
  "Overview",

  "Strategy",

  "Skills",

  "Roadmap",

  "Interview",
];

export default function ResultTabs({
  selected,
  onChange,
}: Props) {
  return (
    <div className="flex flex-wrap gap-3 mb-8">

      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() =>
            onChange(tab)
          }
          className={`
            px-5
            py-3
            rounded-2xl
            border
            transition-all
            duration-300
            ${
              selected === tab
                ? `
                  bg-white
                  text-black
                  border-white
                `
                : `
                  bg-zinc-900/60
                  text-zinc-400
                  border-zinc-800
                  hover:bg-zinc-900
                  hover:border-zinc-700
                `
            }
          `}
        >
          {tab}
        </button>
      ))}

    </div>
  );
}