import type { Section, Block } from "../../content/guidelines.types";
import { renderBlock } from "./renderBlock";
import { cn } from "@/app/lib/cn";
import { Text } from "../ui/Text";

type SectionHeaderBlock = {
  type: "sectionHeader";
  number: string;
  title: string;
  id: string;
};

type RenderableBlock = Block | SectionHeaderBlock;

function getBlockGridClasses(block: RenderableBlock) {
  switch (block.type) {
    case "sectionHeader":
      return "col-span-9 md:col-span-6";

    case "lead": {
      const span = block.span ?? "6";
      const align = block.align ?? "right";

      if (span === "12") return "col-span-12";

      return align === "right"
        ? "col-span-12 md:col-span-6 md:col-start-7"
        : "col-span-12 md:col-span-6";
    }

    case "image": {
      const layout = block.image.layout ?? "full";
      const align = block.image.align ?? "right";

      if (layout === "full") return "col-span-12";

      return align === "right"
        ? "col-span-12 md:col-span-6 md:col-start-7"
        : "col-span-12 md:col-span-6";
    }

    default:
      return "col-span-12";
  }
}

export default function SectionRenderer({ section }: { section: Section }) {
  const blocks: RenderableBlock[] = [
    {
      type: "sectionHeader",
      number: section.number,
      title: section.title,
      id: section.id,
    },
    ...section.blocks,
  ];

  return (
    <section
      className={cn("mt-8 border-b border-black/10", "pb-20 md:pt-8 md:pb-30")}
    >
      <div className="grid grid-cols-12 gap-x-8 gap-y-8 min-w-0">
        {blocks.map((block, idx) => (
          <div key={idx} className={cn(getBlockGridClasses(block), "px-5 ")}>
            {block.type === "sectionHeader" ? (
              <Text variant={"h1"} id={block.id}>
                <span className="text-[#F45F00]">{block.number}</span>{" "}
                <span>{block.title}</span>
              </Text>
            ) : (
              renderBlock(block)
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
