"use client";

import { useState } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import {
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";

import { auth, db } from "@/lib/firebase";

import { useRouter } from "next/navigation";

import FloatingBackground from "@/app/components/FloatingBackground";

import GlassInput from "@/app/components/GlassInput";

import PrimaryButton from "@/app/components/PrimaryButton";

import GlassCard from "@/app/components/GlassCard";

import PageContainer from "@/app/components/PageContainer";

export default function AuthPage() {
  const router = useRouter();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [isLogin, setIsLogin] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const handleAuth = async () => {
    try {
      setLoading(true);

      if (!email || !password) {
        alert(
          "Please enter email and password."
        );

        return;
      }

      if (isLogin) {
        const userCredential =
          await signInWithEmailAndPassword(
            auth,
            email,
            password
          );

        const user =
          userCredential.user;

        const userRef = doc(
          db,
          "users",
          user.uid
        );

        const userSnap =
          await getDoc(userRef);

        if (
          userSnap.exists() &&
          userSnap.data()
            .onboardingCompleted
        ) {
          router.push("/dashboard/overview");
        } else {
          router.push("/onboarding");
        }
      } else {
        const userCredential =
          await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );

        const user =
          userCredential.user;

        await setDoc(
          doc(db, "users", user.uid),
          {
            email: user.email,
            createdAt:
              new Date().toISOString(),
            onboardingCompleted: false,
          }
        );

        router.push("/onboarding");
      }
    } catch (error: any) {
      console.error(error);

      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">

      <FloatingBackground />

      <PageContainer className="min-h-screen flex items-center justify-center">

        <div className="w-full max-w-md">

          <GlassCard className="p-8 md:p-10">

            <div className="mb-8">

              <p className="text-zinc-500 uppercase tracking-[0.3em] text-xs mb-4">
                AI-Powered Platform
              </p>

              <h1 className="text-5xl font-bold leading-tight mb-4">
                AI Career Strategy
              </h1>

              <p className="text-zinc-400 leading-relaxed">
                Build your personalized hiring roadmap
                and maximize your probability of getting hired.
              </p>

            </div>

            <div className="space-y-4">

              <GlassInput
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />

              <GlassInput
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
              />

            </div>

            <div className="mt-6">

              <PrimaryButton
                onClick={handleAuth}
                disabled={loading}
              >
                {loading
                  ? "Please wait..."
                  : isLogin
                  ? "Login"
                  : "Create Account"}
              </PrimaryButton>

            </div>

            <button
              onClick={() =>
                setIsLogin(!isLogin)
              }
              className="mt-6 text-zinc-400 hover:text-white transition"
            >
              {isLogin
                ? "Don't have an account? Create one"
                : "Already have an account? Login"}
            </button>

          </GlassCard>

        </div>

      </PageContainer>

    </div>
  );
}