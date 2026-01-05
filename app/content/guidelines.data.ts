import type { Section } from "./guidelines.types";

export const sections: Section[] = [
  {
    id: "brand-strategy",
    number: "01",
    title: "Brand Strategy",
    blocks: [
      {
        type: "lead",
        span: "6",
        align: "right",
        text: [
          "In the world of finance, mistakes happen—miscalculations, overlooked expenses, inefficiencies that silently erode profitability. Businesses lose money not because they aren’t earning, but because errors go unchecked.",
          "Redo restores confidence in financial numbers.",
        ],
      },
      {
        type: "image",
        image: {
          src: "/img/brand-strategy.png",
          alt: "Person holding a tablet",
          layout: "normal",
          align: "right",
          size: {
            kind: "class",
            value: "h-[345.91px] md:h-[363.46px] lg:h-[482.2px]",
          },
        },
      },
      {
        type: "lead",
        span: "6",
        align: "right",
        text: [
          "Born from the need for financial clarity, Redo was founded on a simple yet powerful mission: to correct financial errors and optimize balance sheets. We believe that precision is the key to profitability, and that businesses shouldn’t be held back by avoidable losses. With advanced technology and expert analysis, we uncover discrepancies, eliminate inefficiencies, and restore confidence in the numbers that drive success.",
          "At Redo, we don’t just fix mistakes—we empower businesses to move forward with accuracy and efficiency. Because when the numbers are right, the future looks even brighter.",
        ],
      },
    ],
  },
  {
    id: "personality",
    number: "02",
    title: "Personality",
    blocks: [
      {
        type: "lead",
        text: [
          "Redo’s voice brings our brand to life through the words we write and speak. The way we communicate with customers has the power to transform their financial well-being. Through clear and intentional language, we make financial corrections simple, accessible, and stress-free. Our direct, approachable, and transparent voice ensures that fixing mistakes feels effortless—so our customers can move forward with confidence.",
        ],
      },
      {
        type: "image",
        image: {
          src: "/img/personality-words.png",
          alt: "Word cloud",
          layout: "full",
        },
      },
      {
        type: "toneVoice",
        title: "Tone & Voice",
        items: [
          {
            label: "Our Vision: why we exist",
            value:
              "To create a future where every business maximizes their potential.",
          },
          {
            label: "Our Mission: what we do",
            value: "Correct financial errors and optimize balance sheets.",
          },
          {
            label: "Our Promise: how we help",
            value:
              "Empower businesses to move forward with accuracy and efficiency.",
          },
        ],
      },
      {
        type: "divider",
      },
      {
        type: "heading",
        text: "Sample Copy",
        variant: "h2",
      },
      {
        type: "cardsGrid",
        columns: { base: 1, md: 4, lg: 4 },
        items: [
          {
            title: "See an Error? We’ll Make It Right.",
            body: "Not sure what that unexpected charge is? Worried about an incorrect withdrawal? ...",
          },
          {
            title: "Mistakes Don’t Have to Cost You—We’ve Got Your Back",
            body: "An overlooked charge or a simple accounting mistake shouldn’t throw off your financial plans. We step in to identify and correct these issues before they become bigger problems.",
          },

          {
            title: "We Handle the Fix, You Focus on What Matters",
            body: "Your time is valuable, and dealing with financial errors shouldn’t take up more of it than necessary. Whether it’s an unexpected overdraft fee or a billing mistake, we take care of the correction process for you.",
          },

          {
            title: "Your Finances, Fixed the Right Way",
            body: "Precision matters when it comes to financial corrections. A small error can have a big impact on your savings, credit score, or future financial goals.",
          },
        ],
      },
    ],
  },

  {
    id: "logo",
    number: "03",
    title: "Logo",
    blocks: [
      {
        type: "lead",
        text: [
          "The Redo logo is a sleek, modern arrow that curves backward, symbolizing the power to rewind, correct, and optimize financial decisions. The reversed motion represents our core mission—helping businesses go back, fix errors, and recover lost value.",
          "Designed with clean, sharp lines, the arrow conveys precision and efficiency, while its fluid motion suggests agility and adaptability in financial correction. The color palette reinforces trust and clarity—deep blues or greens for stability, complemented by bold accents to signify action and resolution.",
          "More than just a symbol, the Redo logo embodies our commitment to turning financial missteps into opportunities for growth—because in business, every mistake deserves a second chance.",
        ],
      },

      {
        type: "gallery",
        items: [
          {
            title: "Primary Lockup",
            image: {
              src: "/img/logo-primary.png",
              alt: "Redo primary lockup",
              size: {
                kind: "px",
                value: 320,
              },
            },
          },
          {
            title: "Clearspace",
            image: {
              src: "/img/logo-clearspace.png",
              alt: "Redo clearspace diagram",
              size: {
                kind: "px",
                value: 260,
              },
            },
          },
          {
            title: "Secondary Lockups",
            image: {
              src: "/img/logo-secondary.png",
              alt: "Redo secondary lockup",
              size: {
                kind: "px",
                value: 240,
              },
            },
          },
        ],
      },

      {
        type: "donts",
        title: "Incorrect Usage",
        items: [
          {
            rule: "Do not resize the mark",
            image: {
              src: "/img/logo-dont-resize.png",
              alt: "Incorrect resize example",
              size: {
                kind: "px",
                value: 220,
              },
            },
          },
          {
            rule: "Do not rotate the logo",
            image: {
              src: "/img/logo-dont-rotate.png",
              alt: "Incorrect rotation example",
              size: {
                kind: "px",
                value: 220,
              },
            },
          },
          {
            rule: "Do not change the color of the mark alone",
            image: {
              src: "/img/logo-dont-color.png",
              alt: "Incorrect color example",
              size: {
                kind: "px",
                value: 220,
              },
            },
          },
          {
            rule: "Do not outline the logo",
            image: {
              src: "/img/logo-dont-outline.png",
              alt: "Incorrect outline example",
              size: {
                kind: "px",
                value: 220,
              },
            },
          },
          {
            rule: "Do not reverse the lockup",
            image: {
              src: "/img/logo-dont-reverse.png",
              alt: "Incorrect reverse example",
              size: {
                kind: "px",
                value: 220,
              },
            },
          },
          {
            rule: "Do not add gradients the logo",
            image: {
              src: "/img/logo-dont-gradient.png",
              alt: "Incorrect gradient example",
              size: {
                kind: "px",
                value: 220,
              },
            },
          },
        ],
      },

      {
        type: "partnerships",
        title: "Partnerships",
        image: {
          src: "/img/figma.png",
          alt: "Redo partnership with Figma",
        },
      },
    ],
  },

  {
    id: "color",
    number: "04",
    title: "Color",
    blocks: [
      {
        type: "lead",
        text: [
          "Redo’s color palette is designed to evoke trust, reliability, and financial clarity, ensuring that every touchpoint reflects our commitment to accuracy and efficiency.",
          "Together, these colors create a strong, dependable, and forward-thinking brand identity, ensuring that Redo is instantly recognized as the go-to solution for financial corrections and optimization.",
        ],
      },

      {
        type: "palette",
        title: "Primary Palette",
        swatches: [
          { name: "Orange", hex: "#FA9819" },
          { name: "Blue Tint", hex: "#B6C9CF" },
          { name: "White", hex: "#FFFFFF", stroke: true },
          { name: "Baby Blue", hex: "#C6EBF7" },
        ],
      },

      {
        type: "palette",
        title: "Secondary Palette",
        swatches: [
          { name: "Navy", hex: "#1E3D59" },
          { name: "Caption", hex: "#48749E" },
          { name: "Sky Blue", hex: "#DEEEFE" },
          { name: "Off-blue", hex: "#E8EBEF" },
          { name: "Deep Orange", hex: "#CD4900" },
          { name: "Black", hex: "#000000" },
          { name: "Dark Grey", hex: "#A3A3A3" },
          { name: "Grey", hex: "#E5E5E5" },
        ],
      },

      {
        type: "gradients",
        title: "Gradient Palette",
        gradients: [
          {
            name: "Gradient 1",
            css: "linear-gradient(135deg, #B6C9CF 0%, #FA9819 55%, #FF7A1A 100%)",
          },
          {
            name: "Gradient 2",
            css: "linear-gradient(135deg, #FA9819 0%, #B6C9CF 85%)",
          },
          {
            name: "Gradient 3",
            css: "linear-gradient(135deg, #FF6A00 0%, #8C3B00 45%, #FFC05A 100%)",
          },
          {
            name: "Gradient 4",
            css: "linear-gradient(135deg, #1E3D59 0%, #9ED8F5 55%, #1E3D59 100%)",
          },
        ],
      },
    ],
  },

  {
    id: "typography",
    number: "05",
    title: "Typography",
    blocks: [
      {
        type: "lead",
        text: [
          "Redo’s typography balances clarity and professionalism with a modern yet timeless type pairing, reinforcing our commitment to accuracy, efficiency, and financial stability.",
        ],
      },

      {
        type: "typePairing",
        preview: {
          src: "/img/type-aa.png",
          alt: "Aa specimen",
          size: {
            kind: "px",
            value: 260,
          },
        },
        paragraphs: [
          {
            text: "Primary Sans–Serif (Rethink Sans Reg) is a clean, modern sans-serif typeface that ensures legibility and precision across all digital and print materials. Its geometric structure reflects clarity, efficiency, and trust, making it the ideal choice for data-heavy content, dashboards, and user interfaces.",
            highlights: [
              { match: "(Rethink Sans Reg)", className: "text-[#F45F00]" },
            ],
          },
          {
            text: "Secondary Serif (Hedvig Letters Serif) is a refined, authoritative serif font that adds a touch of tradition and credibility. Used for emphasis in headlines, reports, and financial documents, it reinforces Redo’s expertise and reliability in correcting financial discrepancies.",
            highlights: [
              { match: "(Hedvig Letters Serif)", className: "text-[#F45F00]" },
            ],
          },
          {
            text: "This sans–serif and serif combination creates a dynamic contrast—modern yet trustworthy, analytical yet approachable, ensuring Redo’s brand communication is always clear, professional, and dependable.",
          },
        ],
      },

      {
        type: "typeSpecimen",
        items: [
          {
            label: "Primary Typeface",
            sample: "Rethink Sans Reg",
            font: "sans",
          },
          {
            label: "Secondary Typeface",
            sample: "Hedvig Letters\nSerif",
            font: "serif",
          },
        ],
      },

      {
        type: "sizing",
        title: "Sizing",
        intro: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        ],
        specimens: [
          {
            text: "Financial errors shouldn’t slow you down or cause unnecessary stress. Whether it’s an incorrect charge, a duplicate transaction, or a miscalculated fee, we step in to make things right. Our process is simple, straightforward, and designed to get your money back where it belongs—quickly and without hassle.",
            meta: "Type Sizes 0–24pt/px    130% Leading    0% Tracking",
            sizeClass: "text-[14px]",
            leadingClass: "leading-[1.3]",
            trackingClass: "tracking-[0em]",
          },
          {
            text: "Our team works diligently to recover lost funds, correct inaccuracies, and keep your financial records accurate—so you can feel confident about every dollar in your account.",
            meta: "Type Sizes 24–55pt/px    120% Leading    -1% Tracking",
            sizeClass: "text-[22px]",
            leadingClass: "leading-[1.2]",
            trackingClass: "tracking-[-0.01em]",
          },
          {
            text: "Whether it’s a bank error, an unauthorized charge, or an overlooked refund, we ensure you don’t pay for something you shouldn’t have.",
            meta: "Type Sizes 55–72pt/px    110% Leading    -2% Tracking",
            sizeClass: "text-[40px]",
            leadingClass: "leading-[1.1]",
            trackingClass: "tracking-[-0.02em]",
          },
          {
            text: "Clear Up\nConfusion,\nGain Peace\nof Mind",
            meta: "Type Sizes > 72pt/px    100% Leading    -2% Tracking",
            sizeClass: "text-[56px]",
            leadingClass: "leading-[1.0]",
            trackingClass: "tracking-[-0.02em]",
          },
        ],
      },
    ],
  },

  {
    id: "art-direction",
    number: "06",
    title: "Art Direction",
    blocks: [
      {
        type: "lead",
        text: [
          "Redo’s photography style reinforces our brand’s core values—trust, clarity, and financial empowerment—by showcasing visuals that reflect professionalism, accuracy, and control.",
        ],
      },

      {
        type: "artDirection",
        items: [
          {
            image: {
              src: "/img/art-clean-casual.jpg",
              alt: "Person working casually on laptop at home",
            },
            title: "Clean & Casual",
            description:
              "Photography should feature modern, well-lit workspaces with a clean and organized feel. The focus should be on clarity, avoiding clutter or overly dramatic compositions.",
          },
          {
            image: {
              src: "/img/art-technology.jpg",
              alt: "Person using tablet with financial dashboards",
            },
            title: "Subtle Technology Integration",
            description:
              "Photography should include elements of financial technology—computer screens displaying dashboards, tablets with data analytics, or hands interacting with financial tools—to highlight Redo’s tech-driven approach to error correction.",
          },
          {
            image: {
              src: "/img/art-storytelling.jpg",
              alt: "Person reviewing financial information on laptop",
            },
            title: "Financial Storytelling",
            description:
              "Images should capture real-world financial scenarios—professionals analyzing reports, business owners reviewing balance sheets, and teams discussing financial strategies. This reinforces Redo’s role in helping businesses take control of their finances.",
          },
          {
            image: {
              src: "/img/art-confidence.jpg",
              alt: "Person confidently working at desk with city view",
            },
            title: "People with Confidence & Focus",
            description:
              "Images should capture real-world financial scenarios—professionals analyzing reports, business owners reviewing balance sheets, and teams discussing financial strategies. This reinforces Redo’s role in helping businesses take control of their finances.",
          },
        ],
      },
    ],
  },
];
