type Props = {
  email: string;
  onLogout: () => void;
};

export default function TopNavbar({
  email,
  onLogout,
}: Props) {
  return (
    <div
      className="
        sticky
        top-0
        z-50
        bg-black/70
        backdrop-blur-xl
        border-b
        border-zinc-800
      "
    >

      <div className="px-6 lg:px-12 py-5 flex items-center justify-between">

        <div>

          <h1 className="text-2xl font-bold tracking-tight">
            AI Career Strategy
          </h1>

          <p className="text-zinc-500 text-sm mt-1">
            AI-powered hiring intelligence platform
          </p>

        </div>

        <div className="flex items-center gap-4">

          <div className="hidden md:block text-right">

            <p className="text-sm text-zinc-500">
              Logged in as
            </p>

            <p className="text-sm text-white break-all">
              {email}
            </p>

          </div>

          <button
            onClick={onLogout}
            className="
              bg-zinc-900/80
              border
              border-zinc-800
              hover:bg-zinc-800
              transition
              px-5
              py-3
              rounded-xl
            "
          >
            Logout
          </button>

        </div>

      </div>

    </div>
  );
  }