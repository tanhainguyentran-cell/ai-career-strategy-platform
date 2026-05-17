type Props = {
  children: React.ReactNode;
};

export default function AnimatedBorder({
  children,
}: Props) {
  return (
    <div className="relative rounded-[36px] p-[1px] overflow-hidden">

      <div
        className="
          absolute
          inset-0
          rounded-[36px]
          bg-[conic-gradient(from_0deg,transparent,rgba(255,255,255,0.3),transparent)]
          animate-spin
        "
        style={{
          animationDuration: "6s",
        }}
      />

      <div
        className="
          relative
          rounded-[36px]
          bg-black
        "
      >
        {children}
      </div>

    </div>
  );
}