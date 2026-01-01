export default function TypeSpecimenBlock({
  items,
}: {
  items: { label: string; sample: string; font: "sans" | "serif" }[];
}) {
  return (
    <section className="space-y-10">
      {items.map((it, idx) => (
        <div key={idx} className="space-y-3">
          <div className="text-[12px] font-semibold text-black">{it.label}</div>

          <div
            className={[
              "whitespace-pre-line",
              it.font === "serif" ? "font-serif" : "font-sans",
              "text-[40px] leading-[1.1] tracking-[-0.02em] text-black",
            ].join(" ")}
          >
            {it.sample}
          </div>
        </div>
      ))}
    </section>
  );
}
