import { Text } from "../ui/Text";

type NavItem = { label: string; number: string; href: string };

const navItems: NavItem[] = [
  { label: "Brand Strategy", number: "01", href: "#brand-strategy" },
  { label: "Personality", number: "02", href: "#personality" },
  { label: "Logo", number: "03", href: "#logo" },
  { label: "Color", number: "04", href: "#color" },
  { label: "Typography", number: "05", href: "#typography" },
  { label: "Art Direction", number: "06", href: "#art-direction" },
];

function NavItemLink({ item }: { item: NavItem }) {
  return (
    <a href={item.href} className="flex items-baseline gap-1">
      <span className="text-[14px] font-medium text-black/90">
        {item.label}
      </span>
      <Text
        as="span"
        variant="display"
        className="text-text-2 -translate-y-1 -translate-x-1 text-[#575757]"
      >
        {item.number}
      </Text>
    </a>
  );
}

export function TabletNavbar() {
  return (
    <header className="relative">
      <div className="mx-auto h-22 bg-white fixed z-50 w-full px-8 border-b border-b-black/10">
        <div className="flex flex-col">
          <div className="flex items-center justify-between h-11 px-4 py-4">
            <div className="text-[18px] font-medium text-black">↩︎Redo</div>
            <div className="flex items-center gap-4 text-[13px] text-black/60">
              <Text variant={"caption2"} className="text-[#575757]">
                Download Kit
              </Text>
              <Text variant={"caption2"} className="text-[#575757]">
                Contact Us
              </Text>
            </div>
          </div>
          <div className="h-px w-full bg-divider-1/10 bg-black/10" />

          <nav className="h-11 px-4 py-3.5">
            <ul className="flex items-center justify-between">
              {navItems.map((item) => (
                <li key={item.number}>
                  <NavItemLink item={item} />
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
