import Heading02 from "../heading-02";

type Swatch = { name: string; hex: string; stroke?: boolean };

export default function PaletteSectionBlock({
  title,
  swatches,
}: {
  title: string;
  swatches: Swatch[];
}) {
  return (
    <section className="space-y-6">
      <Heading02>{title}</Heading02>

      <div className="space-y-14">
        {swatches.map((c) => (
          <div key={c.name} className="space-y-3">
            <div
              className="mx-auto aspect-square w-[280px] rounded-full"
              style={{
                backgroundColor: c.hex,
                border: c.stroke ? "1px solid rgba(0,0,0,0.85)" : "none",
              }}
            />

            <div className="text-[12px] leading-[1.2] text-black">
              <div>{c.name}</div>
              <div>Hex: {c.hex}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
