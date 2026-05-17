import NoiseOverlay from "@/app/components/NoiseOverlay";
import HeroGlow from "@/app/components/HeroGlow";
import FloatingGradientOrb from "@/app/components/FloatingGradientOrb";
import NeuralGrid from "@/app/components/NeuralGrid";

export default function FloatingBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden bg-black">

      <NeuralGrid />

      <NoiseOverlay />

      <HeroGlow />

      <FloatingGradientOrb
        size="500px"
        top="-120px"
        left="-120px"
        opacity="0.06"
      />

      <FloatingGradientOrb
        size="420px"
        bottom="-100px"
        right="-80px"
        opacity="0.05"
        delay="2s"
      />

      <FloatingGradientOrb
        size="320px"
        top="40%"
        left="50%"
        opacity="0.04"
        delay="4s"
      />

    </div>
  );
}