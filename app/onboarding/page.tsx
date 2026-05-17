"use client";

import { useEffect, useState } from "react";

import { onAuthStateChanged } from "firebase/auth";

import {
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";

import { auth, db } from "@/lib/firebase";

import { useRouter } from "next/navigation";

import LoadingScreen from "@/app/components/LoadingScreen";

import FloatingBackground from "@/app/components/FloatingBackground";

import GlassCard from "@/app/components/GlassCard";

import GlassInput from "@/app/components/GlassInput";

import PrimaryButton from "@/app/components/PrimaryButton";

import PageContainer from "@/app/components/PageContainer";

export default function OnboardingPage() {
  const router = useRouter();

  const [loading, setLoading] =
    useState(true);

  const [saving, setSaving] =
    useState(false);

  const [formData, setFormData] =
    useState({
      name: "",
      university: "",
      major: "",
      gpa: "",
      englishLevel: "",
      technicalSkills: "",
      certifications: "",
      careerInterests: "",
      preferredIndustries: "",
      preferredCompanies: "",
      graduationYear: "",
      workExperience: "",
      strengths: "",
      weaknesses: "",
      careerGoals: "",
      availableStudyTime: "",
    });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      async (user) => {
        if (!user) {
          router.push("/auth");
          return;
        }

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
          return;
        }

        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [router]);

  const handleChange = (
    field: keyof typeof formData,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      setSaving(true);

      const user = auth.currentUser;

      if (!user) return;

      await setDoc(
        doc(db, "users", user.uid),
        {
          onboardingCompleted: true,
          profile: formData,
          updatedAt:
            new Date().toISOString(),
        },
        {
          merge: true,
        }
      );

      router.push("/dashboard/overview");
    } catch (error) {
      console.error(error);

      alert(
        "Failed to save onboarding profile"
      );
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <LoadingScreen text="Loading onboarding..." />
    );
  }

  const sections = [
    {
      title: "Academic Foundation",
      items: [
        ["name", "Full name"],
        ["university", "University"],
        ["major", "Major"],
        ["gpa", "GPA"],
        ["graduationYear", "Graduation year"],
        ["englishLevel", "English level"],
      ],
    },
    {
      title: "Skills & Experience",
      items: [
        ["technicalSkills", "Technical skills"],
        ["certifications", "Certifications"],
        ["workExperience", "Work experience"],
      ],
    },
    {
      title: "Career Direction",
      items: [
        ["careerInterests", "Career interests"],
        ["preferredIndustries", "Preferred industries"],
        ["preferredCompanies", "Preferred companies"],
        ["careerGoals", "Career goals"],
      ],
    },
    {
      title: "Self Assessment",
      items: [
        ["strengths", "Strengths"],
        ["weaknesses", "Weaknesses"],
        [
          "availableStudyTime",
          "Available study time per week",
        ],
      ],
    },
  ] as const;
  
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">

      <FloatingBackground />

      <PageContainer className="py-16">

        <div className="max-w-6xl mx-auto">

          <div className="mb-14">

            <p className="text-zinc-500 uppercase tracking-[0.3em] text-xs mb-4">
              AI Career Intelligence
            </p>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Personal Career Profile
            </h1>

            <p className="text-zinc-400 max-w-3xl leading-relaxed text-lg">
              Complete your strategic profile so the AI can
              personalize hiring intelligence, company analysis,
              and SMART roadmap recommendations.
            </p>

          </div>

          <div className="space-y-8">

            {sections.map((section) => (
              <GlassCard
                key={section.title}
                className="p-8"
              >

                <h2 className="text-2xl font-bold mb-6">
                  {section.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                  {section.items.map(
                    ([key, placeholder]) => (
                      <GlassInput
                        key={key}
                        value={
                          formData[
                            key as keyof typeof formData
                          ]
                        }
                        placeholder={placeholder}
                        onChange={(e) =>
                          handleChange(
                            key as keyof typeof formData,
                            e.target.value
                          )
                        }
                      />
                    )
                  )}

                </div>

              </GlassCard>
            ))}

          </div>

          <div className="mt-10">

            <PrimaryButton
              onClick={handleSubmit}
              disabled={saving}
            >
              {saving
                ? "Saving profile..."
                : "Save Profile & Continue"}
            </PrimaryButton>

          </div>

        </div>

      </PageContainer>

    </div>
  );
}