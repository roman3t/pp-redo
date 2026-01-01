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
      <span className="text-[10px] font-medium text-black/40">
        {item.number}
      </span>
    </a>
  );
}

export function TabletNavbar() {
  return (
    <header className="">
      {/* Frame 800px / height ~88px */}
      <div className="mx-auto w-[800px] bg-white">
        <div className="flex flex-col">
          {/* Row 1 */}
          <div className="flex items-center justify-between px-[16px] py-[16px]">
            <div className="text-[18px] font-medium text-black">↩︎Redo</div>

            <div className="flex items-center gap-[16px] text-[13px] text-black/60">
              <a href="#download" className="hover:text-black/80">
                Download Kit
              </a>
              <a href="#contact" className="hover:text-black/80">
                Contact Us
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-black/10" />

          {/* Row 2 */}
          <nav className="px-[16px] py-[14px]">
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
