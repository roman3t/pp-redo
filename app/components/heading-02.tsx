import type { ReactNode } from "react";

type Heading02Props = {
  children: ReactNode;
};

export default function Heading02({ children }: Heading02Props) {
  return (
    <h2
      className="
        flex items-baseline gap-2
        font-medium
        text-[24px]
        leading-[1.2]
        tracking-[-0.02em]
        md:text-[26px]
        xl:text-[30px]
      "
    >
      {children}
    </h2>
  );
}
