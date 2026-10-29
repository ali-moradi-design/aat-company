import { cn } from "@/shared/lib/cn";

/**
 * Fixed-ratio image wrapper. `ratio` is height / width, matching the
 * `--reverse-aspect-ratio` token from the reference site
 * (1.3032367972743 = portrait, 0.63066776586974 = landscape).
 */
export function AspectRatioBox({
  ratio,
  children,
  className,
}: {
  ratio: number;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn("aspect-ratio-box", className)}
      style={{ ["--ratio" as string]: String(ratio) }}
    >
      {children}
    </div>
  );
}
