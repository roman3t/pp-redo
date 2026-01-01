import type { ReactNode } from "react";

function Paragraph01({ children }: { children: ReactNode }) {
  return (
    <p className="text-base leading-[1.2] tracking-normal lg:text-[18px] lg:tracking-[-0.01em]">
      {children}
    </p>
  );
}
export default Paragraph01;
