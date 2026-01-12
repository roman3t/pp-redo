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
  const ordered = [...specimens];

  return (
    <section className="space-y-10 mb-10">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-4">
          <Text variant={"h3"}>{title}</Text>
        </div>

        <div className="md:col-span-8">
          {intro?.length ? (
            <div className="space-y-5">
              {intro.map((p, i) => (
                <Text variant={"paragraph"} className="text-[#575757]" key={i}>
                  {p}
                </Text>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      <div className="flex flex-col space-y-12 md:flex-col-reverse md:space-y-reverse">
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

              <div className="flex flex-row justify-between">
                <Text variant={"caption2"}>{m.left}</Text>
                <Text variant={"caption2"}>{m.middle}</Text>
                <Text variant={"caption2"}>{m.right}</Text>
              </div>
              <div className="h-px w-full bg-black/10" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
