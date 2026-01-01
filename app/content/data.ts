export type Section = {
  id: string;
  number: string;
  title: string;
  intro: string[];          // párrafos arriba de la imagen
  image?: { src: string; alt: string; height?: number };
  body: string[];           // párrafos abajo de la imagen
};

export const contents = [
  { number: "01", title: "Brand Strategy", href: "#brand-strategy" },
  { number: "02", title: "Personality", href: "#personality" },
  { number: "03", title: "Logo", href: "#logo" },
  { number: "04", title: "Color", href: "#color" },
  { number: "05", title: "Typography", href: "#typography" },
  { number: "06", title: "Art Direction", href: "#art-direction" },
] as const;

export const sections: Section[] = [
  {
    id: "brand-strategy",
    number: "01",
    title: "Brand Strategy",
    intro: [
      "In the world of finance, mistakes happen—miscalculations, overlooked expenses, inefficiencies that silently erode profitability. Businesses lose money not because they aren’t earning, but because errors go unchecked.",
      "Redo restores confidence in financial numbers.",
    ],
    image: {
      src: "/img/brand-strategy.jpg",
      alt: "Person holding a tablet",
      height: 346,
    },
    body: [
      "Born from the need for financial clarity, Redo was founded on a simple yet powerful mission: to correct financial errors and optimize balance sheets. We believe that precision is the key to profitability, and that businesses shouldn’t be held back by avoidable losses. With advanced technology and expert analysis, we uncover discrepancies, eliminate inefficiencies, and restore confidence in the numbers that drive success.",
      "At Redo, we don’t just fix mistakes—we empower businesses to move forward with accuracy and efficiency. Because when the numbers are right, the future looks even brighter.",
    ],
  },
];
