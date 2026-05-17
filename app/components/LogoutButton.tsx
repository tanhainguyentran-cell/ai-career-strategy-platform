"use client";

import { LogOut } from "lucide-react";

import { signOut } from "firebase/auth";

import { useRouter } from "next/navigation";

import { auth } from "@/lib/firebase";

export default function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    try {
      await signOut(auth);

      router.push("/auth");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <button
      onClick={handleLogout}
      className="
        flex
        items-center
        gap-3
        rounded-2xl
        border
        border-zinc-800
        bg-zinc-950/40
        px-5
        py-3
        text-sm
        font-semibold
        text-zinc-300
        transition-all
        duration-300
        hover:bg-zinc-900
      "
    >

      <LogOut size={16} />

      Logout

    </button>
  );
}