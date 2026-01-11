import type { ReactNode } from "react";

export default function SectionLayout({
  left,
  right,
}: {
  left: ReactNode;
  right: ReactNode;
}) {
  return (
    <section
      className="
        grid grid-cols-1 gap-3
        md:grid-cols-12 md:gap-12
      "
    >
      <div className="md:col-span-5 xl:col-span-4">
        <div className="sticky top-24">{left}</div>
      </div>


      <div className="md:col-span-7 xl:col-span-8">{right}</div>
    </section>
  );
}
