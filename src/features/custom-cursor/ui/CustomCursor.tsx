"use client";

import { useEffect, useRef } from "react";

/** Anything that should grow the dot, mirroring the reference selector list. */
const INTERACTIVE =
  "a, button, [data-cursor], label, [role='button'], [role='link'], input, select, summary, textarea";

/** The reference offsets the resting dot by 16px and centres the grown one. */
const REST_OFFSET = -16;
const FOLLOW = 0.16;

/**
 * The reference site replaces the pointer with a small difference-blended dot
 * that swells into a translucent disc over anything interactive. It is skipped
 * entirely on touch devices, where there is no hover.
 */
export function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const query = window.matchMedia("(hover: none) and (pointer: coarse)");
    if (query.matches) return;

    const root = document.documentElement;
    root.classList.add("has-custom-cursor");

    let pointerX = 0;
    let pointerY = 0;
    let x = 0;
    let y = 0;
    let hovering = false;
    let visible = false;
    let frame = 0;

    const render = () => {
      const offset = hovering ? 0 : REST_OFFSET;
      x += (pointerX + offset - x) * FOLLOW;
      y += (pointerY + offset - y) * FOLLOW;
      node.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      frame = requestAnimationFrame(render);
    };

    const show = () => {
      if (visible) return;
      visible = true;
      node.dataset.visible = "true";
    };

    const hide = () => {
      visible = false;
      node.dataset.visible = "false";
    };

    const onMove = (event: MouseEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;

      const next = Boolean(
        (event.target as Element | null)?.closest?.(INTERACTIVE),
      );
      if (next !== hovering) {
        hovering = next;
        node.dataset.hover = String(next);
      }

      show();
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", hide);
    window.addEventListener("blur", hide);
    document.addEventListener("visibilitychange", hide);

    frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", hide);
      window.removeEventListener("blur", hide);
      document.removeEventListener("visibilitychange", hide);
      root.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <div ref={ref} className="cursor" aria-hidden="true">
      <span className="cursor__dot" />
    </div>
  );
}
