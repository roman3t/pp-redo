import { Text } from "../ui/Text";

function splitMeta(meta: string) {
  const parts = meta
    .split(/\s{2,}/)
    .map((s) => s.trim())
    .filter(Boolean);

  const [a = meta, b = "", c = ""] = parts;

  return {
    left: a,
    middle: b,
    right: c,
  };
}

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
  const ordered = [...specimens].reverse();

  return (
    <section className="space-y-10">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-4">
          <Text variant={"h2"}>{title}</Text>
        </div>

        <div className="md:col-span-8">
          {intro?.length ? (
            <div className="space-y-5">
              {intro.map((p, i) => (
                <Text variant={"paragraph"} key={i}>
                  {p}
                </Text>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      <div className="space-y-12">
        {ordered.map((s, i) => {
          const m = splitMeta(s.meta);

          return (
            <div key={i} className="space-y-6">
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

              <div className="space-y-3">
                <div className="grid grid-cols-3 text-[12px] text-black/50">
                  <div className="text-left">{m.left}</div>
                  <div className="text-center">{m.middle}</div>
                  <div className="text-right">{m.right}</div>
                </div>
                <div className="h-px w-full bg-black/10" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
