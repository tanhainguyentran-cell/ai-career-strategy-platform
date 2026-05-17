type Props = {
  label: string;
  value: string;
};

export default function ProfileCard({
  label,
  value,
}: Props) {
  return (
    <div
      className="
        bg-zinc-950/70
        border
        border-zinc-800
        rounded-2xl
        p-5
        transition-all
        duration-300
        hover:border-zinc-600
        hover:-translate-y-1
      "
    >

      <div className="flex items-center justify-between mb-3">

        <p className="text-zinc-500 text-sm capitalize">
          {label}
        </p>

        <div className="w-2 h-2 rounded-full bg-zinc-600" />

      </div>

      <p className="text-white leading-relaxed break-words">
        {value || "-"}
      </p>

    </div>
  );
}