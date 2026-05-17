type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function PageContainer({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`
        relative
        z-10
        max-w-7xl
        mx-auto
        px-6
        lg:px-8
        ${className}
      `}
    >
      {children}
    </div>
  );
}