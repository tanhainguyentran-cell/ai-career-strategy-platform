import ResultSection from "@/app/components/ResultSection";

type Props = {
  content: string;
};

export default function ResultCard({
  content,
}: Props) {
  const sections = content
    .split("\n\n")
    .filter(Boolean);

  return (
    <div className="space-y-6">

      {sections.map(
        (section, index) => (
          <ResultSection
            key={index}
            title={`Insight ${index + 1}`}
          >

            <p>{section}</p>

          </ResultSection>
        )
      )}

    </div>
  );
}