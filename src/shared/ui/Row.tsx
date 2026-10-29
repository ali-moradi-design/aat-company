import { cn } from "@/shared/lib/cn";

/**
 * The site-wide grid. Desktop is a 22 column track with named `main-start` /
 * `main-end` lines; mobile collapses to 6 columns. Everything else places
 * itself with grid-column utilities.
 */
export function Row({
  className,
  as: Tag = "div",
  ...props
}: React.HTMLAttributes<HTMLElement> & { as?: React.ElementType }) {
  return <Tag className={cn("row", className)} {...props} />;
}
