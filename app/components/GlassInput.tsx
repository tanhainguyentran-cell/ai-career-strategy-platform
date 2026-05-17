type Props = {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
};

export default function GlassInput({
  type = "text",
  placeholder,
  value,
  onChange,
}: Props) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="
        w-full
        p-4
        bg-zinc-950/70
        border
        border-zinc-800
        rounded-2xl
        outline-none
        transition-all
        duration-300
        focus:border-white
        focus:bg-zinc-950
        placeholder:text-zinc-500
      "
    />
  );
}