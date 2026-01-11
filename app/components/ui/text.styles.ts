import { cva } from "class-variance-authority";

export const textStyles = cva("", {
  variants: {
    variant: {
      display: `
        font-medium
        text-[10px]
        leading-[120%]
        tracking-[-0.02em]
      `,

      h1: `
        font-medium
        text-[30px]
        leading-[110%]
        tracking-[-0.01em]
        tablet:text-[45px]
        desktop:text-[60px]
      `,

      h2: `
        font-medium
        text-[24px]
        leading-[120%]
        tracking-[-0.02em]
        tablet:text-[26px]
        desktop:text-[30px]
      `,

      h3: `
        font-semibold
        text-[22px]
        leading-[120%]
        tracking-[-0.01em]
      `,

      paragraph: `
        text-base
        font-medium
        leading-[1.2]
        tracking-normal
        lg:text-[18px]
        lg:tracking-[-0.01em]
      `,

      paragraphBold: `
        font-bold
        text-[15px]
        leading-[120%]
        tracking-[-0.01em]
      `,

      caption1: `
        font-medium
        text-[16px]
        leading-[120%]
        tracking-[-0.01em]
        tablet:text-[24px]
        desktop:text-[30px]
      `,

      caption2: `
        font-medium
        text-[13px]
        leading-[120%]
        tracking-[-0.01em]
      `,

      link: `
        font-medium
        text-[13px]
        leading-[120%]
        tracking-[-0.02em]
        desktop:text-[15px]
      `,
    },
  },
  defaultVariants: {
    variant: "paragraph",
  },
});
