import Heading01 from "../heading-01";
import Heading02 from "../heading-02";
import Paragraph01 from "../paragraph-01";
import type { Block, Section } from "../../content/guidelines.data";
import PaletteSectionBlock from "./PaletteSectionBlock";
import GradientSectionBlock from "./GradientSectionBlock";
import TypePairingBlock from "./TypePairingBlock";
import TypeSpecimenBlock from "./TypeSpecimenBlock";
import SizingBlock from "./SizingBlock";
import ArtDirectionBlock from "./ArtDirection.Block";
import SectionLayout from "../section-layout";

export default function SectionRenderer({ section }: { section: Section }) {
  return (
    <div className="py-14 md:py-20 lg:py-24">
      <SectionLayout
        left={
          <Heading01>
            <span className="text-[#F45F00]">{section.number}</span>{" "}
            <span>{section.title}</span>
          </Heading01>
        }
        right={
          <div className="space-y-10">
            {section.blocks.map((block, idx) => (
              <BlockRenderer key={idx} block={block} />
            ))}
          </div>
        }
      />
    </div>
  );
}

function BlockRenderer({ block }: { block: Block }) {
  switch (block.type) {
    case "lead":
      return (
        <div className="space-y-5">
          {block.text.map((p, i) => (
            <Paragraph01 key={i}>{p}</Paragraph01>
          ))}
        </div>
      );

    case "subheading":
      return (
        <Heading02>
          <span>{block.text}</span>
        </Heading02>
      );

    case "image":
      return (
        <div className="w-full overflow-hidden rounded-xl bg-black/5">
          <img
            src={block.src}
            alt={block.alt}
            className="w-full object-cover"
            style={block.height ? { height: block.height } : undefined}
          />
        </div>
      );

    case "toneVoice":
      return (
        <section className="space-y-5">
          <Heading02>{block.title}</Heading02>

          <div className="space-y-4">
            {block.items.map((it, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-sm font-semibold text-black">
                  {it.label}
                </div>
                <div className="text-sm text-black/60">{it.value}</div>
              </div>
            ))}
          </div>
        </section>
      );

    case "sampleCopy":
      return (
        <section className="space-y-6">
          <Heading02>{block.title}</Heading02>

          <div className="space-y-7">
            {block.items.map((it, idx) => (
              <div key={idx} className="space-y-2">
                <div className="text-sm font-semibold text-black">
                  {it.title}
                </div>
                <Paragraph01>{it.body}</Paragraph01>
              </div>
            ))}
          </div>
        </section>
      );

    case "gallery":
      return (
        <div className="space-y-10">
          {block.items.map((it, idx) => (
            <section key={idx} className="space-y-4">
              <Heading02>{it.title}</Heading02>

              <div className="w-full overflow-hidden rounded-xl bg-black/5">
                <img
                  src={it.image.src}
                  alt={it.image.alt}
                  className="w-full object-cover"
                  style={
                    it.image.height ? { height: it.image.height } : undefined
                  }
                />
              </div>
            </section>
          ))}
        </div>
      );

    case "donts":
      return (
        <section className="space-y-6">
          <Heading02>{block.title}</Heading02>

          <div className="space-y-8">
            {block.items.map((it, idx) => (
              <div key={idx} className="space-y-3">
                <div className="w-full overflow-hidden rounded-xl bg-black/5">
                  <img
                    src={it.image.src}
                    alt={it.image.alt}
                    className="w-full object-cover"
                    style={
                      it.image.height ? { height: it.image.height } : undefined
                    }
                  />
                </div>

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

    case "partnerships":
      return (
        <section className="space-y-4">
          <Heading02>{block.title}</Heading02>

          <div className="rounded-xl bg-[#1A0A0A] p-6">
            <div className="flex items-center justify-center gap-6">
              <img
                src={block.image.src}
                alt={block.image.alt}
                className="h-6"
              />
              <div className="h-6 w-px bg-white/20" />
            </div>
          </div>
        </section>
      );

    case "paletteSection":
      return (
        <PaletteSectionBlock title={block.title} swatches={block.swatches} />
      );

    case "gradientSection":
      return (
        <GradientSectionBlock title={block.title} gradients={block.gradients} />
      );

    case "typePairing":
      return (
        <TypePairingBlock
          preview={block.preview}
          paragraphs={block.paragraphs}
        />
      );

    case "typeSpecimen":
      return <TypeSpecimenBlock items={block.items} />;

    case "sizing":
      return (
        <SizingBlock
          title={block.title}
          intro={block.intro}
          specimens={block.specimens}
        />
      );

    case "artDirection":
      return <ArtDirectionBlock items={block.items} />;

    default:
      return null;
  }
}
