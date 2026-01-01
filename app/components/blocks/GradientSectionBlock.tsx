import Heading02 from "../heading-02";

export default function GradientSectionBlock({
  title,
  gradients,
}: {
  title: string;
  gradients: { name: string; css: string }[];
}) {
  return (
    <section className="space-y-6">
      <Heading02>{title}</Heading02>

      <div className="space-y-10">
        {gradients.map((g) => (
          <div key={g.name} className="space-y-3">
            <div
              className="h-[120px] w-full max-w-[300px] rounded-md"
              style={{ backgroundImage: g.css }}
            />
            <div className="text-[12px] leading-[1.2] text-black">{g.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
