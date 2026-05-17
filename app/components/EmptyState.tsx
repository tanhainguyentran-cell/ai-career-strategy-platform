import GlassCard from "@/app/components/GlassCard";

type Props = {
  title: string;
  description: string;
};

export default function EmptyState({
  title,
  description,
}: Props) {
  return (
    <GlassCard className="p-14 text-center">

      <h3 className="text-3xl font-bold mb-4">
        {title}
      </h3>

      <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed">
        {description}
      </p>

    </GlassCard>
  );
}