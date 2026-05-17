import NoiseOverlay from "@/app/components/NoiseOverlay";
import AIAtmosphere from "@/app/components/AIAtmosphere";
import AILightGrid from "@/app/components/AILightGrid";
import AIGridNoise from "@/app/components/AIGridNoise";
import AIAmbientStars from "@/app/components/AIAmbientStars";
import AIEnergyField from "@/app/components/AIEnergyField";
import AISignalLines from "@/app/components/AISignalLines";
import AIDepthField from "@/app/components/AIDepthField";
import AIRealityLayer from "@/app/components/AIRealityLayer";
import AIQuantumLayer from "@/app/components/AIQuantumLayer";
import AIFloatingPaths from "@/app/components/AIFloatingPaths";
import AICorePulse from "@/app/components/AICorePulse";
import AIScanOverlay from "@/app/components/AIScanOverlay";
import AIHorizonGlow from "@/app/components/AIHorizonGlow"

export default function AIBackgroundStack() {
  return (
    <>
      <NoiseOverlay />

      <AIAtmosphere />

      <AILightGrid />

      <AIGridNoise />

      <AIAmbientStars />

      <AIEnergyField />

      <AISignalLines />

      <AIDepthField />

      <AIRealityLayer />

      <AIQuantumLayer />

      <AIFloatingPaths />

      <AICorePulse />

      <AIScanOverlay />

      <AIHorizonGlow />
    </>
  );
}