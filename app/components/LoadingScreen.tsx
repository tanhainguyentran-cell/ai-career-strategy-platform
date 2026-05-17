"use client";

type Props = {
  text?: string;
};

export default function LoadingScreen({
  text = "Loading...",
}: Props) {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">

      <div className="flex flex-col items-center gap-6">

        <div className="w-14 h-14 border-4 border-zinc-700 border-t-white rounded-full animate-spin" />

        <p className="text-zinc-400 text-lg">
          {text}
        </p>

      </div>
    </div>
  );
}