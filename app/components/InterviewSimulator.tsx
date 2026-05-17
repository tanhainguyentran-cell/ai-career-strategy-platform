"use client";

import { useState } from "react";

import useUserProfile from "@/app/hooks/useUserProfile";

type Message = {
  role: "ai" | "user";

  content: string;
};

export default function InterviewSimulator() {
  const { profile } =
    useUserProfile();

  const [loading, setLoading] =
    useState(false);

  const [input, setInput] =
    useState("");

  const [messages, setMessages] =
    useState<Message[]>([
      {
        role: "ai",

        content:
          "AI Interview Simulator initialized. Start your mock interview session.",
      },
    ]);

  async function sendMessage() {
    if (!input.trim()) return;

    const currentInput = input;

    const userMessage: Message = {
      role: "user",
      content: currentInput,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    setInput("");

    try {
      setLoading(true);

      const conversation =
        messages
          .map(
            (message) =>
              `${message.role}: ${message.content}`
          )
          .join("\n");

      const response =
        await fetch("/api/ai/chat", {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            message: `
You are conducting a realistic mock interview.

Target Company:
${profile?.targetCompany}

Target Role:
${profile?.targetRole}

Experience:
${profile?.experienceLevel}

Conversation History:
${conversation}

Candidate Response:
${currentInput}

Requirements:

1. Ask realistic interview questions
2. Evaluate candidate responses
3. Give STAR framework coaching
4. Analyze communication quality
5. Assess hiring readiness
6. Simulate recruiter behavior
7. Provide improvement feedback
8. Increase difficulty progressively
9. Test strategic thinking
10. Simulate executive-level interviews

Stay conversational and realistic.
            `,
          }),
        });

      const data =
        await response.json();

      const aiMessage: Message = {
        role: "ai",

        content:
          data.response ||
          "No interview response generated.",
      };

      setMessages((prev) => [
        ...prev,
        aiMessage,
      ]);
    } catch (error) {
      console.error(error);
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
            text-xs
            uppercase
            tracking-[0.3em]
            text-zinc-500
            mb-3
          "
        >
          AI Interview System
        </p>

        <h2
          className="
            text-4xl
            font-black
            mb-4
          "
        >
          Interview Simulator
        </h2>

        <p className="text-zinc-400">
          Practice realistic AI-powered
          mock interviews tailored to
          your target company.
        </p>

      </div>

      <div
        className="
          h-[500px]
          overflow-y-auto
          rounded-3xl
          border
          border-zinc-800
          bg-black
          p-6
          space-y-6
        "
      >

        {messages.map(
          (message, index) => (
            <div
              key={index}
              className={`
                flex
                ${
                  message.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }
              `}
            >

              <div
                className={`
                  max-w-[85%]
                  rounded-3xl
                  px-5
                  py-4
                  whitespace-pre-wrap
                  leading-relaxed
                  ${
                    message.role === "user"
                      ? "bg-white text-black"
                      : "bg-zinc-900 text-zinc-200 border border-zinc-800"
                  }
                `}
              >
                {message.content}
              </div>

            </div>
          )
        )}

      </div>

      <div
        className="
          mt-6
          flex
          gap-4
        "
      >

        <input
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
          placeholder="Respond to the interview..."
          className="
            flex-1
            rounded-2xl
            border
            border-zinc-800
            bg-black
            px-5
            py-4
            outline-none
          "
        />

        <button
          onClick={sendMessage}
          disabled={loading}
          className="
            rounded-2xl
            bg-white
            px-6
            py-4
            font-black
            text-black
          "
        >
          {loading
            ? "Processing..."
            : "Send"}
        </button>

      </div>

    </div>
  );
}