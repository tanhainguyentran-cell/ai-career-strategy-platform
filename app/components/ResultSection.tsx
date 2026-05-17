import GlassCard from "@/app/components/GlassCard";

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function ResultSection({
  title,
  children,
}: Props) {
  return (
    <GlassCard className="p-8">

      <h2 className="text-2xl font-bold mb-6">
        {title}
      </h2>

      <div className="text-zinc-300 leading-relaxed space-y-4">
        {children}
      </div>

    </GlassCard>
  );
}