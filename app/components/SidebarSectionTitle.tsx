type Props = {
  children: React.ReactNode;
};

export default function SidebarSectionTitle({
  children,
}: Props) {
  return (
    <div className="mb-6 mt-10">

      <p
        className="
          text-xs
          uppercase
          tracking-[0.25em]
          text-zinc-500
        "
      >
        {children}
      </p>

    </div>
  );
}