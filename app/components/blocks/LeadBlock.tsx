import type { Block } from "@/app/content/guidelines.types";
import { Text } from "../ui/Text";

export default function LeadBlock({
  block,
}: {
  block: Extract<Block, { type: "lead" }>;
}) {
  return (
    <div className="space-y-5">
      {block.text.map((p, i) => (
        <Text variant={"paragraph"} className="text-[#575757]" key={i}>
          {p}
        </Text>
      ))}
    </div>
  );
}
