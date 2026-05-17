import GlassCard from "@/app/components/GlassCard";

type Props = {
  title: string;
  description: string;
};

export default function FeatureCard({
  title,
  description,
}: Props) {
  return (
    <GlassCard
      className="
        p-8
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-zinc-600
      "
    >

      <div className="w-12 h-12 rounded-2xl bg-white text-black flex items-center justify-center font-bold text-lg mb-6">
        ✦
      </div>

      <h3 className="text-2xl font-bold mb-4">
        {title}
      </h3>

      <p className="text-zinc-400 leading-relaxed">
        {description}
      </p>

    </GlassCard>
  );
}
