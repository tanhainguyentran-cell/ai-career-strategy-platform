"use client";

import {
  useState,
  useEffect,
  useRef,
} from "react";

import useUserProfile from "@/app/hooks/useUserProfile";

import buildAIContext from "@/lib/buildAIContext";

import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";

import { db, auth } from "@/lib/firebase";

type Message = {
  role: "user" | "ai";

  content: string;
};

export default function AIStrategyChat() {
  const [input, setInput] =
    useState("");

  const { profile } =
  useUserProfile();

const [loading, setLoading] =
  useState(false);

const [messages, setMessages] =
  useState<Message[]>([
    {
      role: "ai",
      content:
        "AI Strategy Engine initialized. Ask about career positioning, hiring strategy, AI skill leverage, or long-term professional growth.",
    },
  ]);
const bottomRef =
  useRef<HTMLDivElement | null>(
    null
  );
  const handleSend = async () => {
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
    const user = auth.currentUser;

    if (user) {
      await addDoc(
        collection(
          db,
          "users",
          user.uid,
          "chatHistory"
        ),
        {
          role: "user",
          content: currentInput,
          createdAt:
            serverTimestamp(),
        }
      );
    }
  } catch (error) {
    console.error(error);
  }

  try {
    setLoading(true);

    const context =
      buildAIContext(profile);

    const response =
      await fetch("/api/ai/chat", {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          message: currentInput,
          context,
        }),
      });

    const data =
      await response.json();

    const aiMessage: Message = {
      role: "ai",

      content:
        data.response ||
        "No AI response generated.",
    };

    setMessages((prev) => [
      ...prev,
      aiMessage,
    ]);

    const user =
      auth.currentUser;

    if (user) {
      await addDoc(
        collection(
          db,
          "users",
          user.uid,
          "chatHistory"
        ),
        {
          role: "ai",

          content:
            aiMessage.content,

          createdAt:
            serverTimestamp(),
        }
      );
    }
  } catch (error) {
    console.error(error);

    setMessages((prev) => [
      ...prev,
      {
        role: "ai",

        content:
          "AI system failed to respond.",
      },
    ]);
  } finally {
    setLoading(false);
  }
};
useEffect(() => {
  bottomRef.current?.scrollIntoView({
    behavior: "smooth",
  });
}, [messages, loading]);
useEffect(() => {
  async function loadHistory() {
    try {
      const user =
        auth.currentUser;

      if (!user) return;

      const q = query(
        collection(
          db,
          "users",
          user.uid,
          "chatHistory"
        ),
        orderBy("createdAt", "asc")
      );

      const snapshot =
        await getDocs(q);

      const history =
        snapshot.docs.map((doc) => {
          const data = doc.data();

          return {
            role: data.role,
            content: data.content,
          };
        });

      if (history.length > 0) {
        setMessages(
          history as Message[]
        );
      }
    } catch (error) {
      console.error(error);
    }
  }

  loadHistory();
}, []);
  return (
    <div
      className="
        rounded-[40px]
        border
        border-zinc-800
        bg-black
        overflow-hidden
      "
    >

      <div
        className="
          border-b
          border-zinc-800
          px-6
          py-5
        "
      >

        <p
          className="
            text-sm
            uppercase
            tracking-[0.3em]
            text-zinc-500
          "
        >
          AI Strategy Chat
        </p>

      </div>

      <div
        className="
          h-[500px]
          overflow-y-auto
          space-y-6
          p-6
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
                {loading && (
          <div className="flex justify-start">

            <div
              className="
                max-w-[85%]
                rounded-3xl
                border
                border-zinc-800
                bg-zinc-900
                px-5
                py-4
                text-zinc-400
              "
            >
              AI is thinking...
            </div>

          </div>
        )}
        <div ref={bottomRef} />


      </div>

      <div
        className="
          border-t
          border-zinc-800
          p-5
          flex
          gap-4
        "
      >

        <textarea
  value={input}
  onChange={(e) =>
    setInput(e.target.value)
  }
  onKeyDown={(e) => {
    if (
      e.key === "Enter" &&
      !e.shiftKey
    ) {
      e.preventDefault();

      handleSend();
    }
  }}
  placeholder="Ask AI about your career strategy..."
  rows={1}
  className="
    flex-1
    rounded-2xl
    border
    border-zinc-800
    bg-zinc-950
    px-5
    py-4
    outline-none
    resize-none
    min-h-[56px]
    max-h-[220px]
  "
/>

        <button
          onClick={handleSend}
          className="
            rounded-2xl
            bg-white
            px-6
            py-4
            font-black
            text-black
          "
        >
          Send
        </button>

      </div>

    </div>
  );
}