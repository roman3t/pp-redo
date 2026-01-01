import type { Config } from "tailwindcss";
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      tablet: "800px",
      desktop: "1280px",
    },
    extend: {
      colors: {
        accent: {
          1: "rgb(var(--accent-1) / <alpha-value>)",
          2: "rgb(var(--accent-2) / <alpha-value>)",
          3: "rgb(var(--accent-3) / <alpha-value>)",
          4: "rgb(var(--accent-4) / <alpha-value>)",
          5: "rgb(var(--accent-5) / <alpha-value>)",
          6: "rgb(var(--accent-6) / <alpha-value>)",
          7: "rgb(var(--accent-7) / <alpha-value>)",
          8: "rgb(var(--accent-8) / <alpha-value>)",
          9: "rgb(var(--accent-9) / <alpha-value>)",
          10: "rgb(var(--accent-10) / <alpha-value>)",
          11: "rgb(var(--accent-11) / <alpha-value>)",
          12: "rgb(var(--accent-12) / <alpha-value>)",
          13: "rgb(var(--accent-13) / <alpha-value>)",
          14: "rgb(var(--accent-14) / <alpha-value>)",
          15: "rgb(var(--accent-15) / <alpha-value>)",
        },
        text: {
          1: "rgb(var(--text-1) / <alpha-value>)",
          2: "rgb(var(--text-2) / <alpha-value>)",
        },
        divider: {
          1: "rgb(var(--divider-1) / <alpha-value>)",
        },
        stroke: {
          1: "rgb(var(--stroke-1) / <alpha-value>)",
        },
      },
    },
  },
} satisfies Config;
