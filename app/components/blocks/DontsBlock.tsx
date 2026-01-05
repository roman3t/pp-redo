import Heading02 from "../heading-02";
import type { Block } from "../../content/guidelines.types";
import ImageCard from "./ImageCard";

export default function DontsBlock({
  block,
}: {
  block: Extract<Block, { type: "donts" }>;
}) {
  return (
    <section className="space-y-6">
      <Heading02>{block.title}</Heading02>

      <div className="space-y-8">
        {block.items.map((it, idx) => (
          <div key={idx} className="space-y-3">
            <ImageCard image={it.image} />

            <div className="flex items-center gap-2 text-sm font-medium text-black">
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[10px] text-white">
                ×
              </span>
              <span>{it.rule}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
