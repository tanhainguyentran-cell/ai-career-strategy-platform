"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

import { useAuth } from "@/app/context/AuthContext";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } =
    useAuth();

  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth");
    }
  }, [loading, user, router]);

  if (loading) {
    return (
      <div
        className="
          min-h-screen
          bg-black
          text-white
          flex
          items-center
          justify-center
        "
      >

        <div className="text-center">

          <div
            className="
              h-16
              w-16
              rounded-full
              border-2
              border-zinc-800
              border-t-white
              animate-spin
              mx-auto
              mb-6
            "
          />

          <p className="text-zinc-500">
            Initializing AI systems...
          </p>

        </div>

      </div>
    );
  }

  if (!user) {
    return null;
  }

  return <>{children}</>;
}