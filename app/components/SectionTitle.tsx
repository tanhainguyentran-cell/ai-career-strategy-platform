import SectionBadge from "@/app/components/SectionBadge";

type Props = {
  title: string;

  description: string;
};

export default function SectionTitle({
  title,
  description,
}: Props) {
  return (
    <div className="space-y-6">

      <SectionBadge text="AI Strategy Section" />

      <div className="space-y-5">

        <h2
          className="
            text-4xl
            lg:text-5xl
            font-black
            leading-tight
          "
        >
          {title}
        </h2>

        <p
          className="
            text-zinc-400
            text-lg
            leading-relaxed
            max-w-4xl
          "
        >
          {description}
        </p>

      </div>

    </div>
  );
}