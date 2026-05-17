type Props = {
  title: string;
  subtitle: string;
};

export default function SidebarHeader({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-10">

      <h2 className="text-3xl font-bold mb-3">
        {title}
      </h2>

      <p className="text-zinc-400 leading-relaxed">
        {subtitle}
      </p>

    </div>
  );
}