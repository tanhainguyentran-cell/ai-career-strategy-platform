import AnimatedGridBackground from "@/app/components/AnimatedGridBackground";

import OrbitGlow from "@/app/components/OrbitGlow";

import FloatingParticles from "@/app/components/FloatingParticles";

import NeuralBackground from "@/app/components/NeuralBackground";

import DashboardNavigationSidebar from "@/app/components/DashboardNavigationSidebar";

import DashboardTopbar from "@/app/components/DashboardTopbar";

import ProtectedRoute from "@/app/components/ProtectedRoute";

type Props = {
  children: React.ReactNode;
};

export default function DashboardShell({
  children,
}: Props) {
 return (
  <ProtectedRoute>

    <div
      className="
        min-h-screen
        bg-black
        text-white
        relative
        overflow-hidden
      "
    >

      <AnimatedGridBackground />

      <NeuralBackground />

      <FloatingParticles />

      <OrbitGlow />

      <div
  className="
    relative
    z-10
    flex
  "
>

  <DashboardNavigationSidebar />

  <main
  className="
    min-w-0
    flex-1
  "
>

  <DashboardTopbar />

  <div
    className="
      px-4
      py-4
      lg:px-8
      lg:py-8
    "
  >
    {children}
  </div>

</main>

</div>

       </div>

  </ProtectedRoute>
);
}