const companies = [
  "Google",
  "Microsoft",
  "Apple",
  "Meta",
  "Amazon",
  "Netflix",
  "Tesla",
  "NVIDIA",
  "OpenAI",
  "Spotify",
];

export default function ScrollingCompanies() {
  return (
    <div
      className="
        relative
        overflow-hidden
        py-4
      "
    >

      <div
        className="
          absolute
          left-0
          top-0
          bottom-0
          w-32
          bg-gradient-to-r
          from-black
          to-transparent
          z-10
        "
      />

      <div
        className="
          absolute
          right-0
          top-0
          bottom-0
          w-32
          bg-gradient-to-l
          from-black
          to-transparent
          z-10
        "
      />

      <div
        className="
          flex
          gap-6
          w-max
          animate-[scroll_24s_linear_infinite]
        "
      >

        {[...companies, ...companies].map(
          (company, index) => (
            <div
              key={`${company}-${index}`}
              className="
                px-6
                py-3
                rounded-2xl
                border
                border-zinc-800
                bg-zinc-900/40
                backdrop-blur-xl
                text-zinc-400
                whitespace-nowrap
              "
            >
              {company}
            </div>
          )
        )}

      </div>

    </div>
  );
}
