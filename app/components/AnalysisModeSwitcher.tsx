import GlassButton from "@/app/components/GlassButton";

type Props = {
  selected: string;

  onChange: (
    mode: string
  ) => void;
};

const modes = [
  "Strategic",
  "Interview",
  "Roadmap",
  "Competitor",
];

export default function AnalysisModeSwitcher({
  selected,
  onChange,
}: Props) {
  return (
    <div
      className="
        flex
        flex-wrap
        gap-3
      "
    >

      {modes.map((mode) => (
        <GlassButton
          key={mode}
          active={selected === mode}
          onClick={() =>
            onChange(mode)
          }
        >
          {mode}
        </GlassButton>
      ))}

    </div>
  );
}