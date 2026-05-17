"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import { useState } from "react";

import { Menu, X } from "lucide-react";

import { dashboardNavigation } from "@/app/config/dashboardNavigation";

export default function MobileDashboardSidebar() {
  const pathname = usePathname();

  const [open, setOpen] =
    useState(false);

  return (
    <>
      <button
        onClick={() =>
          setOpen(true)
        }
        className="
          lg:hidden
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-2xl
          border
          border-zinc-800
          bg-zinc-950/40
        "
      >

        <Menu size={20} />

      </button>

      {open && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            bg-black/80
            backdrop-blur-xl
          "
        >

          <div
            className="
              absolute
              left-0
              top-0
              h-full
              w-[320px]
              border-r
              border-zinc-800
              bg-black
              p-6
              overflow-y-auto
            "
          >

           <div
  className="
    flex
    items-center
    justify-between
    mb-10
  "
>

  <div>

    <p
      className="
        text-xs
        uppercase
        tracking-[0.4em]
        text-zinc-500
        mb-2
      "
    >
      AI Career OS
    </p>

    <h2
      className="
        text-2xl
        font-black
      "
    >
      Navigation
    </h2>

  </div>

  <button
    onClick={() =>
      setOpen(false)
    }
    className="
      flex
      h-11
      w-11
      items-center
      justify-center
      rounded-2xl
      border
      border-zinc-800
      bg-zinc-950/40
    "
  >

    <X size={18} />

  </button>

</div>

            <div className="space-y-4">

              {dashboardNavigation.map(
                (item) => {
                  const isActive =
                    pathname ===
                    item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() =>
                        setOpen(false)
                      }
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
                            : "border-zinc-800 bg-zinc-950/40 text-zinc-300"
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
                }
              )}

            </div>

          </div>

        </div>
      )}
    </>
  );
}