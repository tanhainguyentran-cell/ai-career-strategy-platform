type Props = {
  children: React.ReactNode;
};

export default function SectionLabel({
  children,
}: Props) {
  return (
    <p
      className="
        text-zinc-500
        uppercase
        tracking-[0.3em]
        text-xs
        mb-4
      "
    >
      {children}
    </p>
  );
}