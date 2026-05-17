import AnimatedCounter from "@/app/components/AnimatedCounter";

type Props = {
  value: number;

  label: string;
};

export default function MetricRing({
  value,
  label,
}: Props) {
  const circumference =
    2 * Math.PI * 54;

  const offset =
    circumference -
    (value / 100) *
      circumference;

  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
      "
    >

      <div className="relative w-[140px] h-[140px]">

        <svg
          className="
            rotate-[-90deg]
            w-full
            h-full
          "
        >

          <circle
            cx="70"
            cy="70"
            r="54"
            stroke="rgb(39 39 42)"
            strokeWidth="10"
            fill="transparent"
          />

          <circle
            cx="70"
            cy="70"
            r="54"
            stroke="white"
            strokeWidth="10"
            fill="transparent"
            strokeDasharray={
              circumference
            }
            strokeDashoffset={
              offset
            }
            strokeLinecap="round"
            className="
              transition-all
              duration-1000
            "
          />

        </svg>

        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            text-3xl
            font-black
          "
        >
          <AnimatedCounter
            value={value}
            suffix="%"
          />
        </div>

      </div>

      <p
        className="
          mt-5
          text-zinc-400
          uppercase
          tracking-[0.2em]
          text-xs
        "
      >
        {label}
      </p>

    </div>
  );
}