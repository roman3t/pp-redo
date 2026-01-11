import type { Block } from "../../content/guidelines.types";
import Heading02 from "../heading-02";

export default function HeadingBlock({
  block,
}: {
  block: Extract<Block, { type: "heading" }>;
}) {
  return (
    <>
      <div className="border-b border-black/10 w-full col-span-12 mb-8" />
      <div className="mb-8">
        <Heading02>{block.text}</Heading02>
      </div>
    </>
  );
}
