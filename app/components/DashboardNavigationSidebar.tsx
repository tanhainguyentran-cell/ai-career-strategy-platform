"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { dashboardNavigation } from "@/app/config/dashboardNavigation";

export default function DashboardNavigationSidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="
        hidden
        lg:flex
        sticky
        top-0
        h-screen
        w-[320px]
        flex-col
        border-r
        border-zinc-800
        bg-black
      "
    >

      <div
        className="
          border-b
          border-zinc-800
          px-8
          py-8
        "
      >

        <p
          className="
            text-xs
            uppercase
            tracking-[0.4em]
            text-zinc-500
            mb-4
          "
        >
          AI Career OS
        </p>

        <h1
          className="
            text-3xl
            font-black
            leading-tight
          "
        >
          Strategic
          Intelligence
          Platform
        </h1>

      </div>

      <div
        className="
          flex-1
          overflow-y-auto
          p-5
          space-y-3
        "
      >

        {dashboardNavigation.map((item) => {
          const isActive =
            pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                block
                rounded-3xl
                border
                p-5
                transition-all
                duration-300
                ${
                  isActive
                    ? "border-white bg-white text-black"
                    : "border-zinc-800 bg-zinc-950/40 text-zinc-300 hover:bg-zinc-900"
                }
              `}
            >

              <h3
                className="
                  text-lg
                  font-black
                  mb-2
                "
              >
                {item.label}
              </h3>

              <p
                className={`
                  text-sm
                  leading-relaxed
                  ${
                    isActive
                      ? "text-black/70"
                      : "text-zinc-500"
                  }
                `}
              >
                {item.description}
              </p>

            </Link>
          );
        })}

      </div>

    </aside>
  );
}