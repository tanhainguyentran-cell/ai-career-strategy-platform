"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  collection,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";

import { auth, db } from "@/lib/firebase";

type Roadmap = {
  id: string;

  content: string;

  targetCompany: string;

  targetRole: string;

  experienceLevel: string;
};
import EmptyState from "@/app/components/EmptyState";

export default function SavedRoadmaps() {
  const [roadmaps, setRoadmaps] =
    useState<Roadmap[]>([]);

  useEffect(() => {
    async function loadRoadmaps() {
      try {
        const user =
          auth.currentUser;

        if (!user) return;

        const q = query(
          collection(
            db,
            "users",
            user.uid,
            "roadmaps"
          ),
          orderBy(
            "createdAt",
            "desc"
          )
        );

        const snapshot =
          await getDocs(q);

        const data =
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...(doc.data() as Omit<
              Roadmap,
              "id"
            >),
          }));

        setRoadmaps(
          data as Roadmap[]
        );
      } catch (error) {
        console.error(error);
      }
    }

    loadRoadmaps();
  }, []);

  return (
    <div
      className="
        mt-10
        rounded-[32px]
        border
        border-zinc-800
        bg-zinc-950/40
        p-8
      "
    >

      <div className="mb-8">

        <p
          className="
            text-xs
            uppercase
            tracking-[0.3em]
            text-zinc-500
            mb-3
          "
        >
          AI Strategy Archive
        </p>

        <h2
          className="
            text-3xl
            font-black
          "
        >
          Saved Roadmaps
        </h2>

      </div>

      <div className="space-y-6">

  {roadmaps.length === 0 && (
    <EmptyState
      title="No Roadmaps Yet"
      description="Generate strategic execution roadmaps to start building your AI career operating system."
    />
  )}

  {roadmaps.map(
          (roadmap) => (
            <div
              key={roadmap.id}
              className="
                rounded-3xl
                border
                border-zinc-800
                bg-black
                p-6
              "
            >

              <div className="mb-4">

                <p className="text-sm text-zinc-500">
                  {roadmap.targetCompany}
                </p>

                <h3
                  className="
                    text-2xl
                    font-black
                    mt-2
                  "
                >
                  {roadmap.targetRole}
                </h3>

              </div>

              <div
                className="
                  whitespace-pre-wrap
                  leading-relaxed
                  text-zinc-300
                "
              >
                {roadmap.content}
              </div>

            </div>
          )
        )}

      </div>

    </div>
  );
}