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
        grid grid-cols-1 gap-10
        lg:grid-cols-12 lg:gap-12
      "
    >
      {/* Columna izquierda: título + número */}
      <div className="lg:col-span-5 xl:col-span-4">
        <div className="sticky top-24">
          {left}
        </div>
      </div>

      {/* Columna derecha: contenido */}
      <div className="lg:col-span-7 xl:col-span-8">
        {right}
      </div>
    </section>
  );
}
