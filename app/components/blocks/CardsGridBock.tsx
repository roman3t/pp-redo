import type { Block } from "../../content/guidelines.types";
import { cn } from "@/app/lib/cn";
import { Text } from "../ui/Text";

const COLS = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
} as const;

const MD_COLS = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
} as const;

const LG_COLS = {
  1: "lg:grid-cols-1",
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
} as const;

export default function CardsGridBlock({
  block,
}: {
  block: Extract<Block, { type: "cardsGrid" }>;
}) {
  const { items, columns } = block;

  const base = columns?.base ?? 1;
  const md = columns?.md ?? 2;
  const lg = columns?.lg ?? 4;

  return (
    <div className={cn("grid gap-8", COLS[base], MD_COLS[md], LG_COLS[lg])}>
      {items.map((item, idx) => (
        <div key={idx} className="space-y-5">
          <Text variant={"paragraphBold"} className="text-black">
            {item.title}
          </Text>
          <Text variant={"paragraph"} className="text-[#575757]">
            {item.body}
          </Text>
        </div>
      ))}
    </div>
  );
}
