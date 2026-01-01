import Paragraph01 from "../paragraph-01";

export default function ArtDirectionBlock({
  items,
}: {
  items: {
    image: { src: string; alt: string };
    title: string;
    description: string;
  }[];
}) {
  return (
    <section className="space-y-10">
      {items.map((it, idx) => (
        <article key={idx} className="space-y-4">
          <div className="overflow-hidden rounded-xl bg-black/5">
            <img
              src={it.image.src}
              alt={it.image.alt}
              className="w-full object-cover"
            />
          </div>

          <div className="space-y-1">
            <div className="text-sm font-semibold text-black">
              {it.title}
            </div>
            <Paragraph01>{it.description}</Paragraph01>
          </div>
        </article>
      ))}
    </section>
  );
}
