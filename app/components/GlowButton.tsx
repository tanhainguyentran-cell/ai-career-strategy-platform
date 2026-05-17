import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function GlowButton({
  href,
  children,
}: Props) {
  return (
    <Link
      href={href}
      className="
        relative
        inline-flex
        items-center
        justify-center
        px-8
        py-4
        rounded-2xl
        font-semibold
        overflow-hidden
        group
      "
    >

      <div
        className="
          absolute
          inset-0
          bg-white
          transition
          duration-300
          group-hover:scale-110
        "
      />

      <div
        className="
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          blur-2xl
          bg-white
          transition
          duration-300
        "
      />

      <span className="relative z-10 text-black">
        {children}
      </span>

    </Link>
  );
}