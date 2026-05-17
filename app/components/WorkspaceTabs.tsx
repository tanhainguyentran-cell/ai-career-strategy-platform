"use client";

type Props = {
  activeTab: string;

  setActiveTab: (
    value: string
  ) => void;
};

const tabs = [
  "Overview",

  "Strategy",

  "Execution",

  "Hiring",

  "Branding",

  "Intelligence",
];

export default function WorkspaceTabs({
  activeTab,
  setActiveTab,
}: Props) {
  return (
    <div
      className="
        mb-10
        flex
        flex-wrap
        gap-4
      "
    >

      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() =>
            setActiveTab(tab)
          }
          className={`
            rounded-2xl
            px-5
            py-3
            font-bold
            transition-all
            duration-300
            ${
              activeTab === tab
                ? "bg-white text-black"
                : "bg-zinc-900 text-zinc-400 border border-zinc-800"
            }
          `}
        >
          {tab}
        </button>
      ))}

    </div>
  );
}