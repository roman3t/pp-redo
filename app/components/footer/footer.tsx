import Link from "next/link";

type FooterLink = { label: string; href: string };

const primaryLinks: FooterLink[] = [
  { label: "Download Kit", href: "#download-kit" },
  { label: "Contact Us", href: "#contact" },
  { label: "Back to the top", href: "#top" },
];

const legalLinks: FooterLink[] = [
  { label: "Legal", href: "#legal" },
  { label: "Privacy", href: "#privacy" },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/10 h-118.75 md:h-107.75 lg:h-87 flex flex-col-reverse lg:ml-62.5">
      <div className="mx-auto w-full pb-8">
        <div className="flex flex-col gap-14.75 lg:flex-row lg:items-baseline px-4 md:px-10">
          <div className="shrink-0">
            <img
              src="/img/logofooter.png"
              alt="Redo"
              className="h-16 w-67.5  md:h-20.25 md:w-87.5"
            />
          </div>

          {/* Links */}
          <nav aria-label="Footer">
            <ul className="flex flex-col gap-4.75 text-[14px] font-medium text-black md:flex-row md:items-center md:gap-10">
              {primaryLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:opacity-70">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 lg:mt-7.5 border-t border-black/10 " />

        <div className="flex items-center justify-between gap-4 h-19 text-[12px] font-medium text-black px-4 md:px-10">
          <div className="flex items-center gap-6">
            <span>© Redo</span>

            <ul className="flex items-center gap-4.75">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:opacity-70">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="whitespace-nowrap">All Rights Reserved</div>
        </div>
      </div>
    </footer>
  );
}
