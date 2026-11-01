export function UzoraThumb({ label, note }: { label: string; note: string }) {
  return (
    <div className="thumb thumb-uzora">
      <span className="uzora-orbit" aria-hidden="true" />
      <span className="uzora-kicker">Concept</span>
      <span className="uzora-word">{label}</span>
      <span className="uzora-note">{note}</span>
    </div>
  );
}

/**
 * Placeholder art for projects that don't have a verified screenshot yet.
 * Drawn in the page's own palette — never a stock or invented product shot.
 */
export function WorkThumb({
  slug,
  placeholder,
}: {
  slug: string;
  placeholder?: { label: string; note: string };
}) {
  if (slug === "uzora" && placeholder) {
    return <UzoraThumb {...placeholder} />;
  }

  return null;
}
