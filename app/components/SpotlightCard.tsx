import HoverGlowCard from "@/app/components/HoverGlowCard";

type Props = {
  title: string;

  description: string;
};

export default function SpotlightCard({
  title,
  description,
}: Props) {
  return (
    <HoverGlowCard>

      <div className="p-8">

        <div
          className="
            w-14
            h-14
            rounded-2xl
            border
            border-zinc-700
            bg-zinc-800/50
            flex
            items-center
            justify-center
            mb-6
          "
        >

          <div
            className="
              w-3
              h-3
              rounded-full
              bg-white
              animate-pulse
            "
          />

        </div>

        <h3 className="text-2xl font-black mb-5">
          {title}
        </h3>

        <p className="text-zinc-400 leading-relaxed">
          {description}
        </p>

      </div>

    </HoverGlowCard>
  );
}