import type { Block } from "@/app/content/guidelines.types";
import Paragraph01 from "../paragraph-01";

export default function LeadBlock({
  block,
}: {
  block: Extract<Block, { type: "lead" }>;
}) {
  return (
    <div className="space-y-5">
      {block.text.map((p, i) => (
        <Paragraph01 key={i}>{p}</Paragraph01>
      ))}
    </div>
  );
}
