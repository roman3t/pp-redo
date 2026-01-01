import Paragraph01 from "../paragraph-01";

function applyHighlights(text: string, highlights?: { match: string; className: string }[]) {
  if (!highlights?.length) return text;

  // Simple: reemplaza el primer match por un <span>. Si necesitas múltiples,
  // se puede hacer tokenizer, pero para tu caso basta.
  const h = highlights[0];
  const parts = text.split(h.match);
  if (parts.length === 1) return text;

  return (
    <>
      {parts[0]}
      <span className={h.className}>{h.match}</span>
      {parts.slice(1).join(h.match)}
    </>
  );
}

export default function TypePairingBlock({
  preview,
  paragraphs,
}: {
  preview: { src: string; alt: string; height?: number };
  paragraphs: { text: string; highlights?: { match: string; className: string }[] }[];
}) {
  return (
    <section className="space-y-6">
      <div className="w-full overflow-hidden rounded-xl bg-black/5">
        <img
          src={preview.src}
          alt={preview.alt}
          className="w-full object-cover"
          style={preview.height ? { height: preview.height } : undefined}
        />
      </div>

      <div className="space-y-5">
        {paragraphs.map((p, i) => (
          <Paragraph01 key={i}>
            {applyHighlights(p.text, p.highlights) as any}
          </Paragraph01>
        ))}
      </div>
    </section>
  );
}
