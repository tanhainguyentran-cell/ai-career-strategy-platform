export default function DashboardLoading() {
  return (
    <div
      className="
        min-h-screen
        bg-black
        text-white
        p-8
      "
    >

      <div
        className="
          animate-pulse
          space-y-8
        "
      >

        <div
          className="
            h-24
            rounded-[40px]
            bg-zinc-900
          "
        />

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-6
          "
        >

          <div
            className="
              h-[260px]
              rounded-[40px]
              bg-zinc-900
            "
          />

          <div
            className="
              h-[260px]
              rounded-[40px]
              bg-zinc-900
            "
          />

        </div>

        <div
          className="
            h-[420px]
            rounded-[40px]
            bg-zinc-900
          "
        />

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-3
            gap-6
          "
        >

          <div
            className="
              h-[220px]
              rounded-[40px]
              bg-zinc-900
            "
          />

          <div
            className="
              h-[220px]
              rounded-[40px]
              bg-zinc-900
            "
          />

          <div
            className="
              h-[220px]
              rounded-[40px]
              bg-zinc-900
            "
          />

        </div>

      </div>

    </div>
  );
}