import type { Block } from "../../content/guidelines.types";
import Heading02 from "../heading-02";
import { cn } from "@/app/lib/cn";

export default function HeadingBlock({
  block,
}: {
  block: Extract<Block, { type: "heading" }>;
}) {
  const variant = block.variant ?? "h2";

  if (variant === "h3") {
    return (
      <h3 className={cn("text-[22px] font-semibold leading-[120%] tracking-[-0.01em]")}>
        {block.text}
      </h3>
    );
  }

  return <Heading02>{block.text}</Heading02>;
}
