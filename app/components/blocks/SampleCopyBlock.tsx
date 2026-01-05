import type { Block } from "../../content/guidelines.types";

import Heading02 from "..//heading-02";
import Paragraph01 from "../paragraph-01";

export default function SampleCopyBlock({
  block,
}: {
  block: Extract<Block, { type: "sampleCopy" }>;
}) {
  return (
    <section className="space-y-6">
      <Heading02>{block.title}</Heading02>

      <div className="space-y-7">
        {block.items.map((it, idx) => (
          <div key={idx} className="space-y-2">
            <div className="text-sm font-semibold text-black">{it.title}</div>
            <Paragraph01>{it.body}</Paragraph01>
          </div>
        ))}
      </div>
    </section>
  );
}
