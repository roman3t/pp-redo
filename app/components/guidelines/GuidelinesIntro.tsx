import Link from "next/link";
import type { Section } from "@/app/content/guidelines.types";
import { Text } from "@/app/components/ui/Text";

export default function GuidelinesIntro({ sections }: { sections: Section[] }) {
  return (
    <section>
      <div className="overflow-hidden">
        <div className=" md:mt-0 relative flex h-65.5 items-center justify-center md:h-135">
          <img src={"img/hero.png"} className="mt-8 md:mt-0 " />
        </div>

        <div className="px-5 md:px-8 ">
          <div className=" md:grid md:grid-cols-[316px_1fr] md:gap-8 lg:grid-cols-[419px_1fr] md:h-104  lg:h-101.5 mt-8 pb-20 border-b border-black/10">
            <div className="mb-8 md:w-79 lg:w-104.75">
              <Text variant={"h1"}>
                Brand
                <br className="hidden md:block" /> Guidelines
              </Text>
            </div>

            <div className="text-[#575757] md:space-y-6">
              <Text variant={"paragraph"} preserveNewlines>
                {`This guide defines the visual language, design style, and principles that shape a clear and consistent brand experience, no matter the team or area of expertise.

                At its core, Redo is about precision and clarity—just like our mission to correct financial errors and optimize balance sheets. This guide lays out the essential design standards that bring our brand to life, from our color system and typography to
                accessibility benchmarks and documentation.

                Whether you’re designing for digital platforms or printed materials, these guidelines ensure every touchpoint reflects the trust and efficiency at the heart of Redo.`}
              </Text>
            </div>
          </div>

          <div className="mt-8 pb-20 border-b border-black/10 grid md:grid-cols-2 md:gap-x-8 md:gap-y-8">
            <div>
              <Text as="div" variant="h2" className="text-black mb-7.5">
                Contents
              </Text>
            </div>

            <div className="md:px-5">
              <ol className="space-y-2">
                {sections.map((s) => (
                  <li key={s.id}>
                    <Link
                      href={`#${s.id}`}
                      className="inline-flex items-center gap-2 hover:text-black"
                    >
                      <Text
                        as="span"
                        variant={"h2"}
                        className="w-7 text-[#575757]"
                      >
                        {s.number}
                      </Text>

                      <Text as="span" variant="h2" className="text-black">
                        {s.title}
                      </Text>
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
