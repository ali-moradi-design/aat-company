import Link from "next/link";
import { ArrowIcon } from "@/shared/ui/icons";
import { cn } from "@/shared/lib/cn";

type ArrowLinkProps = {
  href: string;
  children: React.ReactNode;
  /** Show the arrow glyph after the label (used for Contact in the nav) */
  withArrow?: boolean;
  /** Label left, arrow pushed to the far right of a min-width box */
  spread?: boolean;
  /** Keep the underline permanently, and wipe it out on hover instead */
  underline?: boolean;
  className?: string;
  target?: React.ComponentProps<"a">["target"];
};

export function ArrowLink({
  href,
  children,
  withArrow = false,
  spread = false,
  underline = false,
  className,
  target,
}: ArrowLinkProps) {
  const external = href.startsWith("http");

  return (
    <Link
      href={href}
      target={target}
      rel={external ? "noreferrer noopener" : undefined}
      className={cn(
        "link focus-ring inline-flex items-center text-16 leading-21",
        spread ? "min-w-[230px] justify-between gap-4" : "gap-[6px]",
        (underline || withArrow || spread) && "link--underline",
        className,
      )}
    >
      <span>{children}</span>
      {withArrow && !spread && <ArrowIcon className="h-[11px] w-[13px]" />}
      {spread && <ArrowIcon className="h-[11px] w-[13px] shrink-0" />}
    </Link>
  );
}
