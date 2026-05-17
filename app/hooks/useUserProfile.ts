"use client";

import { useEffect, useState } from "react";

import {
  doc,
  getDoc,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

import { useAuth } from "@/app/context/AuthContext";

export type UserProfile = {
  email?: string;

  onboardingCompleted?: boolean;

  createdAt?: string;

  fullName?: string;

  targetCompany?: string;

  targetRole?: string;

  experienceLevel?: string;

  skills?: string[];

  careerGoals?: string[];
};

export default function useUserProfile() {
  const { user } = useAuth();

  const [profile, setProfile] =
    useState<UserProfile | null>(
      null
    );

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function loadProfile() {
      if (!user) {
        setProfile(null);

        setLoading(false);

        return;
      }

      try {
        const ref = doc(
          db,
          "users",
          user.uid
        );

        const snapshot =
          await getDoc(ref);

        if (snapshot.exists()) {
          setProfile(
            snapshot.data() as UserProfile
          );
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, [user]);

  return {
    profile,

    loading,
  };
}