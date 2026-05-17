import type { Metadata } from "next";

import "./globals.css";
import { AuthProvider } from "@/app/context/AuthContext";
import {
  AIProvider,
} from "@/app/context/AIContext";
import {
  NotificationProvider,
} from "@/app/context/NotificationContext";
import {
  WorkspaceProvider,
} from "@/app/context/WorkspaceContext";
import {
  WorkflowProvider,
} from "@/app/context/WorkflowContext";

export const metadata: Metadata = {
  title:
    "AI Career Strategy Platform",

  description:
    "AI-powered hiring intelligence and strategic career roadmap platform.",

  keywords: [
    "AI Career",
    "Career Strategy",
    "Hiring Intelligence",
    "Job Analysis",
    "SMART Roadmap",
    "AI Dashboard",
  ],

  authors: [
    {
      name: "AI Career Strategy",
    },
  ],

  openGraph: {
    title:
      "AI Career Strategy Platform",

    description:
      "AI-powered hiring intelligence and strategic career roadmap platform.",

    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body>

  <AuthProvider>

  <AIProvider>
  
    <NotificationProvider>

<WorkspaceProvider>

  <WorkflowProvider>

    {children}

  </WorkflowProvider>

</WorkspaceProvider>

    </NotificationProvider>

  </AIProvider>

  </AuthProvider>

</body>

    </html>
  );
}