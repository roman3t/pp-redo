import * as React from "react";
import type { ImageAsset } from "../../content/guidelines.types";
import { cn } from "@/app/lib/cn";
import { Text } from "../ui/Text";

type Highlight = { match: string; className: string };

function applyHighlights(text: string, highlights?: Highlight[]) {
  if (!highlights?.length) return text;

  let nodes: React.ReactNode[] = [text];

  for (const h of highlights) {
    nodes = nodes.flatMap((node) => {
      if (typeof node !== "string") return [node];

      const parts = node.split(h.match);
      if (parts.length === 1) return [node];

      const out: React.ReactNode[] = [];
      parts.forEach((part, idx) => {
        if (part) out.push(part);
        if (idx < parts.length - 1) {
          out.push(
            <span key={`${h.match}-${idx}`} className={h.className}>
              {h.match}
            </span>
          );
        }
      });
      return out;
    });
  }

  return <>{nodes}</>;
}

export default function TypePairingBlock({
  preview,
  paragraphs,
}: {
  preview: ImageAsset;
  paragraphs: { text: string; highlights?: Highlight[] }[];
}) {
  const previewClass =
    preview.size?.kind === "class" ? preview.size.value : undefined;

  const previewStyle =
    preview.size?.kind === "px"
      ? ({ height: preview.size.value } as const)
      : undefined;

  return (
    <section className="grid grid-cols-1 md:grid-cols-12 md:gap-12">
      <div className="hidden md:block md:col-span-6" />

      <div className="md:col-span-6">
        <div className="space-y-6">
          <div
            className={cn("w-full overflow-hidden bg-black/5", previewClass)}
            style={previewStyle}
          >
            <img
              src={preview.src}
              alt={preview.alt}
              className="h-full w-full object-cover"
              draggable={false}
            />
          </div>

          <div className="space-y-5">
            {paragraphs.map((p, i) => (
              <Text variant={"paragraph"} key={i}>
                {applyHighlights(p.text, p.highlights) as any}
              </Text>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
