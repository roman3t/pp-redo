import { Text } from "../ui/Text";

export default function TypeSpecimenBlock({
  items,
}: {
  items: { label: string; sample: string; font: "sans" | "serif" }[];
}) {
  return (
    <section className="mt-7.5 mb-10 space-y-10">
      {items.map((it, idx) => (
        <div key={idx} className="space-y-4">
          <Text variant={"link"}>{it.label}</Text>
          <div
            className={[
              it.font === "serif" ? "font-serif" : "font-sans",
              "text-[41px] font-normal leading-[130%] tracking-[-0.02em] text-black",
            ].join(" ")}
          >
            {it.sample}
          </div>
        </div>
      ))}
    </section>
  );
}
