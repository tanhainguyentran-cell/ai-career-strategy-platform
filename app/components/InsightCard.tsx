import GlassCard from "@/app/components/GlassCard";

type Props = {
  title: string;
  value: string;
};

export default function InsightCard({
  title,
  value,
}: Props) {
  return (
    <GlassCard
      className="
        p-6
        hover:border-zinc-700
        transition-all
        duration-300
      "
    >

      <p className="text-zinc-500 text-sm mb-4">
        {title}
      </p>

      <h3 className="text-2xl font-bold leading-snug">
        {value}
      </h3>

    </GlassCard>
  );
}