import { ReactNode } from "react";

type Props = {
  children: ReactNode;

  title?: string;

  eyebrow?: string;

  description?: string;
};

export default function DashboardSection({
  children,
  title,
  eyebrow,
  description,
}: Props) {
  return (
    <section className="space-y-6">

      {(title || eyebrow || description) && (
        <div className="space-y-4">

          {eyebrow && (
            <p
              className="
                text-xs
                uppercase
                tracking-[0.35em]
                text-zinc-500
              "
            >
              {eyebrow}
            </p>
          )}

          {title && (
            <h2
              className="
                text-3xl
                lg:text-5xl
                font-black
                leading-tight
              "
            >
              {title}
            </h2>
          )}

          {description && (
            <p
              className="
                max-w-3xl
                text-zinc-400
                leading-relaxed
              "
            >
              {description}
            </p>
          )}

        </div>
      )}

      <div>{children}</div>

    </section>
  );
}