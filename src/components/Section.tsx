import type { ReactNode } from "react";

export function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
  muted = false,
}: {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  muted?: boolean;
}) {
  return (
    <section
      id={id}
      {...(title ? { "aria-label": title } : {})}
      className={`py-16 sm:py-20 ${muted ? "bg-slate-50" : "bg-white"} ${className}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="mb-10 max-w-3xl">
            {title && (
              <h2 className="font-heading text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-3 text-lg leading-relaxed text-slate-600">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
