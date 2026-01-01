import type { ReactNode } from "react";

type Heading01Props = {
  children: ReactNode;
};

export default function Heading01({ children }: Heading01Props) {
  return (
    <h1
      className="font-medium
    font-sans
    text-[30px]
    leading-[1.1]
    tracking-[-0.01em]
    md:text-[45px]
    xl:text-[60px]"
    >
      {children}
    </h1>
  );
}
