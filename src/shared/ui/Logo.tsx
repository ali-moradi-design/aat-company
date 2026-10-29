import { cn } from "@/shared/lib/cn";

const LOGO_PATH =
  "M30.278 30h-4.314L15.143 5.799 4.315 30H0L13.38 0h3.518zm42.061 0h-4.314L57.205 5.799 46.376 30h-4.315l13.38-30h3.517zM103 0v3.824h-9.085V30h-3.99V3.832h-9.091V0z";

/**
 * Wordmark. The header keeps a hairline rule between the glyphs and the
 * "Architecten" label and grows both at `lg`; the footer drops the rule and
 * renders the glyphs at their full 103×30 size.
 *
 * Colour is inherited, so the overlay menu can flip it to white.
 */
export function Logo({
  variant = "header",
  className,
}: {
  variant?: "header" | "footer";
  className?: string;
}) {
  const isFooter = variant === "footer";

  return (
    <span
      className={cn(
        "inline-flex items-end",
        isFooter ? "gap-5" : "gap-3 lg:gap-5",
        className,
      )}
    >
      <span
        className={cn(
          "flex items-end",
          isFooter
            ? "pr-5"
            : "border-r border-current pr-3 lg:border-r-2 lg:pr-5",
        )}
      >
        <svg
          viewBox="0 0 103 30"
          width={103}
          height={30}
          fill="currentColor"
          role="img"
          aria-label="AAT"
          className={cn(
            "block h-auto",
            isFooter ? "h-[30px] w-[103px]" : "w-16 lg:w-[103px]",
          )}
        >
          <path d={LOGO_PATH} />
        </svg>
      </span>
      <span
        className={cn(
          "block self-end leading-none whitespace-nowrap",
          isFooter ? "text-20" : "text-13 lg:text-20",
        )}
      >
        Architecten
      </span>
    </span>
  );
}
