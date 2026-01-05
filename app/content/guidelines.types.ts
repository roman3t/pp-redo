export type ImageSize =
  | { kind: "class"; value: string }
  | { kind: "px"; value: number };

export type ImageText = {
  text: string;
  tone?: "default" | "muted";
  weight?: "regular" | "semibold";
};

export type ImageMeta = {
  title?: string | ImageText[];
  caption?: string | ImageText[];
  description?: string | ImageText[];
};

export type ImageAsset = {
  src: string;
  alt: string;
  size?: ImageSize;

  layout?: "normal" | "full";

  align?: GridAlign;
  meta?: ImageMeta;
};

export type GridSpan = "6" | "12";
export type GridAlign = "left" | "right";

type BlockBase<TType extends string> = { type: TType };

export type LeadBlock = BlockBase<"lead"> & {
  text: string[];
  span?: GridSpan;
  align?: GridAlign;
};

export type ImageBlock = BlockBase<"image"> & {
  image: ImageAsset;
};

export type SubheadingBlock = BlockBase<"subheading"> & {
  text: string;
};

export type ContentsBlock = BlockBase<"contents"> & {
  items: { number: string; title: string; href: string }[];
};

export type ToneVoiceBlock = BlockBase<"toneVoice"> & {
  title: string;
  items: { label: string; value: string }[];
};

export type SampleCopyBlock = BlockBase<"sampleCopy"> & {
  title: string;
  items: { title: string; body: string }[];
};

export type PaletteBlock = BlockBase<"palette"> & {
  title: string;
  swatches: { name: string; hex: string; stroke?: boolean }[];
};

export type GradientsBlock = BlockBase<"gradients"> & {
  title: string;
  gradients: { name: string; css: string }[];
};

export type GalleryBlock = BlockBase<"gallery"> & {
  items: {
    title: string;
    image: ImageAsset;
  }[];
};

export type DontsBlock = BlockBase<"donts"> & {
  title: string;
  items: {
    rule: string;
    image: ImageAsset;
  }[];
};

export type PartnershipsBlock = BlockBase<"partnerships"> & {
  title: string;
  image: ImageAsset;
};

export type TypePairingBlock = BlockBase<"typePairing"> & {
  preview: ImageAsset;
  paragraphs: Array<{
    text: string;
    highlights?: Array<{ match: string; className: string }>;
  }>;
};

export type TypeSpecimenBlock = BlockBase<"typeSpecimen"> & {
  items: Array<{
    label: string;
    sample: string;
    font: "sans" | "serif";
  }>;
};

export type SizingBlock = BlockBase<"sizing"> & {
  title: string;
  intro?: string[];
  specimens: Array<{
    text: string;
    meta: string;
    sizeClass: string;
    leadingClass: string;
    trackingClass: string;
  }>;
};

export type ArtDirectionBlock = BlockBase<"artDirection"> & {
  items: Array<{
    image: ImageAsset;
    title: string;
    description: string;
  }>;
};

// nuevo

export type HeadingBlock = BlockBase<"heading"> & {
  text: string;
  variant?: "h2" | "h3";
};

export type DividerBlock = BlockBase<"divider"> & {
  tone?: "light" | "default";
};

export type CardsGridBlock = BlockBase<"cardsGrid"> & {
  columns?: {
    base?: 1 | 2 | 3 | 4;
    md?: 1 | 2 | 3 | 4;
    lg?: 1 | 2 | 3 | 4;
  };
  items: Array<{
    title: string;
    body: string;
  }>;
};

export type Block =
  | LeadBlock
  | ImageBlock
  | SubheadingBlock
  | ContentsBlock
  | ToneVoiceBlock
  | SampleCopyBlock
  | PaletteBlock
  | GradientsBlock
  | GalleryBlock
  | DontsBlock
  | PartnershipsBlock
  | TypePairingBlock
  | TypeSpecimenBlock
  | SizingBlock
  | ArtDirectionBlock
  | HeadingBlock
  | DividerBlock
  | CardsGridBlock;

export type Section = {
  id: string;
  number: string;
  title: string;
  blocks: Block[];
};
