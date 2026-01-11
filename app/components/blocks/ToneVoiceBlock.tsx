import type { Block } from "../../content/guidelines.types";
import { Text } from "../ui/Text";

export default function ToneVoiceBlock({
  block,
}: {
  block: Extract<Block, { type: "toneVoice" }>;
}) {
  return (
    <div className="mt-8 grid grid-cols-12 gap-x-8  gap-y-8">
      <div className="col-span-12 md:col-span-6">
        <Text variant={"h3"}>{block.title}</Text>
      </div>

      <div className="col-span-12 md:col-span-6 space-y-10">
        {block.items.map((it, idx) => (
          <div key={idx} className="space-y-1">
            <Text variant={"paragraphBold"}>{it.label}</Text>
            <Text variant={"paragraph"} className="text-[#575757]">
              {it.value}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
}
