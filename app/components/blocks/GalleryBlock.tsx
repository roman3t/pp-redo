import type { Block } from "../../content/guidelines.types";
import Heading02 from "../heading-02";
import { Text } from "../ui/Text";
import ImageCard from "./ImageCard";

export default function GalleryBlock({
  block,
}: {
  block: Extract<Block, { type: "gallery" }>;
}) {
  return (
    <div className="space-y-16 mt-10">
      {block.items.map((it, idx) => (
        <section key={idx} className="space-y-2.5">
          <Text variant={"h3"}>{it.title}</Text>
          <ImageCard image={it.image} />
        </section>
      ))}
    </div>
  );
}
