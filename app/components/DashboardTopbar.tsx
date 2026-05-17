"use client";

import { Search } from "lucide-react";
import MobileDashboardSidebar from "@/app/components/MobileDashboardSidebar";
import LogoutButton from "@/app/components/LogoutButton";
import useUserProfile from "@/app/hooks/useUserProfile";


export default function DashboardTopbar() {
  const { profile } =
  useUserProfile();
  return (
    <header
      className="
        sticky
        top-0
        z-40
        border-b
        border-zinc-800
        bg-black/70
        backdrop-blur-xl
      "
    >

      <div
        className="
          flex
          items-center
          justify-between
          gap-6
          px-6
          py-5
        "
      >

        <div
  className="
    flex
    items-center
    gap-4
  "
>

  <MobileDashboardSidebar />

  <div>

    <p
            className="
              text-xs
              uppercase
              tracking-[0.35em]
              text-zinc-500
              mb-2
            "
          >
            AI Career Operating System
          </p>

          <h2
            className="
              text-2xl
              font-black
            "
          >
            {profile?.fullName
  ? `Welcome, ${profile.fullName}`
  : "Strategic Dashboard"}
          </h2>

        </div>

        <div
          className="
            hidden
            md:flex
            items-center
            gap-3
            rounded-2xl
            border
            border-zinc-800
            bg-zinc-950/50
            px-5
            py-4
            w-[320px]
          "
        >

          <Search
            size={18}
            className="text-zinc-500"
          />

          <input
            placeholder="Search strategic modules..."
            className="
              w-full
              bg-transparent
              outline-none
              text-sm
              placeholder:text-zinc-500
            "
          />

        </div>

        <div
          className="
            flex
            items-center
            gap-4
          "
        >

          <div
            className="
              hidden
              md:flex
              items-center
              gap-3
              rounded-2xl
              border
              border-zinc-800
              bg-zinc-950/40
              px-4
              py-3
            "
          >

            <div
              className="
                h-3
                w-3
                rounded-full
                bg-white
                animate-pulse
              "
            />

            <p
              className="
                text-sm
                text-zinc-300
              "
            >
              AI Systems Active
                </p>

  </div>

</div>
<LogoutButton />
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-zinc-800
              bg-zinc-950/40
              font-black
            "
          >
            AI
          </div>

        </div>

      </div>

    </header>
  );
}