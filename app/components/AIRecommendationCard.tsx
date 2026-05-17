type Props = {
  title: string;

  description: string;

  priority?: string;
};

export default function AIRecommendationCard({
  title,
  description,
  priority = "High",
}: Props) {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900/40
        p-6
        transition-all
        duration-300
        hover:border-zinc-700
        hover:translate-y-[-4px]
      "
    >

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-white/[0.04]
          to-transparent
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_55%)]
          pointer-events-none
        "
      />

      <div className="relative z-10">

        <div className="flex items-center justify-between mb-6">

          <div className="flex items-center gap-4">

            <div
              className="
                w-12
                h-12
                rounded-2xl
                border
                border-zinc-700
                bg-zinc-800/40
                flex
                items-center
                justify-center
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

            <p className="text-zinc-500 text-sm">
              AI Recommendation
            </p>

          </div>

          <div
            className="
              px-3
              py-2
              rounded-xl
              border
              border-zinc-800
              bg-zinc-900
              text-xs
              uppercase
              tracking-[0.2em]
              text-zinc-400
            "
          >
            {priority}
          </div>

        </div>

        <h3
          className="
            text-2xl
            font-black
            mb-4
          "
        >
          {title}
        </h3>

        <p className="text-zinc-400 leading-relaxed">
          {description}
        </p>

      </div>

    </div>
  );
}