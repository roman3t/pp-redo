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
                className="w-full object-cover h-53 md:h-55.5 lg:h-73.5"
              />
            </div>

            <div className="space-y-1">
              <Text variant={"caption2"}>{it.title}</Text>

              <Text variant={"caption2"} className="text-[#575757]">
                {it.description}
              </Text>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
