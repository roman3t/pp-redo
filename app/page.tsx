import { sections } from "@/app/content/guidelines.data";
import SectionRenderer from "@/app/components/blocks/SectionRenderer";

export default function Page() {
  return (
    <main className="">
      <div className="mx-auto w-full max-w-[1120px] px-5 md:px-8 lg:px-10">
        {sections.map((s) => (
          <SectionRenderer key={s.id} section={s} />
        ))}
      </div>
    </main>
  );
}
