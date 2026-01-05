import type { Block } from "../../content/guidelines.types";
import { cn } from "@/app/lib/cn";

export default function CardsGridBlock({
  block,
}: {
  block: Extract<Block, { type: "cardsGrid" }>;
}) {
  const { items, columns = { base: 1, md: 2, lg: 4 } } = block;

  const gridClasses = cn(
    "grid gap-8",
    columns.base && `grid-cols-${columns.base}`,
    columns.md && `md:grid-cols-${columns.md}`,
    columns.lg && `lg:grid-cols-${columns.lg}`
  );

  return (
    <div className={gridClasses}>
      {items.map((item, idx) => (
        <div key={idx} className="space-y-2">
          <h4 className="text-sm font-semibold text-black">{item.title}</h4>
          <p className="text-sm leading-relaxed text-black/70">{item.body}</p>
        </div>
      ))}
    </div>
  );
}
