import Heading02 from "../heading-02";
import Paragraph01 from "../paragraph-01";

export default function SizingBlock({
  title,
  intro,
  specimens,
}: {
  title: string;
  intro?: string[];
  specimens: {
    text: string;
    meta: string;
    sizeClass: string;
    leadingClass: string;
    trackingClass: string;
  }[];
}) {
  return (
    <section className="space-y-8">
      <Heading02>{title}</Heading02>

      {intro?.length ? (
        <div className="space-y-5">
          {intro.map((p, i) => (
            <Paragraph01 key={i}>{p}</Paragraph01>
          ))}
        </div>
      ) : null}

      <div className="space-y-10">
        {specimens.map((s, i) => (
          <div key={i} className="space-y-4 border-b border-black/10 pb-8">
            <div
              className={[
                "whitespace-pre-line font-sans text-black",
                s.sizeClass,
                s.leadingClass,
                s.trackingClass,
              ].join(" ")}
            >
              {s.text}
            </div>

            <div className="text-[12px] text-black/50">{s.meta}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
