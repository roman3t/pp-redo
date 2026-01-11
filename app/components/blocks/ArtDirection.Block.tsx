import { Text } from "../ui/Text";

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
    <section>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-8 md:gap-y-12 ">
        {items.map((it, idx) => (
          <article key={idx} className="space-y-4">
            <div className="overflow-hidden bg-black/5">
              <img
                src={it.image.src}
                alt={it.image.alt}
                className="h-55 w-full object-cover md:h-65 lg:h-70"
              />
            </div>

            <div className="space-y-1">
              <div className="text-sm font-semibold text-black">{it.title}</div>

              <Text variant={"paragraph"}>{it.description}</Text>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
