type Props = {
  children: React.ReactNode;
};

export default function ContentWrapper({
  children,
}: Props) {
  return (
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  );
}