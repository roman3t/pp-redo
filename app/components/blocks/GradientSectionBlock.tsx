import Heading02 from "../heading-02";

export default function GradientSectionBlock({
  title,
  gradients,
}: {
  title: string;
  gradients: { name: string; css: string }[];
}) {
  return (
    <section className="space-y-6 px-8">
      <Heading02>{title}</Heading02>
      
      <div className=" grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2">
        {gradients.map((g) => (
          <div key={g.name} className="min-w-0 space-y-3">
            <div
              className="w-full overflow-hidden"
              style={{
                aspectRatio: "16 / 9",
                backgroundImage: g.css,
              }}
            />
            <div className="text-[12px] leading-[1.2] text-black">{g.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
