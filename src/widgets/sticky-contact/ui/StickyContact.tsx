import Link from "next/link";
import { ArrowIcon } from "@/shared/ui/icons";

/**
 * The reference pins a small "Contact" shortcut to the top of the viewport
 * while a project page scrolls. Desktop only, like the original.
 */
export function StickyContact() {
  return (
    <div className="project-sticky-contact">
      <Link href="/contact" className="project-sticky-contact__link focus-ring">
        <span>Contact</span>
        <ArrowIcon className="h-[11px] w-[13px]" />
      </Link>
    </div>
  );
}
