import ShimmerLine from "@/app/components/ShimmerLine";

export default function GlowDivider() {
  return (
    <div className="py-10">

      <div
        className="
          relative
          overflow-hidden
          rounded-full
        "
      >

        <div
          className="
            absolute
            inset-0
            blur-xl
            opacity-30
            bg-white/10
          "
        />

        <ShimmerLine />

      </div>

    </div>
  );
}