import type { Project } from "@/entities/project/model/types";

/**
 * Column placement per batch variant, mirroring the reference CSS.
 * Desktop is a 3-column grid inside `main`.
 */
export type BatchVariant = "pl" | "lp" | "l" | "l-end" | "p-gap-p" | "ppp";

export type ProjectBatch = {
  variant: BatchVariant;
  items: Project[];
};

/** `grid-column` for the nth item of a variant (desktop only). */
export const BATCH_ITEM_COLUMNS: Record<
  BatchVariant,
  Record<number, string>
> = {
  pl: { 1: "1 / span 1", 2: "2 / span 2" },
  lp: { 1: "1 / span 2", 2: "3 / span 1" },
  l: { 1: "1 / span 2" },
  "l-end": { 1: "2 / span 2" },
  "p-gap-p": { 1: "1 / span 1", 2: "3 / span 1" },
  ppp: { 1: "1 / span 1", 2: "2 / span 1", 3: "3 / span 1" },
};

/**
 * The reference site lays out its grid as a fixed sequence of batches, so the
 * default (unfiltered) view is spelled out explicitly rather than derived.
 * Order matches the reference markup: pl, p-gap-p, l, ppp, lp, p-gap-p, lp,
 * l-end, pl.
 */
export const REFERENCE_BATCH_SEQUENCE: BatchVariant[] = [
  "pl",
  "p-gap-p",
  "l",
  "ppp",
  "lp",
  "p-gap-p",
  "lp",
  "l-end",
  "pl",
];

/** Split a flat list into batches following an explicit variant sequence. */
export function batchWithSequence(
  list: Project[],
  sequence: BatchVariant[],
): ProjectBatch[] {
  const batches: ProjectBatch[] = [];
  let i = 0;
  let s = 0;

  while (i < list.length) {
    const variant = sequence[s % sequence.length];
    const size = Object.keys(BATCH_ITEM_COLUMNS[variant]).length;
    const items = list.slice(i, i + size);
    batches.push({ variant, items });
    i += items.length;
    s += 1;
  }

  return batches;
}

/**
 * Group a flat project list into batches when there is no reference sequence
 * to follow (i.e. a filtered subset): a landscape pairs with a following
 * portrait, otherwise portraits group into threes or gutter-separated pairs.
 */
export function buildBatches(list: Project[]): ProjectBatch[] {
  const batches: ProjectBatch[] = [];
  let i = 0;

  while (i < list.length) {
    const current = list[i];
    const next = list[i + 1];

    if (current.ratio < 1 && next) {
      batches.push({ variant: "lp", items: [current, next] });
      i += 2;
      continue;
    }

    if (current.ratio < 1 || !next) {
      batches.push({ variant: "l", items: [current] });
      i += 1;
      continue;
    }

    if (next.ratio < 1) {
      batches.push({ variant: "pl", items: [current, next] });
      i += 2;
      continue;
    }

    const third = list[i + 2];
    if (third && third.ratio >= 1) {
      batches.push({ variant: "ppp", items: [current, next, third] });
      i += 3;
      continue;
    }

    batches.push({ variant: "p-gap-p", items: [current, next] });
    i += 2;
  }

  return batches;
}
