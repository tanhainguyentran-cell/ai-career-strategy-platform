import GlassPanel from "@/app/components/GlassPanel";

type Props = {
  profile: Record<string, unknown> | null;
};

export default function ProfileSection({
  profile,
}: Props) {
  if (!profile) return null;

  return (
    <GlassPanel className="p-8">

      <div className="mb-8">

        <p className="text-zinc-500 uppercase tracking-[0.25em] text-xs mb-4">
          User Profile
        </p>

        <h2 className="text-3xl font-bold">
          Career Intelligence Profile
        </h2>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {Object.entries(profile).map(
          ([key, value]) => (
            <div
              key={key}
              className="
                p-5
                rounded-2xl
                border
                border-zinc-800
                bg-zinc-950/50
              "
            >

              <p className="text-zinc-500 text-sm mb-3 capitalize">
                {key.replaceAll("_", " ")}
              </p>

              <h3 className="text-lg font-semibold leading-relaxed">
                {String(value)}
              </h3>

            </div>
          )
        )}

      </div>

    </GlassPanel>
  );
}