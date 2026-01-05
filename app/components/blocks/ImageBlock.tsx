import type { Block } from "@/app/content/guidelines.types";
import ImageCard from "./ImageCard";
import { cn } from "@/app/lib/cn";

export default function ImageBlock({
  block,
}: {
  block: Extract<Block, { type: "image" }>;
}) {
  return (
    <div className={cn(block.image.layout === "full" ? "col-span-12" : "col-span-12")}>
      <ImageCard image={block.image} />
    </div>
  );
}
