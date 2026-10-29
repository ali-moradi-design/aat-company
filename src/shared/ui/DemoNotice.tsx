/**
 * Always-visible note that this is a recreation, not the studio's own site.
 * It never takes clicks (pointer-events: none), so it can sit over the page.
 */
export function DemoNotice() {
  return (
    <p
      role="note"
      className="pointer-events-none fixed bottom-3 left-3 z-50 m-0 max-w-[calc(100vw-1.5rem)] rounded-full bg-black/80 px-3 py-1.5 text-[11px] leading-tight text-white"
    >
      Demo recreation for a developer portfolio. Not affiliated with
      AAT|Architecten; contact details are placeholders.
    </p>
  );
}
