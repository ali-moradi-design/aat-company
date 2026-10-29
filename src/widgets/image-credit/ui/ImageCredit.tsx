/** `block-image-credit` — the photographer credit under a project gallery. */
export function ImageCredit({ text }: { text: string }) {
  return (
    <section className="row block-image-credit mb-g">
      <p className="block-image-credit__text m-0">{text}</p>
    </section>
  );
}
