"use client";

import { useState } from "react";

type FileType =
  | "cv"
  | "jd"
  | "annual-report";

export default function FileIntelligenceUploader() {
  const [fileType, setFileType] =
    useState<FileType>("cv");

  const [loading, setLoading] =
    useState(false);

  const [result, setResult] =
    useState("");

  async function handleFileUpload(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file =
      e.target.files?.[0];

    if (!file) return;

    try {
      setLoading(true);

      const formData =
        new FormData();

      formData.append(
        "file",
        file
      );

      const parseResponse =
        await fetch("/api/files/parse", {
          method: "POST",
          body: formData,
        });

      const parsed =
        await parseResponse.json();

      const aiResponse =
        await fetch("/api/ai/chat", {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            message: `
You are an AI career strategy analyst.

Analyze this uploaded ${
              fileType === "cv"
                ? "CV / resume"
                : fileType === "jd"
                ? "job description"
                : "annual report"
            }.

File name:
${parsed.filename}

File content:
${parsed.text}

Requirements:

1. Extract key information
2. Identify strategic implications
3. Summarize important signals
4. Connect insights to the 5-step career strategy framework
5. Give practical recommendations

If this is a CV:
- identify strengths
- weaknesses
- missing skills
- improvement suggestions

If this is a JD:
- identify required competencies
- hidden hiring signals
- interview preparation priorities

If this is an annual report:
- identify company strategy
- risks
- growth direction
- hiring implications
            `,
          }),
        });

      const data =
        await aiResponse.json();

      setResult(
        data.response ||
          "No analysis generated."
      );
    } catch (error) {
      console.error(error);

      setResult(
        "File intelligence failed."
      );
    } finally {
      setLoading(false);
    }
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
            mb-3
            text-xs
            uppercase
            tracking-[0.3em]
            text-zinc-500
          "
        >
          Real File Intelligence
        </p>

        <h2
          className="
            mb-4
            text-4xl
            font-black
          "
        >
          Upload CV, JD, or Annual Report
        </h2>

        <p className="text-zinc-400">
          Upload documents and let AI extract strategic career intelligence.
        </p>
      </div>

      <div className="mb-6 flex flex-wrap gap-3">
        <button
          onClick={() => setFileType("cv")}
          className={`
            rounded-2xl px-5 py-3 font-bold
            ${
              fileType === "cv"
                ? "bg-white text-black"
                : "border border-zinc-800 bg-black text-zinc-400"
            }
          `}
        >
          CV
        </button>

        <button
          onClick={() => setFileType("jd")}
          className={`
            rounded-2xl px-5 py-3 font-bold
            ${
              fileType === "jd"
                ? "bg-white text-black"
                : "border border-zinc-800 bg-black text-zinc-400"
            }
          `}
        >
          Job Description
        </button>

        <button
          onClick={() =>
            setFileType("annual-report")
          }
          className={`
            rounded-2xl px-5 py-3 font-bold
            ${
              fileType === "annual-report"
                ? "bg-white text-black"
                : "border border-zinc-800 bg-black text-zinc-400"
            }
          `}
        >
          Annual Report
        </button>
      </div>

      <input
        type="file"
        accept=".txt,.pdf,.docx"
        onChange={handleFileUpload}
        className="
          w-full
          rounded-2xl
          border
          border-zinc-800
          bg-black
          p-5
        "
      />

      {loading && (
        <p className="mt-6 text-zinc-500">
          Analyzing file...
        </p>
      )}

      {result && (
        <div
          className="
            mt-8
            rounded-3xl
            border
            border-zinc-800
            bg-black
            p-6
            whitespace-pre-wrap
            leading-relaxed
            text-zinc-300
          "
        >
          {result}
        </div>
      )}
    </div>
  );
}