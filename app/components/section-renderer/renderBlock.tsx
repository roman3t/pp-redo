import type { ReactNode } from "react";

import type { Block } from "../../content/guidelines.types";

import LeadBlock from "../blocks/LeadBlock";
import ImageBlock from "../blocks/ImageBlock";
import ToneVoiceBlock from "../blocks/ToneVoiceBlock";
import GalleryBlock from "../blocks/GalleryBlock";
import DontsBlock from "../blocks/DontsBlock";
import PartnershipsBlock from "../blocks/PartnershipsBlock";

import PaletteSectionBlock from "../blocks/PaletteSectionBlock";
import GradientSectionBlock from "../blocks/GradientSectionBlock";
import TypePairingBlock from "../blocks/TypePairingBlock";
import TypeSpecimenBlock from "../blocks/TypeSpecimenBlock";
import SizingBlock from "../blocks/SizingBlock";
import ArtDirectionBlock from "../blocks/ArtDirection.Block";

import HeadingBlock from "../blocks/HeadingBlock";
import CardsGridBlock from "../blocks/CardsGridBock";

type Renderer<T> = (block: T) => ReactNode;

const renderers: Partial<Record<Block["type"], Renderer<any>>> = {
  lead: (b) => <LeadBlock block={b} />,
  image: (b) => <ImageBlock block={b} />,
  toneVoice: (b) => <ToneVoiceBlock block={b} />,
  gallery: (b) => <GalleryBlock block={b} />,
  donts: (b) => <DontsBlock block={b} />,
  partnerships: (b) => <PartnershipsBlock block={b} />,
  palette: (b) => <PaletteSectionBlock title={b.title} swatches={b.swatches} />,
  gradients: (b) => (
    <GradientSectionBlock title={b.title} gradients={b.gradients} />
  ),
  typePairing: (b) => (
    <TypePairingBlock preview={b.preview} paragraphs={b.paragraphs} />
  ),
  typeSpecimen: (b) => <TypeSpecimenBlock items={b.items} />,
  sizing: (b) => (
    <SizingBlock title={b.title} intro={b.intro} specimens={b.specimens} />
  ),
  artDirection: (b) => <ArtDirectionBlock items={b.items} />,
  heading: (b) => <HeadingBlock block={b} />,
  cardsGrid: (b) => <CardsGridBlock block={b} />,
};

export function renderBlock(block: Block) {
  const renderer = renderers[block.type];
  return renderer ? renderer(block as any) : null;
}
