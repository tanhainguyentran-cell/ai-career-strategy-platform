"use client";

import { useState } from "react";
import EmptyState from "@/app/components/EmptyState";

type Application = {
  id: number;

  company: string;

  role: string;

  status: string;
};

export default function JobApplicationTracker() {
  const [company, setCompany] =
    useState("");

  const [role, setRole] =
    useState("");

  const [applications, setApplications] =
    useState<Application[]>([
      {
        id: 1,
        company: "Google",
        role: "AI Strategist",
        status: "Interview",
      },

      {
        id: 2,
        company: "Microsoft",
        role: "Product Analyst",
        status: "Applied",
      },
    ]);

  function addApplication() {
    if (
      !company.trim() ||
      !role.trim()
    )
      return;

    const newApplication = {
      id: Date.now(),

      company,

      role,

      status: "Applied",
    };

    setApplications((prev) => [
      newApplication,
      ...prev,
    ]);

    setCompany("");

    setRole("");
  }

  function advanceStatus(
    id: number
  ) {
    setApplications((prev) =>
      prev.map((application) => {
        if (application.id !== id)
          return application;

        const statusFlow = [
          "Applied",
          "Interview",
          "Final Round",
          "Offer",
        ];

        const currentIndex =
          statusFlow.indexOf(
            application.status
          );

        const nextStatus =
          statusFlow[
            Math.min(
              currentIndex + 1,
              statusFlow.length - 1
            )
          ];

        return {
          ...application,
          status: nextStatus,
        };
      })
    );
  }

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
          AI Hiring Pipeline
        </p>

        <h2
          className="
            text-4xl
            font-black
            mb-4
          "
        >
          Job Application Tracker
        </h2>

        <p className="text-zinc-400">
          Manage your hiring pipeline
          strategically.
        </p>

      </div>

      <div
        className="
          grid
          gap-4
          md:grid-cols-2
          mb-6
        "
      >

        <input
          value={company}
          onChange={(e) =>
            setCompany(e.target.value)
          }
          placeholder="Company"
          className="
            rounded-2xl
            border
            border-zinc-800
            bg-black
            px-5
            py-4
            outline-none
          "
        />

        <input
          value={role}
          onChange={(e) =>
            setRole(e.target.value)
          }
          placeholder="Role"
          className="
            rounded-2xl
            border
            border-zinc-800
            bg-black
            px-5
            py-4
            outline-none
          "
        />

      </div>

      <button
        onClick={addApplication}
        className="
          rounded-2xl
          bg-white
          px-6
          py-4
          font-black
          text-black
        "
      >
        Add Application
      </button>

      <div className="space-y-5 mt-8">

        {applications.length === 0 && (
  <EmptyState
    title="No Applications Tracked"
    description="Track job applications, execution progress, and strategic hiring pipelines."
  />
)}
        
        {applications.map(
          (application) => (
            <button
              key={application.id}
              onClick={() =>
                advanceStatus(
                  application.id
                )
              }
              className="
                w-full
                rounded-3xl
                border
                border-zinc-800
                bg-black
                p-6
                text-left
              "
            >

              <div
                className="
                  flex
                  items-center
                  justify-between
                "
              >

                <div>

                  <h3
                    className="
                      text-2xl
                      font-black
                      mb-2
                    "
                  >
                    {application.company}
                  </h3>

                  <p className="text-zinc-400">
                    {application.role}
                  </p>

                </div>

                <div
                  className="
                    rounded-full
                    border
                    border-zinc-700
                    px-4
                    py-2
                    text-sm
                  "
                >
                  {application.status}
                </div>

              </div>

            </button>
          )
        )}

      </div>

    </div>
  );
}