"use client";

import { useState } from "react";

export default function AIResumeUpload() {
  const [fileName, setFileName] =
    useState("");

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setFileName(file.name);
  };

  return (
    <div
      className="
        rounded-[40px]
        border
        border-zinc-800
        bg-zinc-950/50
        p-8
      "
    >

      <div className="mb-12">

        <p
          className="
            text-zinc-500
            uppercase
            tracking-[0.3em]
            text-xs
            mb-4
          "
        >
          Resume Intelligence
        </p>

        <h3
          className="
            text-3xl
            lg:text-5xl
            font-black
            leading-tight
          "
        >
          Upload your resume
          for AI strategic analysis.
        </h3>

      </div>

      <label
        className="
          flex
          flex-col
          items-center
          justify-center
          rounded-[32px]
          border-2
          border-dashed
          border-zinc-700
          bg-black/40
          px-8
          py-20
          text-center
          cursor-pointer
          transition-all
          duration-300
          hover:border-zinc-500
        "
      >

        <input
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />

        <div
          className="
            mb-6
            h-20
            w-20
            rounded-full
            border
            border-zinc-700
            flex
            items-center
            justify-center
            text-3xl
          "
        >
          ↑
        </div>

        <p
          className="
            text-xl
            font-black
            mb-3
          "
        >
          Upload Resume
        </p>

        <p className="text-zinc-500">
          PDF, DOCX, or TXT
        </p>

        {fileName && (
          <div
            className="
              mt-8
              rounded-2xl
              border
              border-zinc-800
              bg-zinc-950
              px-5
              py-4
              text-zinc-300
            "
          >
            {fileName}
          </div>
        )}

      </label>

    </div>
  );
}