import type { Block } from "../../content/guidelines.types";

export default function ToneVoiceBlock({
  block,
}: {
  block: Extract<Block, { type: "toneVoice" }>;
}) {
  return (
    <div className="grid grid-cols-12 gap-x-8 gap-y-6">
      <div className="col-span-12 md:col-span-6">
        <h3 className="text-[22px] leading-[120%] font-semibold">
          {block.title}
        </h3>
      </div>

      <div className="col-span-12 md:col-span-6 space-y-8">
        {block.items.map((it, idx) => (
          <div key={idx} className="space-y-1">
            <div className="text-[14px] font-semibold">{it.label}</div>
            <div className="text-black/60 text-[14px] leading-[140%]">
              {it.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
